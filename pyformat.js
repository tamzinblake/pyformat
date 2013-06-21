var pyformat = function (str ,args ,kwargs) {
  /* Simple python-style string formatting */
  var i = 0
  if (!args || !args.length) args = []
  if (!kwargs) kwargs = {}
  var fn = function (match ,p1) {
    if (p1.length == 0) {
      return args[i++]
    }
    else if (p1.match(/^\d+$/)) {
      return args[p1]
    }
    return kwargs[p1]
  }
  return str.replace(/\{([^}]*)\}/g ,fn)
}

if (typeof exports === 'object') {
  module.exports = pyformat
}
else if (typeof define === 'function' && define.amd) {
  define(function() { return pyformat })
}
else {
  this.pyformat = pyformat
}
