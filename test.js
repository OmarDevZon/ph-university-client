const array = [1, 2, 3, 4];

const result = array.reduce((acc, i) => {
//   console.log(acc);
  console.log(i);
  return acc + i;
}, 0);

console.log(`final result: ${result}`);
