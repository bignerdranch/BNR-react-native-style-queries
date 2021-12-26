const useStyleQueries = require('./useStyleQueries');

describe('useStyleQueries', () => {
  describe('when no styles are passed', () => {
    it('returns an empty style object', () => {
      const result = useStyleQueries({});
      expect(result).toEqual({});
    });
  });

  describe('when a single style object is passed for a style name', () => {
    it('returns the passed-in style object unchanged', () => {
      const plainStyles = {
        myComponentA: {fontSize: 16},
        myComponentB: {fontSize: 22},
      };
      const result = useStyleQueries(plainStyles);
      expect(result).toEqual(plainStyles);
    });
  });

  xdescribe('when an empty array is passed for a style name', () => {
    it('returns an empty style object', () => {
      const input = {
        myComponentA: [],
      };
      const result = useStyleQueries(input);
      expect(result).toEqual({
        myComponentA: {},
      });
    });
  });
});
