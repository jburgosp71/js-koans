/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */
const GLOBAL_UL = global.htmlDocument.getElementByTagName('ul');

function createNumbersList (numberOfNumbers) {
  for (let i = 0; i < numberOfNumbers; i++) {
    GLOBAL_UL.appendListElementWithNumber(i)
  }

  GLOBAL_UL.updateRender()
  GLOBAL_UL.triggerCreationEvent()
}

test('refactor the function to add a const', function () {
  createNumbersList(10)

  expect(GLOBAL_UL.appendListElementWithNumber).toHaveBeenCalledTimes(10)
  expect(GLOBAL_UL.updateRender).toHaveBeenCalled()
  expect(GLOBAL_UL.triggerCreationEvent).toHaveBeenCalled()
})
