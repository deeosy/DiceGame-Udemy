// let generateName = require('sillyname'); // this was used in node version 12

import generateName from 'sillyname'
import {randomSuperhero} from 'superheroes'
let sillyName = generateName();


console.log(`My name is ${sillyName}`);
console.log(`I am ${randomSuperhero()}`);
