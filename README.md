## pyformat

Simple Python-style string formatting for JS

This implements a simple subset of the Python string.format method
capabilities. The idea is that you can share a format string between
JS and Python.

## Installation

```bash
npm install pyformat
```

## Usage

```javascript
var pyformat = require('pyformat')
pyformat(format_string ,args ,kwargs)
```

`format_string` is a string with `{}` substitution blocks, either
bare, indexed, or by keyword.  `args` is an array used for indexed
substitution.  `kwargs` is an object used for keyword substitution.

The method throws no errors, since this is javascript.

Examples:

```javscript
console.log(pyformat( 'The {} {} jumped over the {}'
                    , ['brown' ,'fox' ,'foobar']
                    ))
console.log(pyformat( 'The {0} {1} jumped over the {1}'
                    , ['brown' ,'fox' ,'foobar']
                    ))
console.log(pyformat('The {color} {animal} jumped over the {thing}'
                    , [] ,{color: 'brown' ,animal: 'fox' ,thing: 'foobaz'}
                    ))
```

## License

MIT License
