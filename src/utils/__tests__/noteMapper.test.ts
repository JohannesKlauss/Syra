import { numberToMusicalBarTime } from '../noteMapper';

describe('numberToMusicalBarTime', () => {
  it('should convert integers to full bars', () => {
    expect(numberToMusicalBarTime(1)).toEqual('1');
    expect(numberToMusicalBarTime(4)).toEqual('4');
    expect(numberToMusicalBarTime(240)).toEqual('240');
  });

  it('should convert x.25, x.5 and x.75 to full bars and quarter notes', () => {
    expect(numberToMusicalBarTime(1)).toEqual('1');
    expect(numberToMusicalBarTime(1.25)).toEqual('1.2');
    expect(numberToMusicalBarTime(1.5)).toEqual('1.3');
    expect(numberToMusicalBarTime(1.75)).toEqual('1.4');
  });

  it('should convert x.125, x.375, x.625 and x.875 to full bars, quarter notes and eights', () => {
    expect(numberToMusicalBarTime(1)).toEqual('1');
    expect(numberToMusicalBarTime(1.125)).toEqual('1.1.3');
    expect(numberToMusicalBarTime(1.375)).toEqual('1.2.3');
    expect(numberToMusicalBarTime(1.625)).toEqual('1.3.3');
    expect(numberToMusicalBarTime(1.875)).toEqual('1.4.3');
  });
});