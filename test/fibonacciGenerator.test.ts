import { fibonacciGenerator } from "../helpers/fibonacciGenerator";

describe("test fibonacci function", () => {
  it("should return 0 for fibonacciGenerator(0)", () => {
    expect(fibonacciGenerator(0)).toBe(0);
  });
  it("should return 1 for fibonacciGenerator(1)", () => {
    expect(fibonacciGenerator(1)).toBe(1);
  });
  it("should return 1 for fibonacciGenerator(2)", () => {
    expect(fibonacciGenerator(2)).toBe(1);
  });
  it("should return 2 for fibonacciGenerator(3)", () => {
    expect(fibonacciGenerator(3)).toBe(2);
  });
  it("should return 3 for fibonacciGenerator(4)", () => {
    expect(fibonacciGenerator(4)).toBe(3);
  });
  it("should return 5 for fibonacciGenerator(5)", () => {
    expect(fibonacciGenerator(5)).toBe(5);
  });
  it("should return 8 for fibonacciGenerator(6)", () => {
    expect(fibonacciGenerator(6)).toBe(8);
  });
});
