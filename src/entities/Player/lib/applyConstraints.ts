export const applyConstraints = (
  containerWidth: number,
  draggableWidth: number
): number => {
  if (draggableWidth < 0) {
    return 0;
  } else if (draggableWidth > containerWidth) {
    return containerWidth;
  }
  return draggableWidth;
};
