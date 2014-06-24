#!/usr/bin/env node --allow-natives-syntax
'use strict';
var test = require('tap').test
var rf = require('../')

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
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

Point.prototype.common = 3;

var pt;
function setup() {
  pt = new Point(1, 2);
}


/*jshint ignore: start */
/* Property access */ 
/*inspect(%GetProperty(pt, 'x'))
inspect(%KeyedGetProperty(pt, 'x'))
assert(inspect(%HasLocalProperty(pt, 'x')))*/


/*jshint ignore: end */

test('\nproperty access', function (t) {
  setup()
  t.equal(rf.getProperty(pt, 'x'), 1, 'getProperty local')
  t.equal(rf.getProperty(pt, 'common'), 3, 'getProperty proto')
  t.equal(rf.keyedGetProperty(pt, 'x'), 1, 'keyedGetProperty local')
  t.equal(rf.keyedGetProperty(pt, 'common'), 3, 'keyedGetProperty proto')

  t.ok(rf.hasLocalProperty(pt, 'x'), 'hasLocalProperty local')
  t.ok(!rf.hasLocalProperty(pt, 'common'), 'not hasLocalProperty proto')
  t.ok(rf.hasProperty(pt, 'x'), 'hasProperty local')
  t.ok(rf.hasProperty(pt, 'common'), 'hasProperty proto')

  rf.deleteProperty(pt, 'x', 0);
  t.ok(!rf.hasProperty(pt, 'x'), 'delete property local')
  t.end()
})

