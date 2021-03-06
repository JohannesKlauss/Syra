import { clamp, isBetween, isIntersecting, snap } from "../numbers";

describe('isBetween', function () {
  it("should return a boolean if number is between (the borders included) a range ", function() {
    expect(isBetween(5, [0, 5])).toBe(true);
    expect(isBetween(6, [0, 5])).toBe(false);
    expect(isBetween(0, [0, 5])).toBe(true);
    expect(isBetween(-1, [0, 5])).toBe(false);
  });

  it("should return a boolean if number is between (the borders excluded) a range ", function() {
    expect(isBetween(4, [0, 5], false)).toBe(true);
    expect(isBetween(5, [0, 5], false)).toBe(false);
    expect(isBetween(6, [0, 5], false)).toBe(false);
    expect(isBetween(1, [0, 5], false)).toBe(true);
    expect(isBetween(0, [0, 5], false)).toBe(false);
    expect(isBetween(-1, [0, 5], false)).toBe(false);
  });
});

describe('isIntersecting', function() {
  it("should return true if two ranges are overlapping", function() {
    expect(isIntersecting([-5, 5], [0, 7])).toBe(true);
    expect(isIntersecting([-5, 5], [-7, 7])).toBe(true);
    expect(isIntersecting([-5, 5], [8, 9])).toBe(false);
    expect(isIntersecting([-5, 5], [-10, -8])).toBe(false);
    expect(isIntersecting([-5, 5], [-10, -4])).toBe(true);
    expect(isIntersecting([-5, 5], [-10, -6])).toBe(false);
    expect(isIntersecting([-5, 5], [-10, 10])).toBe(true);
  });
});

describe('clamp', function() {
  it("should clamp out of bounds values to the given range borders", function() {
    expect(clamp(4, 0, 7)).toBe(4);
    expect(clamp(-1, 0, 7)).toBe(0);
    expect(clamp(9, 0, 7)).toBe(7);
  });
});

describe('snap', function() {
  it("should snap the value to a given step increment starting from 0", function() {
    expect(snap(25, 20)).toBe(25);
    expect(snap(25, 10)).toBe(0);
    expect(snap(25, 12)).toBe(0);
    expect(snap(25, 13)).toBe(25);
    expect(snap(25, 57)).toBe(50);
    expect(snap(25, 143)).toBe(150);
  });
});