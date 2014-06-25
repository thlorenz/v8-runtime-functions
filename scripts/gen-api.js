'use strict';
var fs = require('fs')
  , path = require('path')

var existingLines = fs.readFileSync(path.join(__dirname, '..', 'index.js'), 'utf8').split('\n');
var existingFuncs = existingLines
  .map(function (x) { return x.trim() })
  .filter(function (x) { return (/^exports\..+= *function *\(/).test(x) })
  .map(function (x) { return x.split('.')[1].split('=')[0].trim() })

function appendFile(file, prefix) {
  prefix = prefix || '';
  var lines = fs.readFileSync(file, 'utf8').split('\n');
  var funcs = lines
    .map(function (x) { return x.trim() })
    .filter(function (x) { return (/^F\(\w+, \d, \d\)/).test(x) })
    .map(function (x) { return x.replace(/\\/g, '').trim().slice(2, -1) })
    .map(function (x) { 
      var parts = x.split(',');
      return { name: parts[0], args: parts[1], returns: parts[2] }
    })
    .filter(function (x) { return !~existingFuncs.indexOf(x.name) })


  function render(x) {
    var commentLines = [
        '/**'
      , ' * Undocumented'
      , ' * '
      , ' * @name ' + x.name
      , ' * @function'
    ];
    for (var i = 1; i <= x.args; i++) commentLines.push(' * @param  {} arg' + i)

    if (x.returns > 1) console.error('More than one return for ',  x.name);

    commentLines.push(' * @return {}');
    commentLines.push(' */' );

    var args = '';
    for (var j = 1; j <= x.args; j++) {
      args += 'arg' + j;
      if (j < x.args) args += ', ';
    }

    var functionLines = [
          'exports.' + prefix + x.name + ' = function ' + prefix + x.name + '(' + args + ') {'
      , '  /*jshint ignore: start */'
      , '  return ' + prefix + '%' + x.name + '(' + args + ');'
      , '  /*jshint ignore: end */'
      , '}'
      , ''
    ];

    return commentLines.concat(functionLines).join('\n');
  }

  return funcs.map(function (x) { return render(x) });
}

var appendLines = []
  .concat([
      '// The interface to C++ runtime functions.'
    , '// ----------------------------------------------------------------------------'
    , '// RUNTIME_FUNCTION_LIST_ALWAYS defines runtime calls available in both'
    , '// release and debug mode.'
    , '// This macro should only be used by the macro RUNTIME_FUNCTION_LIST.'
  ])
  .concat(appendFile(path.join(__dirname, '..', 'v8', 'runtime-functions-always.h')))
  .concat([ 
    '/* Debugger support*/' 
  ])
  .concat(appendFile(path.join(__dirname, '..', 'v8', 'runtime-functions-debugger.h')))
  .concat([
      '// INLINE_FUNCTION_LIST defines all inlined functions accessed'
    , '// with a native call of the form %_name from within JS code.'
  ])
  .concat(appendFile(path.join(__dirname, '..', 'v8', 'inline-functions.h'), '_'))
  .concat(appendFile(path.join(__dirname, '..', 'v8', 'inline-functions-no-underscore.h')))


var src = existingLines.concat(appendLines).join('\n');

fs.writeFileSync(path.join(__dirname, '..', 'index.js'), src, 'utf8');
