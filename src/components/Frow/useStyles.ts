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
    .${parentClassName} {
      background: #212121;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+1) {
      background: #0081e3;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+2) {
      background: #18b6f6;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+3) {
      background: #7b0fab;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+4) {
      background: #e600d3;  /* Añade nuevos colores aquí */
    }
    .${parentClassName} .forge-col-element:nth-child(15n+5) {
      background: #ffa500;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+6) {
      background: #006080;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+7) {
      background: #fab7fa;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+8) {
      background: #ff4500;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+9) {
      background: #9acd32;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+10) {
      background: #bb6af6;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+11) {
      background: #c3c6be;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+12) {
      background: #2be2d3;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+13) {
      background: #7fff00;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+14) {
      background: #ffb32f;
    }
    .${parentClassName} .forge-col-element:nth-child(15n+15) {
      background: #ffd700;
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

  const y = in50Range(vSpace);
  const x = in50Range(hSpace);

  classNames.push(`row-space-y-${y}`);
  classNames.push(`row-space-x-${x}`);

  if (debugClassName && debugClassName.parentClassName) {
    classNames.push(debugClassName.parentClassName);
  }

  return classNames.join(' ');
}

/** Numbers in a range of 0 - 50 */
function in50Range(number?: number) {
  if (number && number >= 0 && number <= 50) {
    return number;
  }
  return 0;
}
