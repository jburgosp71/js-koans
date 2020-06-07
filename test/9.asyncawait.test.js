/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */

const obtainTheSpeedForThePlainById = async (planeId) => {
    return await global.doRequest({planeId});
}

test('change the promise in order to wait for the speed value', async () => {
    const result = await obtainTheSpeedForThePlainById('BOING417');
    expect(result).toBe(100);
})
