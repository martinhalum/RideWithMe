/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
/**
 *
 * Generators
 * @format*
 */

const componentGenerator = require('./component/index.js');

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
