function splitArray(input) {
  let start = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      [input[i], input[start]] = [input[start], input[i]];
      start++;
    }
  }
  return input.slice(start);
}
function getFirstMissingPositiveNumber(input) {
  const positiveElementsArray = splitArray(input);
  for (let i = 0; i < positiveElementsArray.length; i++) {
    const ele = Math.abs(positiveElementsArray[i]);
    if (ele < positiveElementsArray.length && positiveElementsArray[ele] > 0)
      positiveElementsArray[ele] = -positiveElementsArray[ele];
  }
  for (let i = 0; i < positiveElementsArray.length; i++) {
    if (positiveElementsArray[i] > 0) return i;
  }
}
const input = [4, 2, 0, -4, -4, -100, -1, -1000, -99, 1, 10, -50, 999, 4];
console.log(getFirstMissingPositiveNumber(input));
