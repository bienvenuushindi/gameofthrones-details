import houses from '../../redux/houses/reducer';

test('should return the initial state', () => {
  expect(houses([], {})).toEqual([]);
});
