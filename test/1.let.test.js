/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */
function arrayLength (array) {
  let i = 0;
  for (i = 0; i < array.length; i++) {
  }

  return i
}

test('modify var to let', function () {
  expect(arrayLength([1, 2, 3, 4, 5, 6])).toBe(6)
})
