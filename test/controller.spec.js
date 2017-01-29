import { rootController } from '../src/controllers';

let req;
let res;
let next;

beforeEach(function() {
  req = jest.fn();
  res = {
    send: jest.fn()
  };
  next = jest.fn();
})

test('rootController#get', function() {
  rootController.get(req, res, next);

  expect(res.send).toBeCalledWith('Howdy.');
  expect(next).toBeCalled();
});

test('rootController#post', function() {
  rootController.post(req, res, next);

  expect(res.send).toBeCalledWith(501, {"error": "501 Not Implemented"});
  expect(next).toBeCalled();
});

test('rootController#put', function() {
  rootController.put(req, res, next);

  expect(res.send).toBeCalledWith(501, {"error": "501 Not Implemented"});
  expect(next).toBeCalled();
});

test('rootController#del', function() {
  rootController.del(req, res, next);

  expect(res.send).toBeCalledWith(501, {"error": "501 Not Implemented"});
  expect(next).toBeCalled();
});