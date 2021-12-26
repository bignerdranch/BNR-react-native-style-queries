const useStyleQueries = require('./useStyleQueries');

describe('useStyleQueries', () => {
  describe('when no styles are passed', () => {
    it('returns an empty style object', () => {
      const result = useStyleQueries({});
      expect(result).toEqual({});
    });
  });
});
