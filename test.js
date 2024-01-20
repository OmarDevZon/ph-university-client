const array = [1, 2, 3, 4];
import * as bcrypt from 'bcrypt';


const result = array.reduce((acc, i) => {
//   console.log(acc);
  console.log(i);
  return acc + i;
}, 0);

console.log(`final result: ${result}`);



console.log('hit admin')

  const pass = 'OMfa35@g';
  const saltRounds = 12;
  
  bcrypt.hash(pass, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
    } else {
      console.log(hash);
    }
  });
  