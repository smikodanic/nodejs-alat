# nodejs-alat
> Handy libraries for NodeJS.



## Installation
```bash
$ npm install --save nodejs-alat
```


## Howto
```javascript
/*** NodeJS script ***/
const { rand, StringExt } = require('nodejs-alat');
```



## API

### /************ Rand ***********/
*Random library.*

#### integerBetween(min, max) :number
Generate random integer number between min and max number.

#### floatBetween(min, max, dec) :number
Generate random float number between min and max number with dec decimal places.

#### shuffleArray(arr) :array
Randomize (shuffle) elements in array.

#### rndm() :number
Generate random number.



### /************ StringExt ***********/
*Extended String methods.*

```javascript
 const { StringExt } = require('nodejs-alat');
 new StringExt();

 // now all strings are extended with the methods, for example:
 const str = 'some string'.rmspaces(); // somestring
 ```

#### String.fspaces()
Format empty spaces. Remove empty spaces from left and right and replace it with one empty space inside string.
Replace tab, newline with one empty space.

#### String.rmspaces()
Remove empty spaces from left and right and replace it with one empty space inside string.
Replace multiple newlines with only one, for example \n\n\n -> \n.

#### String.price2number
Convert price string to number.
```
2,123.00 -> 21123.00
2.123,13 -> 21123.13
```

```javascript
const { StringExt } = require('../index.js');
new StringExt();

// const str = '3,212.127'; // 3212.13
const str = '3.212,12';
// const str = '212.12';
// const str = '2123';

const price = str.price2number();
console.log(typeof price, price); // number 3212.13
```


### License
The software licensed under [AGPL-3](LICENSE).
