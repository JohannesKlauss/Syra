export function determineTextColor(backgroundColor: string, inverse?: boolean): string {
  const {red, green, blue} = hexToRgb(backgroundColor);

  const colorValue = red * 0.299 + green * 0.587 + blue * 0.114;

  if (colorValue > 150 && inverse !== true) {
    return '#000';
  }

  return '#fff';
}

function hexToComponent(hex: string, startIndex: number) {
  return parseInt(hex.substr(startIndex, 2), 16);
}

function componentToHex(c: number) {
  const hex = c.toString(16);

  return hex.length === 1 ? "0" + hex : hex;
}

export function colorToHexNumber(color: string) {
  return parseInt(color.substr(1), 16);
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