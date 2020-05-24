/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
/*function Person (name, surname) {
  this.name = name
  this.surname = surname
}

Person.prototype.getFullName = function () {
  return this.name + ' ' + this.surname
}*/

class Person {
    constructor(name,surname) {
        this.name = name
        this.surname = surname
    }
    getFullName() {
      return this.name + ' ' + this.surname
    }
}

test('change function to class', () => {
  const nobuoUematsu = new Person('Nobuo', 'Uematsu')
  expect(nobuoUematsu.getFullName()).toBe('Nobuo Uematsu')
})
