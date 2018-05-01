const fs = require('fs');

// Part One
fs.readFile('./input.txt', (err, data) => {
  if(err) {
      return (err);
  }
  console.time('FunChallenge1');

  const str = data.toString();
  let floor = 0;
  for(let i = 0; i < str.length; i++) {
    str[i] === '(' ? floor++ : floor--;
  }
  console.timeEnd('FunChallenge1');
  console.log(floor);
});

// Part Two
fs.readFile('./input.txt', (err, data) => {
  if(err) {
      return (err);
  }
  console.time('FunChallenge2');

  let floor = 0;
  const str = data.toString();
  let position = 0 ;
  let length = str.length;
  while (floor >= 0 || position >= length) {
    str[position++] === '(' ? floor++ : floor--;
  }

  console.timeEnd('FunChallenge2');
  console.log(position);
});