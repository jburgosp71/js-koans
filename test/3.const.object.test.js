/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
function initializeMapWithMyCoords () {
  const map = {}
  map.latitude = global.getLatitiude()
  map.longitude = global.getLongitude()

  return map
}

test('modify var to const', function () {
  expect(initializeMapWithMyCoords()).toEqual({
    latitude: 5,
    longitude: 6
  })
})
