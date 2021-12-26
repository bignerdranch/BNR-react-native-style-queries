function useStyleQueries(styleConfig) {
  const entries = Object.entries(styleConfig);
  const transformedEntries = entries.map(([key, value]) => {
    if (Array.isArray(value)) {
      return [key, {}];
    } else {
      return [key, value];
    }
  });
  const result = Object.fromEntries(transformedEntries);
  return result;
}

module.exports = useStyleQueries;
