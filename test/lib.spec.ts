import * as Library from '../src/lib'

describe('Constructor', () => {
  it('sets foo value', () => {
    const l = new Library('bar')

    expect(l.getFoo()).toBe('bar')
  })
})

describe('setFoo', () => {
  it('sets foo value', () => {
    const l = new Library('bar')
    l.setFoo('baz')

    expect(l.getFoo()).toBe('baz')
  })
})
