class Library {
  constructor(private foo: string) {

  }

  public getFoo(): string {
    return this.foo
  }

  public setFoo(foo: string) {
    this.foo = foo
  }
}

module.exports = Library