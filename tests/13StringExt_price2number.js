const { StringExt } = require('../index.js');
new StringExt();

// const str = '3,212.127'; // 3212.13
const str = '3.212,12';
// const str = '212.12';
// const str = '2123';

const price = str.price2number();

console.log(typeof price, price); // number 3212.13
