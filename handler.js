'use strict';

module.exports.hello = async event => {
  console.log(JSON.stringify(event))
  return { message: 'Stream handler invoked successfully' };
};
