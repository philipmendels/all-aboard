export const isSelectionKeyDown = (event: React.MouseEvent<any>) => {
  if (event.shiftKey || event.metaKey || event.ctrlKey) {
      return true;
  }
  return false;
}