const add = require('../utils/fn');

test('1 + 2 = 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  data.two = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
