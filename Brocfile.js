var lionAndMouse = require('broccoli-lion-and-mouse');

var lamDemo = lionAndMouse('src', {
  destDir : '/'
});

module.exports = lamDemo;

// Try it: `broccoli build dist`
