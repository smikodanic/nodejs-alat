class Rand {

  /**
   * Generate random integer number between min and max number.
   * @param {Number} min - 5000
   * @param {Number} max - 8000
   */
  integerBetween(min, max) {
    const diff = max - min;
    let rnd = min + diff * this.rndm();
    rnd = Math.round(rnd);
    return rnd;
  }


  /**
   * Generate random float number between min and max number.
   * @param {Number} min - 5.000
   * @param {Number} max - 5.005
   * @param {Number} dec - number of decimal places
   */
  floatBetween(min, max, dec) {
    const diff = max - min;
    let rnd = min + (diff * this.rndm());
    rnd = rnd.toFixed(dec);
    return rnd;
  }


  /**
   * Randomize (shuffle) JS Array.
   * @param  {Array} arr     -array to be shuffled ['a', 12, 'b', 22, 'c', false]
   * @return {Array}         -shuffled array
   */
  shuffleArray(arr) {
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i -= 1) {
      j = Math.floor(this.rndm() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }


  /**
   * JS randomizer 16 decimal places
   * @return - 0.8812394369218242
   */
  rndm() {
    return Math.random();
  }

}

module.exports = new Rand();
