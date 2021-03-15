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

    const transcodeStream = originalMimeType !== 'audio/flac' ? this.openFaasService.invokeFunction(OpenFaasFunction.FFMPEG, fileStream) : null;
    const peakWaveform = this.openFaasService.invokeFunction(OpenFaasFunction.AUDIO_WAVEFORM, fileStream);

    transcodeStream && transcodeStream.then(stream => this.uploadTranscodedFile(stream.data, job.data));
    peakWaveform.then(stream => this.uploadPeakWaveformFile(stream.data, job.data));

    Promise.all([transcodeStream, peakWaveform]).finally(() => {
      fs.unlinkSync(`${__dirname}/tmp/${tmpFileName}`);
    });
  }

  async uploadTranscodedFile(readableStream: NodeJS.ReadableStream, jobData: AudioTranscodeJob) {
    const { tmpFileName, userId, projectId, originalName, originalMimeType } = jobData;

    this.logger.debug(`Transcoder finished`);

    this.logger.debug(`Upload transcoded file`);

    const location = await this.spacesService.putFile(
      MD5(userId).toString(),
      `${tmpFileName}.flac`,
      'audio/flac',
      readableStream
    );

    this.logger.debug(`S3 Space location: ${location}`);

    const createdAsset = await this.prismaService.asset.create({
      data: {
        isPublic: false,
        location,
        owner: {connect: {id: userId}},
        usedInProjects: { create: { projectId } },
        mimeType: originalMimeType,
        name: originalName.replace(/\.[0-9a-z]+$/i, `.flac`),
      },
      select: {
        id: true,
      },
    });

    await this.pubSubService.getPubSub().publish(Subscriptions.UPLOADED_FILE_PROCESSED, {
      id: createdAsset.id,
      projectId,
    });

    this.logger.debug('Published transcoded file.');
  }

  async uploadPeakWaveformFile(readableStream: NodeJS.ReadableStream, jobData: AudioTranscodeJob) {
    const { tmpFileName, userId, projectId, originalName, originalMimeType } = jobData;

    this.logger.debug(`Peak Waveform analyzing finished`);

    this.logger.debug(`Upload waveform file`);

    const location = await this.spacesService.putFile(
      MD5(userId).toString(),
      `${tmpFileName}.dat`,
      'application/dat',
      readableStream
    );

    this.logger.debug(`S3 Space location: ${location}`);

    const createdAsset = await this.prismaService.asset.create({
      data: {
        isPublic: false,
        location,
        owner: {connect: {id: userId}},
        usedInProjects: { create: { projectId } },
        mimeType: originalMimeType,
        name: originalName.replace(/\.[0-9a-z]+$/i, `.dat`),
      },
      select: {
        id: true,
      },
    });

    await this.pubSubService.getPubSub().publish(Subscriptions.PEAK_WAVEFORM_ANALYZED, {
      id: createdAsset.id,
      projectId,
    });

    this.logger.debug('Published peak waveform file.');
  }
}
