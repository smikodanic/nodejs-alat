const { StringExt } = require('../index.js');
new StringExt();


const str = '   One small    town  \n\n\n in \r my country \t\t for vacation  .      ';

const str1 = str.fspaces();

console.log(str1);
console.log('fspaces::', JSON.stringify(str1));
