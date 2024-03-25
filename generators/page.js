/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
/**
 *
 * Generators
 * @format*
 */

const pageGenerator = require('./page/index.js');

module.exports = plop => {
  plop.setGenerator('page', pageGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
