const {useWindowDimensions} = require('react-native');

function useStyleQueries(styleConfig) {
  const {width} = useWindowDimensions();
  const predicateArgument = {screenWidth: width};

  return mapPropertyValues(styleConfig, styleObjectOrArray => {
    let flattenedStyleObject;
    if (Array.isArray(styleObjectOrArray)) {
      const styleArray = styleObjectOrArray;
      const styleObjectArray = styleArray.map(element => {
        if (Array.isArray(element)) {
          const [predicate, conditionalStyleObject] = element;
          if (predicate(predicateArgument)) {
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
    return flattenedStyleObject;
  });
}

function mapPropertyValues(object, mapFunction) {
  const entries = Object.entries(object);
  const transformedEntries = entries.map(([key, value]) => [
    key,
    mapFunction(value),
  ]);
  return Object.fromEntries(transformedEntries);
}

module.exports = useStyleQueries;
