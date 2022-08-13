const { rand } = require('../index.js');

const arr = ['one', 'two', 'three'];
const arr_shuffled = rand.shuffleArray(arr);

console.log(arr_shuffled); // [ 'two', 'three', 'one' ]

