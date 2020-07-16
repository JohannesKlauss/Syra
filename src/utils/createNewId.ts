const uniqid = require('uniqid');

export const createNewId = (prefix?: string) => uniqid(prefix);