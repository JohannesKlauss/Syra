import {
  OnQueueActive, OnQueueCompleted,
  OnQueueError,
  OnQueueFailed,
  OnQueuePaused,
  OnQueueStalled,
  OnQueueWaiting
} from "@nestjs/bull";
import { Logger } from "@nestjs/common";
import { Job } from "bull";

export class BaseBullProcessor<T> {
  protected readonly logger = new Logger(BaseBullProcessor.name);

  @OnQueueError()
  protected errorHandler(error: Error) {
    this.logger.error(error.name);
    this.logger.error(error.message);
  }

  @OnQueueWaiting()
  protected waitingHandler(jobId: number) {
    this.logger.debug(`Job ${jobId} is waiting to be processed.`);
  }

  @OnQueueActive()
  protected activeHandler(job: Job<T>) {
    this.logger.debug(`Job ${job.id} has started.`);
  }

  @OnQueueStalled()
  protected stalledHandler(job: Job<T>) {
    this.logger.debug(`Job ${job.id} has been stalled.`);
    this.logger.debug(job);
  }

  @OnQueueFailed()
  protected failedHandler(job: Job<T>, error: Error) {
    this.logger.debug(`Job ${job.id} failed.`);
    this.logger.error(error.name);
    this.logger.error(error.message);
  }

  @OnQueuePaused()
  protected pausedHandler() {
    this.logger.debug('Queue has been paused.');
  }

  @OnQueueCompleted()
  protected completedHandler(job: Job<T>, result: any) {
    this.logger.debug('Queue has been completed with result:');
    this.logger.debug(`Job ${job.id}`);
    this.logger.debug(result);
  }
}