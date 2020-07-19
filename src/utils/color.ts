export function determineTextColor(backgroundColor: string): string {
  const red = parseInt(backgroundColor.substr(1, 2), 16);
  const green = parseInt(backgroundColor.substr(3, 2), 16);
  const blue = parseInt(backgroundColor.substr(5, 2), 16);

  if (red * 0.299 + green * 0.587 + blue * 0.114 > 150) {
    return '#000';
  }

  return '#fff';
}