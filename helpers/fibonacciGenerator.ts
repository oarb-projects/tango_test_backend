export const fibonacciGenerator = (receivedNumber: number): number => {
  let num1 = 0,
    num2 = 1,
    nextNumber: number = 0;
  let generatedNumbers = 0;

  while (generatedNumbers < receivedNumber) {
    if (receivedNumber === num1) return num1;
    if (receivedNumber === num2 || receivedNumber === 2) return num2;
    num1 = num2;
    num2 = nextNumber;
    nextNumber = num1 + num2;
    generatedNumbers++;
  }
  return nextNumber;
};
