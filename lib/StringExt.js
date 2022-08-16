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
    this._cliBoja();
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


  /**
   * Color string for the CLI
   * @return string - modified string is returned
   */
  _cliBoja() {
    Object.assign(String.prototype, {
      cliBoja(optFG, optSPEC) {
        let that = this;

        const c = {
          reset: '\x1b[0m',
          bright: '\x1b[1m',
          bold: '\x1b[2m',
          italic: '\x1b[3m',
          underscore: '\x1b[4m',
          blink: '\x1b[5m',
          reverse: '\x1b[7m',
          hidden: '\x1b[8m',
          overwritten: '\x1b[9m',

          fg: {
            black: '\x1b[30m',
            red: '\x1b[31m',
            green: '\x1b[32m',
            yellow: '\x1b[33m',
            blue: '\x1b[34m',
            magenta: '\x1b[35m',
            cyan: '\x1b[36m',
            white: '\x1b[37m',
            crimson: '\x1b[38m' // Scarlet
          },
          bg: {
            black: '\x1b[40m',
            red: '\x1b[41m',
            green: '\x1b[42m',
            yellow: '\x1b[43m',
            blue: '\x1b[44m',
            magenta: '\x1b[45m',
            cyan: '\x1b[46m',
            white: '\x1b[47m',
            crimson: '\x1b[48m'
          }
        };

        that = that.replace(/\n/g, '__newline__');

        if (!!optFG && !optSPEC) {
          that = that.replace(/(.*)/, `${c.fg[optFG]}$1${c.reset}`);
        } else if (!!optFG && !!optSPEC) {
          that = that.replace(/(.*)/, `${c.fg[optFG]}${c[optSPEC]}$1${c.reset}`);
        }

        that = that.replace(/__newline__/g, '\n');

        return that;
      }
    });
  }




}


module.exports = StringExt;
