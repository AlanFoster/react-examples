import { translate } from '../index';
import client from '../client';

jest.mock('../client', function() {
  return {
    get: jest.fn()
  };
});

describe('yoda', function() {
  describe('#translate', function() {
    describe('when the call is a success', function() {
      beforeEach(function() {
        client.get.mockImplementationOnce(() =>
          Promise.resolve({
            data: 'Result!'
          })
        );
      });

      it('successfully maps the response', function() {
        expect.assertions(1);
        return expect(translate({ sentence: 'hello!' })).resolves.toEqual({
          translation: 'Result!'
        });
      });
    });

    describe('when the call is an error', function() {
      beforeEach(function() {
        client.get.mockImplementationOnce(() =>
          Promise.reject(new Error('abc'))
        );
      });

      it('calls the original catch callback', function() {
        expect.assertions(1);
        return expect(translate({ sentence: 'hello!' })).rejects.toEqual(
          new Error('abc')
        );
      });
    });
  });
});
