const Board = require('../board');
const layout = require('../layout');

test('Creates game Board', () => {
  expect(layout().length).toEqual(784);
});

