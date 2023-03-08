import { isObj } from './isObj';

export const classNames = <
  P extends [string, Record<string, boolean>] | [Record<string, boolean>]
>(
  ...params: P
) => {
  const [first, second] = params;
  const values: string[] = [];
  const getClassNamesFromObj = (val: Record<string, boolean>) => {
    const trueClassNames = Object.entries(val).reduce((acc, [key, val]) => {
      if (val === true) {
        return [...acc, key];
      }
      return acc;
    }, [] as string[]);
    values.push(...trueClassNames);
  };

  if (typeof first === 'string') {
    values.push(first);
  }
  if (isObj(first)) {
    getClassNamesFromObj(first);
  } else if (isObj(second)) {
    getClassNamesFromObj(second);
  }
  return values.join(' ').trim();
};
