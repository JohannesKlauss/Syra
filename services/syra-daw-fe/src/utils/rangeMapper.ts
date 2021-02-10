import { BucketMappingStrategy, BucketTestingStrategy, LinearRange, LinearRangeBucket } from '../types/Ranges';

export function linearRangeMap(val: number, input: LinearRange, output: LinearRange): number {
  return (val - input.min) * (output.max - output.min) / (input.max - input.min) + output.min;
}

export const linearRangeMapFactory = (buckets: LinearRangeBucket[]) => (val: number): number => {
  for (let i = 0; i < buckets.length; i++) {
    const {testingStrategy, inputRange, outputRange, mappingStrategy} = buckets[i];
    const checkBucket = mappingStrategy === BucketMappingStrategy.REVERSE ? outputRange : inputRange;
    let isInBucket;

    switch (testingStrategy) {
      case BucketTestingStrategy.MIN: isInBucket = val >= checkBucket.min; break;
      case BucketTestingStrategy.BETWEEN: isInBucket = val >= checkBucket.min && val <= checkBucket.max; break;
      case BucketTestingStrategy.MAX: isInBucket = val <= checkBucket.max; break;
    }

    if (isInBucket) {
      return mappingStrategy === BucketMappingStrategy.REVERSE
        ? linearRangeMap(val, outputRange, inputRange)
        : linearRangeMap(val, inputRange, outputRange);
    }
  }

  throw new Error(`value ${val} cannot be mapped to any given LinearRangeBucket`);
};