// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

/*
 * fixing react-leaflet testing error: Cannot read property '_layerAdd' of null
 *
 * Leaflet Polyline uses SVG renderer (by default) but JSDOM which comes with Jest test runner for Create React App,
 * does not support SVG to a full extent (in particular createSVGRect is not supported).
 * That's basically the reason why the specified error occurs.
 *
 * source: https://stackoverflow.com/a/54384719/2364154
 * */
const createElementNSOrig = document.createElementNS;
document.createElementNS = function (
  namespaceURI: string,
  qualifiedName: string
) {
  if (
    namespaceURI === "http://www.w3.org/2000/svg" &&
    qualifiedName === "svg"
  ) {
    // TODO: solve TS
    // @ts-ignore
    const element = createElementNSOrig.apply(this, arguments);
    element.createSVGRect = function () {};
    return element;
  }
  // TODO: solve TS
  // @ts-ignore
  return createElementNSOrig.apply(this, arguments);
};
