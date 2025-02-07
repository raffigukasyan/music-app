export const getToProcent = (wParent: number, wElement: number): number => {
  return Math.floor((wElement / wParent) * 100);
};