const uniqid = require('uniqid');

export const createNewId = (prefix?: string): string => uniqid(prefix);