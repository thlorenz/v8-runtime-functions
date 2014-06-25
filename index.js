'use strict';
  
var rf = require('./build/Release/runtime_functions');
rf.allowNatives();

module.exports = require('./runtime-functions');
