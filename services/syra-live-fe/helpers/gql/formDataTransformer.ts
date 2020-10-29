export default function transformFormDataToGqlInputObject<T extends Record<string, any>>(data: T) {
  const transformedData: {[name: string]: {set: any}} = {};

  Object.keys(data).forEach(key => transformedData[key] = {
    set: data[key],
  });

  return transformedData;
}