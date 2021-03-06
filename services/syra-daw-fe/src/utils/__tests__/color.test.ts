import { colorToHexNumber, determineTextColor, hexToRgb, rgbToHex } from "../color";

describe('determineTextColor', function () {
  it('should give black or white depending on input color', function () {
    expect(determineTextColor('#000000')).toEqual('#ffffff');
    expect(determineTextColor('#ffffff')).toEqual('#000000');

    expect(determineTextColor('#33ff00')).toEqual('#ffffff');
    expect(determineTextColor('#ff3300')).toEqual('#000000');
    expect(determineTextColor('#3300ff')).toEqual('#ffffff');
    expect(determineTextColor('#0033ff')).toEqual('#ffffff');
    expect(determineTextColor('#00ff33')).toEqual('#ffffff');
    expect(determineTextColor('#ff0033')).toEqual('#000000');
  });

  it('should inverse the output if inverse flag is set to true', function () {
    expect(determineTextColor('#000000', true)).toEqual('#000000');
    expect(determineTextColor('#ffffff', true)).toEqual('#ffffff');

    expect(determineTextColor('#33ff00', true)).toEqual('#000000');
    expect(determineTextColor('#ff3300', true)).toEqual('#ffffff');
    expect(determineTextColor('#3300ff', true)).toEqual('#000000');
    expect(determineTextColor('#0033ff', true)).toEqual('#000000');
    expect(determineTextColor('#00ff33', true)).toEqual('#000000');
    expect(determineTextColor('#ff0033', true)).toEqual('#ffffff');
  });
});

describe('colorToHexNumber', function () {
  it('should return the decimal number of a hex string', function () {
    expect(colorToHexNumber('#000000')).toEqual(0);
    expect(colorToHexNumber('#0000ff')).toEqual(255);
    expect(colorToHexNumber('#00ffff')).toEqual(65535);
    expect(colorToHexNumber('#ffffff')).toEqual(16777215);
  });
});

describe('rgbToHex', function () {
  it('should return the hex string representation of the rgb decimal value', function () {
    expect(rgbToHex(255, 255, 255)).toEqual('#ffffff');
    expect(rgbToHex(0, 0, 0)).toEqual('#000000');
  });
});

describe('hexToRgb', function () {
  it("should return the rgb values of the hexadecimal representation", function() {
    expect(hexToRgb('#000000')).toEqual({
      red: 0,
      green: 0,
      blue: 0,
    });

    expect(hexToRgb('#ffffff')).toEqual({
      red: 255,
      green: 255,
      blue: 255,
    });
  });
});
