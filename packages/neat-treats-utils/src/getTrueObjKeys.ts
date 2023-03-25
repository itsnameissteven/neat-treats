export const getTrueObjKeys = (val: Record<string, boolean>) => {
  return Object.entries(val).reduce((acc, [key, val]) => {
    if (val === true) {
      return [...acc, key];
    }
    return acc;
  }, [] as string[]);
};
