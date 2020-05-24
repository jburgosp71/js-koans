/**
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

function getPeopleNames (people) {
  const names = []

  people.map((item) => { return names.push(item.name); })

  return names
}

test('change for loop with map', () => {
  const people = [
    {'name': 'Mario', 'surname': 'Nohemi'},
    {'name': 'Xochitl', 'surname': 'Anacleto'},
    {'name': 'Abigaíl', 'surname': 'Marcia'},
    {'name': 'Crescencia', 'surname': 'Marcelo'}
  ]

  expect(getPeopleNames(people)).toEqual(['Mario', 'Xochitl', 'Abigaíl', 'Crescencia'])
})
