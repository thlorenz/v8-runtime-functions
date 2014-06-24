#!/usr/bin/env node --allow-natives-syntax
'use strict';

// src/runtime.h
// src/symbol.js
// src/objects.h

/*var objOps = [
    '_ValueOf'
  , 'SymbolDescription'
]


var is = [
  'IsPropertyEnumerable', 
]


var transforms = [
  'ToFastProperties'
]

var fns= [
  'OptimizeFunctionOnNextCall'
]

var strings = [
  'IsTemplate'
]

var notworking = [
  'CreateSymbol'
]*/

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

function runNoArgs(name) {
  try { 
    /*jshint evil: true */
    var fn = new Function('return %' + name + '()');
    var o = {};
    o[name] = fn();
    inspect(o);
  } catch (e) {
    console.error(name);
    console.error(e)
  }
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  /*jshint ignore: start */
  var is = %_IsConstructCall();
  console.error('is construct call', is);
  /*jshint ignore: end */
}

var pt = new Point(1, 2);
var ar = new Array(10000);
var st = 'Hello World';

var has = [
    'HasFastProperties'
  , 'HasFastSmiElements'
  , 'HasFastObjectElements'
  , 'HasFastSmiOrObjectElements'
  , 'HasFastDoubleElements'
  , 'HasFastHoleyElements'
  , 'HasDictionaryElements'
  , 'HasExternalArrayElements'
].forEach(function (name) { run(name, pt) });


/*jshint ignore: start */
/* Property access */ 
inspect(%GetProperty(pt, 'x'))
inspect(%KeyedGetProperty(pt, 'x'))
assert(inspect(%HasLocalProperty(pt, 'x')))


/*jshint ignore: end */

