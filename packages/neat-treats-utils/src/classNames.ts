import { isObj } from './isObj';
import { getTrueObjKeys } from './getTrueObjKeys';

export const classNames = (
  ...params: (string | Record<string, boolean> | undefined | null)[]
) => {
  const values: string[] = [];
  params.forEach((arg) => {
    if (!arg) return;
    if (typeof arg === 'string') {
      values.push(arg);
    }
    if (isObj(arg)) {
      values.push(...getTrueObjKeys(arg));
    }
  });
  return values.join(' ').trim();
};
