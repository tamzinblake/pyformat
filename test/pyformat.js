/* global it describe */
var assert = require('chai').assert
  , pyformat = require('../index.js')

describe('pyformat', function() {
  it('should return normal strings unchanged' ,function () {
    assert.equal(pyformat('A normal string.') ,'A normal string.')
  })

  it('should replace array args in order' ,function () {
    assert.equal(pyformat('{} {} {}' ,['1' ,'2' ,'3']) ,'1 2 3')
  })

  it('should replace array args in specified order' ,function () {
    assert.equal(pyformat('{0} {2} {1}' ,['A' ,'B' ,'C']) ,'A C B')
  })

  it('should replace named args' ,function () {
    var args = {color: 'brown' ,animal: 'fox' ,thing: 'fence'}
      , fstring = 'The {color} {animal} jumped over the {thing}'
      , string = 'The brown fox jumped over the fence'
    assert.equal(pyformat(fstring ,[] ,args) ,string)
  })

  it('should allow repeated array args' ,function () {
    assert.equal(pyformat('{0} {1} {1}' ,['A' ,'B' ,'C']) ,'A B B')
  })
})
