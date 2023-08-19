/* eslint-disable no-nested-ternary */

import { UniqueCSS } from "../../declarations";
import { uniqueId } from "../../utils/stringUtils";

/**
 * Generate unique styles for the specific Row depending on the properties for the row
 * @param {Props} props - Props for handle the spacing between cols and to activate the debug mode
 * @returns {string} CSS styles
 */
export const setDebugStyles = (): UniqueCSS => {
  // ----UNIQUE SELECTOR
  const unique = uniqueId();
  const parentClassName = `row-${unique}`;
  // ----STYLES

  const debugStyles = `
    .${parentClassName}{
      background: #212121;
    }
    .${parentClassName} .forge-col-element:nth-child(1n){
      background: #0081e3;
    }
    .${parentClassName} .forge-col-element:nth-child(4n){
        background: #18b6f6;
      }
    .${parentClassName} .forge-col-element:nth-child(3n){
        background: #7b0fab;
      }
  `;
  return { styles: debugStyles, parentClassName };
};

interface Props {
  hSpace?: number;
  vSpace?: number;
  debugClassName?: false | UniqueCSS | undefined;
}

/**
 * Generate unique styles for the specific Row depending on the properties for the row
 * @param {Props} props - Props for handle the spacing between cols and to activate the debug mode
 * @returns {UniqueCSS} CSS styles
 */
export function getRowClassNames(props: Props) {
  // ----PROPS
  const { hSpace, vSpace, debugClassName } = props;

  const classNames = ['forge-row-element'];

  const y = in10Range(vSpace);
  const x = in10Range(hSpace);

  classNames.push(`row-space-y-${y}`);
  classNames.push(`row-space-x-${x}`);

  if (debugClassName && debugClassName.parentClassName) {
    classNames.push(debugClassName.parentClassName);
  }

  return classNames.join(' ');
}

/** Numbers in a range of 0 - 10 */
function in10Range(number?: number) {
  if (number && number >= 0 && number <= 10) {
    return number;
  }
  return 0;
}
