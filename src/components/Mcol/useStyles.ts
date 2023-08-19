export interface GridSystem {
  /** Static width of the "Col" */
  span?: number;
  /** Width of the "Col" in extra small devices (0 - 576px) */
  xs?: number;
  /** Width of the "Col" in small devices (576px - 768px) */
  sm?: number;
  /** Width of the "Col" in mid devices (768px - 992px) */
  md?: number;
  /** Width of the "Col" in large devices (992px - 1200px) */
  lg?: number;
  /** Width of the "Col" in extra large devices (1200px - 1600px) */
  xl?: number;
  /** Width of the "Col" in extra extra large devices (1600px and beyond) */
  xxl?: number;
}

/**
 * Generate styles for the specific Col depending on the properties for the Col
 * @param {Props} props - Props for handle the width of the cols
 * @returns {UniqueCSS} CSS styles
 */
export function getColClassNames(gridInfo: GridSystem) {
  const responsiveCols = colWidthBalancer(gridInfo);
  const classNames = ['forge-mcol-element', 'mcol'];
  if (responsiveCols.span) {
    classNames.push(`mcol-span-${responsiveCols.span}`);
  }
  if (responsiveCols.xs) {
    classNames.push(`mcol-xs-span-${responsiveCols.xs}`);
  }
  if (responsiveCols.sm) {
    classNames.push(`mcol-sm-span-${responsiveCols.sm}`);
  }
  if (responsiveCols.md) {
    classNames.push(`mcol-md-span-${responsiveCols.md}`);
  }
  if (responsiveCols.lg) {
    classNames.push(`mcol-lg-span-${responsiveCols.lg}`);
  }
  if (responsiveCols.xl) {
    classNames.push(`mcol-xl-span-${responsiveCols.xl}`);
  }
  if (responsiveCols.xxl) {
    classNames.push(`mcol-xxl-span-${responsiveCols.xxl}`);
  }
  return classNames.join(' ');
}
/**
 * colWidthBalancer: declaraciones explictias del porcentaje que
 * oucpara caada tamaño de pagina
 */
export function colWidthBalancer(gridInfo: GridSystem) {
  const { span, xs, sm, md, lg, xl, xxl } = gridInfo;
  return {
    span: span || xl || 100,
    xs: xs || span || xl || 100,
    sm: sm || span || xl || 100,
    md: md || span || xl || 100,
    lg: lg || span || xl || 100,
    xl: xl || span || xl || 100,
    xxl: xxl || span || xl || 100,
  };
}
