import { BucketTestingStrategy } from '../types/Ranges';
import { linearRangeMapFactory } from './rangeMapper';

const buckets = [
  {
    inputRange: {
      min: -12,
      max: 0,
    },
    outputRange: {
      min: 120,
      max: 160,
    },
    testingStrategy: BucketTestingStrategy.MIN
  },
  {
    inputRange: {
      min: -24,
      max: -12,
    },
    outputRange: {
      min: 80,
      max: 120,
    },
    testingStrategy: BucketTestingStrategy.BETWEEN
  },
  {
    inputRange: {
      min: -40,
      max: -24,
    },
    outputRange: {
      min: 40,
      max: 80,
    },
    testingStrategy: BucketTestingStrategy.BETWEEN
  },
  {
    inputRange: {
      min: -60,
      max: -40,
    },
    outputRange: {
      min: 2,
      max: 40,
    },
    testingStrategy: BucketTestingStrategy.BETWEEN
  },
  {
    inputRange: {
      min: -80,
      max: -60,
    },
    outputRange: {
      min: 1,
      max: 1,
    },
    testingStrategy: BucketTestingStrategy.BETWEEN
  },
  {
    inputRange: {
      min: -Infinity,
      max: -80,
    },
    outputRange: {
      min: 0,
      max: 1,
    },
    testingStrategy: BucketTestingStrategy.MAX
  }
]

export const mapDbToUiMeterVal = linearRangeMapFactory(buckets);