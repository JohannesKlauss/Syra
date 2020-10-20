import { linearRangeMapFactory } from './rangeMapper';
import { BucketMappingStrategy, BucketTestingStrategy, LinearRangeBucket } from '../types/Ranges';

const buckets = [
  {
    inputRange: {
      min: 120,
      max: 240,
    },
    outputRange: {
      min: -6,
      max: 6,
    },
    testingStrategy: BucketTestingStrategy.MIN
  },
  {
    inputRange: {
      min: 60,
      max: 120,
    },
    outputRange: {
      min: -18,
      max: -6,
    },
    testingStrategy: BucketTestingStrategy.BETWEEN
  },
  {
    inputRange: {
      min: 36,
      max: 60,
    },
    outputRange: {
      min: -30,
      max: -18,
    },
    testingStrategy: BucketTestingStrategy.BETWEEN
  },
  {
    inputRange: {
      min: 24,
      max: 36,
    },
    outputRange: {
      min: -42,
      max: -30,
    },
    testingStrategy: BucketTestingStrategy.BETWEEN
  },
  {
    inputRange: {
      min: 15,
      max: 24,
    },
    outputRange: {
      min: -60,
      max: -42,
    },
    testingStrategy: BucketTestingStrategy.BETWEEN
  },
  {
    inputRange: {
      min: 8,
      max: 15,
    },
    outputRange: {
      min: -95,
      max: -60,
    },
    testingStrategy: BucketTestingStrategy.BETWEEN
  },
  {
    inputRange: {
      min: 0,
      max: 8,
    },
    outputRange: {
      min: -100000,
      max: -95,
    },
    testingStrategy: BucketTestingStrategy.MAX
  }
]

export const mapVolumeFaderValToDb = linearRangeMapFactory(buckets);

export const mapDbToVolumeFaderVal = () => {
  const reverseMappingBuckets: LinearRangeBucket[] = buckets.map(bucket => ({...bucket, mappingStrategy: BucketMappingStrategy.REVERSE}));

  return linearRangeMapFactory(reverseMappingBuckets);
}