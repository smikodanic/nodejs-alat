/**
 * Extended String methods
 * Usage:
 * const { StringExt } = require('nodejs-alat');
 * new StringExt();
 * // now all strings are extended with the methods, for example:
 * 'some string'.rmspaces();
 */
class StringExt {

  constructor() {
    this._fspaces();
    this._rmspaces();
    this._price2number();
  }


  /**
   * Format spaces.
   * Trim empty spaces from left and right and replace it with one empty space inside string.
   * Replace tab, newline with one empty space.
   */
  _fspaces() {
    Object.assign(String.prototype, {
      fspaces() {
        let that = this;
        that = that.trim();
        that = that.replace(/\s+/g, ' ');
        that = that.replace(/\t+/g, ' ');
        that = that.replace(/\n+/g, ' ');
        that = that.replace(/\r+/g, ' ');
        return that;
      }
    });
  }


  /**
   * Remove all whitespaces.
   */
  _rmspaces() {
    Object.assign(String.prototype, {
      rmspaces() {
        let that = this;
        that = that.trim();
        that = that.replace(/\s+/g, '');
        that = that.replace(/\n+/g, '');
        that = that.replace(/\r+/g, '');
        that = that.replace(/\t+/g, '');
        return that;
      }
    });
  }


  /**
   * Convert price string to number
   * 2,123.00 -> 21123.00
   * 2.123,00 -> 21123.00
   * @param {string} p - price
   * @returns {number}
   */
  _price2number() {
    Object.assign(String.prototype, {
      price2number() {
        let p = this; // price
        if (!p) { return null; }

        p = p
          .replace(/\n+/g, ' ')
          .replace(/\s+/g, ' ')
          .replace(/\$|\€|\£|\¥‎|\₽|USD|EUR|GBP|RUB|KN/i, '')
          .trim();

        // replace comma as decimal separator with dot
        const matchedA = p.match(/(.)\d{2}$/);
        const decimal_separator = matchedA[1];
        if (decimal_separator === ',') { p = p.replace(',', '.'); }

        // remove first . or , if there are two
        if (/\d+[\.|\,]\d+\.\d+/.test(p)) { p = p.replace(/\.|\,/, ''); }

        // convert to number
        p = parseFloat(p);

        // round to 2 decimals
        p = +p.toFixed(2);


        // console.log('p::', p);
        return p;
      }
    });
  }




}


module.exports = StringExt;
