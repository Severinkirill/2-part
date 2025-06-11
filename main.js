function separateDigits(number) {
  const numStr = String(number);
  return numStr.split('').join(' ');
}

const num = 19878;
const result = separateDigits(num);
console.log(result);