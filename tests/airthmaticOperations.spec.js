const { sum, multiplyNumbers, substract, divide } = require('../services/airthmaticOperations');

describe('Arithmatic Operation service', () => {
  it('sum operation', async() => {
    expect(await sum(6, 4)).toBe(10);
  });

  it('sum operation - insufficient parameter', async() => {
    await sum().catch(e => {
      expect(e).toBe('Insufficient arguments')
    })
  });
});
