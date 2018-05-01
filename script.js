const fs = require('fs');

// Part One
fs.readFile('./input.txt', (err, data) => {
  if(err) {
      return (err);
  }
  console.time('FunChallenge1');

  const str = data.toString();
  let length = 0;
  for(let i = 0; i < str.length; i++) {
    str.charAt(i) === '(' ? length++ : length--;
  }
  console.timeEnd('FunChallenge1');
  console.log(length);
});

// Part Two
fs.readFile('./input.txt', (err, data) => {
  if(err) {
      return (err);
  }
  console.time('FunChallenge2');
  
  let length = 0;
  const str = data.toString();
  let i = 0 ;
  let len = str.length;
  while (length >= 0 || i >= len) {
    str[i] === '(' ? length++ : length--;
    i++;
  }

  console.timeEnd('FunChallenge2');
  console.log(i);
});