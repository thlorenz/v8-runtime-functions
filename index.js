'use strict';
  
var flags = require('v8-flags').flags;
flags.allow_natives_syntax(true);
module.exports = require('./runtime-functions');
