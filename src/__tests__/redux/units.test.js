import units from '../../redux/units/reducer';

test('should return the initial state', () => {
  expect(units(undefined, {})).toEqual([]);
});
