function useStyleQueries(styleConfig) {
  const entries = Object.entries(styleConfig);
  const transformedEntries = entries.map(([styleName, styleObjectOrArray]) => {
    let flattenedStyleObject;
    if (Array.isArray(styleObjectOrArray)) {
      const styleArray = styleObjectOrArray;
      const styleObjectArray = styleArray.map(element => {
        if (Array.isArray(element)) {
          const [predicate, conditionalStyleObject] = element;
          if (predicate()) {
            return conditionalStyleObject;
          } else {
            return null;
          }
        } else {
          return element;
        }
      });
      flattenedStyleObject = Object.assign({}, ...styleObjectArray);
    } else {
      const styleObject = styleObjectOrArray;
      flattenedStyleObject = styleObject;
    }
    return [styleName, flattenedStyleObject];
  });
  return Object.fromEntries(transformedEntries);
}

module.exports = useStyleQueries;
