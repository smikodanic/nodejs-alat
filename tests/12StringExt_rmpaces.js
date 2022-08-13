const { StringExt } = require('../index.js');
new StringExt();


const str = '   Some     title  \n\n\n about \t me \r';

const str1 = str.rmspaces();

console.log(str1);
console.log('fspaces::', JSON.stringify(str1));
