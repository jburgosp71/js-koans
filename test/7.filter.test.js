/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
function getOddNumbers (numbers) {
  const oddNumbers = numbers.filter(number => number % 2 === 0);

  return oddNumbers
}

test('change the loop for the filter function of the array', () => {
  const oddNumbers = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

  expect(oddNumbers).toEqual([2, 4, 6, 8, 10])
})
