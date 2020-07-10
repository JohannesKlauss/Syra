export interface LinearRange {
  min: number;
  max: number;
}

export enum BucketTestingStrategy {
  MIN,
  MAX,
  BETWEEN,
}

export enum BucketMappingStrategy {
  DEFAULT,
  REVERSE,
}

export interface LinearRangeBucket {
  inputRange: LinearRange;
  outputRange: LinearRange;
  testingStrategy: BucketTestingStrategy;
  mappingStrategy?: BucketMappingStrategy;
}