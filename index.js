'use strict';

// src/runtime.h
// src/symbol.js
// src/objects.h


function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

function run(name, val) {
  try { 
    /*jshint evil: true */
    var fn = new Function('val', 'return %' + name + '(val)');
    var o = {};
    o[name] = fn(val);
    inspect(o);
  } catch (e) {
    console.error(name);
    console.error(e)
  }
}

var has = [
    'HasFastProperties'
  , 'HasFastSmiElements'
  , 'HasFastObjectElements'
  , 'HasFastSmiOrObjectElements'
  , 'HasFastDoubleElements'
  , 'HasFastHoleyElements'
  , 'HasDictionaryElements'
  , 'HasExternalArrayElements'
]

/*jshint ignore: start */
exports.getProperty      = function (o, key) { return %GetProperty(o, key) }
exports.keyedGetProperty = function (o, key) { return %KeyedGetProperty(o, key) }
exports.hasLocalProperty = function (o, key) { return %HasLocalProperty(o, key) }
exports.hasProperty      = function (o, key) { return %HasProperty(o, key) }
exports.deleteProperty   = function (o, key, mode) { return %DeleteProperty(o, key, mode) }
/*jshint ignore: end */
