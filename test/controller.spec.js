import rootController from '../src/controllers';

test('root controller', function() {
  expect(rootController.get(req, res, next)).toBe(true);
});