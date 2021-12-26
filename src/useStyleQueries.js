function useStyleQueries(styleConfig) {
  const entries = Object.entries(styleConfig);
  const transformedEntries = entries.map(([styleName, styleObjectOrArray]) => {
    let updatedValue;
    if (Array.isArray(styleObjectOrArray)) {
      if (styleObjectOrArray.length === 0) {
        updatedValue = {};
      } else {
        updatedValue = styleObjectOrArray[0];
      }
    } else {
      updatedValue = styleObjectOrArray;
    }
    return [styleName, updatedValue];
  });
  return Object.fromEntries(transformedEntries);
}

module.exports = useStyleQueries;
