const getOrdered = require('./order')

test('get correct count', () => {
    expect(getOrdered([0, 2, 1, 9]).count).toBe(3);
});

test('get correct sequence', () => {
  expect(getOrdered([0, 2, 1, 9]).sequence).toEqual([0, 1, 2]);
});
