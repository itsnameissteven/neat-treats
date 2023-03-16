export const filterById = <T extends { id: string | number }>(
  arr: T[],
  id: string | number,
  isMatch = true
) => {
  return isMatch
    ? arr.filter((el) => el.id === id) || []
    : arr.filter((el) => el.id !== id) || [];
};
