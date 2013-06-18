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

/*
console.log(pyformat( 'The {} {} jumped over the {}'
                    , ['brown' ,'fox' ,'foobar']
                    ))
console.log(pyformat( 'The {0} {1} jumped over the {1}'
                    , ['brown' ,'fox' ,'foobar']
                    ))
console.log(pyformat('The {color} {animal} jumped over the {thing}'
                    , [] ,{color: 'brown' ,animal: 'fox' ,thing: 'foobaz'}
                    ))
*/
