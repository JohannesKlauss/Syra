export function determineTextColor(backgroundColor: string): string {
  const {red, green, blue} = hexToRgb(backgroundColor);

  if (red * 0.299 + green * 0.587 + blue * 0.114 > 150) {
    return '#000000';
  }

  return '#ffffff';
}

function hexToComponent(hex: string, startIndex: number) {
  return parseInt(hex.substr(startIndex, 2), 16);
}

function componentToHex(c: number) {
  const hex = c.toString(16);

  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex: string) {
  return {
    red: hexToComponent(hex, 1),
    green: hexToComponent(hex, 1),
    blue: hexToComponent(hex, 1)
  }
}

export function colorStringToHexNumber(color: string) {
  return (parseInt(color.substr(1), 16) << 8) / 256
}