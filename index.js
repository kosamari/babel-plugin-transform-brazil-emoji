'use strict';

exports.default = function (babel) {
  const { types: t } = babel;
  return {
    name: 'transform-brazil-emoji', // not required
    visitor: {
      StringLiteral(path) {
        path.node.value = path.node.value.replace(/Brazil/g, '🇧🇷');
      }
    }
  };
}

module.exports = exports['default'];