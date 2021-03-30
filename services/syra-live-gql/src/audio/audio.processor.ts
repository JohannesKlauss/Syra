import { InjectQueue, Process, Processor } from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job, Queue } from "bull";
import { SpacesService } from "../files/spaces.service";
import { AudioTranscodeJob } from "../../types/AudioTranscodeJob";
import * as fs from "fs";
import { PrismaService } from "../prisma/prisma.service";
import { MD5 } from "crypto-js";
import { PubSubService } from "../pub-sub/pub-sub.service";
import { Subscriptions } from "../../types/Subscriptions";
import { OpenFaasFunction } from "../../types/OpenFaas";
import { OpenFaasService } from "../open-faas/open-faas.service";

// TODO: THIS IS UGLY AS HELL AND ERROR PRONE. CLEAN THIS UP!

@Processor('audio')
export class AudioProcessor {
  constructor(
    @InjectQueue('audio') private readonly audioQueue: Queue<AudioTranscodeJob>,
    private readonly spacesService: SpacesService,
    private readonly prismaService: PrismaService,
    private readonly pubSubService: PubSubService,
    private readonly openFaasService: OpenFaasService,
  ) {}

  private readonly logger = new Logger(AudioProcessor.name);

  @Process('transcode')
  async handleTranscode(job: Job<AudioTranscodeJob>) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);

    const { tmpFileName, originalMimeType } = job.data;

    this.logger.debug('Get file from tmp');

    const fileStream = await fs.createReadStream(`${__dirname}/tmp/${tmpFileName}`);

    this.logger.debug(`Run transcoder`);
    this.logger.debug(`Run Peak Waveform analyzer`);

    let transcodeStream;

    if (!['audio/flac', 'audio/mpeg'].includes(originalMimeType)) {
      transcodeStream = this.openFaasService.invokeFunction(OpenFaasFunction.FFMPEG, fileStream);
    } else if (originalMimeType === 'audio/mpeg') {
      transcodeStream = this.openFaasService.invokeFunction(OpenFaasFunction.FFMPEG_MP3, fileStream);
    }

    const peakWaveform = this.openFaasService.invokeFunction(OpenFaasFunction.AUDIO_WAVEFORM, fileStream);

    if (transcodeStream) {
      transcodeStream.then(stream => this.uploadTranscodedFile(stream.data, job.data));
    } else {
      transcodeStream = this.uploadTranscodedFile(fileStream, job.data)
    }

    transcodeStream && transcodeStream.then(stream => this.uploadTranscodedFile(stream.data, job.data));
    peakWaveform.then(stream => this.uploadPeakWaveformFile(stream.data, job.data));

    Promise.all([transcodeStream, peakWaveform]).finally(() => {
      fs.unlinkSync(`${__dirname}/tmp/${tmpFileName}`);
    });
  }

  async uploadTranscodedFile(readableStream: NodeJS.ReadableStream, jobData: AudioTranscodeJob) {
    const { tmpFileName, userId, projectId, originalName, jobId } = jobData;

    const mimeType = 'audio/flac';

    this.logger.debug(`Transcoder finished`);

    this.logger.debug(`Upload transcoded file`);

    const location = await this.spacesService.putFile(
      MD5(userId).toString(),
      `${tmpFileName}.flac`,
      mimeType,
      readableStream
    );

    this.logger.debug(`S3 Space location for transcoded file: ${location}`);

    const createdAsset = await this.prismaService.asset.create({
      data: {
        isPublic: false,
        location,
        owner: {connect: {id: userId}},
        usedInProjects: { create: { projectId } },
        mimeType,
        name: originalName.replace(/\.[0-9a-z]+$/i, `.flac`),
      },
      select: {
        id: true,
      },
    });

    await this.pubSubService.getPubSub().publish(Subscriptions.UPLOADED_FILE_PROCESSED, {
      id: createdAsset.id,
      jobId,
      projectId,
      mimeType,
    });

    this.logger.debug('Published transcoded file.');
  }

  async uploadPeakWaveformFile(readableStream: NodeJS.ReadableStream, jobData: AudioTranscodeJob) {
    const { tmpFileName, userId, projectId, originalName, jobId } = jobData;

    const mimeType = 'application/dat';

    this.logger.debug(`Peak Waveform analyzing finished`);

    this.logger.debug(`Upload waveform file`);

    const location = await this.spacesService.putFile(
      MD5(userId).toString(),
      `${tmpFileName}.dat`,
      mimeType,
      readableStream
    );

    this.logger.debug(`S3 Space location for waveform file: ${location}`);

    const createdAsset = await this.prismaService.asset.create({
      data: {
        isPublic: false,
        location,
        owner: {connect: {id: userId}},
        usedInProjects: { create: { projectId } },
        mimeType,
        name: originalName.replace(/\.[0-9a-z]+$/i, `.dat`),
      },
      select: {
        id: true,
      },
    });

    await this.pubSubService.getPubSub().publish(Subscriptions.PEAK_WAVEFORM_ANALYZED, {
      id: createdAsset.id,
      jobId,
      projectId,
      mimeType,
    });

    this.logger.debug('Published peak waveform file.');
  }
}
