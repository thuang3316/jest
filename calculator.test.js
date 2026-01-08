import calculator from "./functions";

test("calculator.add adds numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator.subtract subtracts numbers", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("calculator.multiply multiplies numbers", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("calculator.divide divides numbers", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});