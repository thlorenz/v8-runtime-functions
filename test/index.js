// node --allow-natives-syntax
'use strict';
var test = require('tap').test
var rf = require('../')

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
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

test('\nproperty access', function (t) {
  setup()
  t.equal(rf.GetProperty(pt, 'x'), 1, 'GetProperty local')
  t.equal(rf.GetProperty(pt, 'common'), 3, 'GetProperty proto')
  t.equal(rf.KeyedGetProperty(pt, 'x'), 1, 'KeyedGetProperty local')
  t.equal(rf.KeyedGetProperty(pt, 'common'), 3, 'KeyedGetProperty proto')

  t.ok(rf.HasLocalProperty(pt, 'x'), 'HasLocalProperty local')
  t.ok(!rf.HasLocalProperty(pt, 'common'), 'not HasLocalProperty proto')
  t.ok(rf.HasProperty(pt, 'x'), 'HasProperty local')
  t.ok(rf.HasProperty(pt, 'common'), 'HasProperty proto')

  rf.DeleteProperty(pt, 'x', 0);
  t.ok(!rf.HasProperty(pt, 'x'), 'Delete property local')
  t.end()
})

test('\nvarious', function (t) {
  t.ok(0 < rf.GetHeapUsage() < process.memoryUsage().heapUsed, 'GetHeapUsage')
  t.end()
})
