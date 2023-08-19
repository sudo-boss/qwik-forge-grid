// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
// ---Types
import { CSSSAtributes } from '../../declarations';
// ---Styles
import { getRowClassNames, setDebugStyles } from './useStyles';
import './rowStyles.css';

export interface FrowProps {
  /** Horizontal alignment for all the "Cols" in this "Row" */
  hAlign?: 'center' | 'start' | 'end';
  /** Vertical alignment for all the "Cols" in this "Row" */
  vAlign?: 'top' | 'middle' | 'bottom';
  /** Horizontal space in px from 0 - 10 between all the "Cols" in this "Row" */
  hSpace?: number;
  /** Vertical space in px from 0 - 10 between all the "Cols" in this "Row" */
  vSpace?: number;
  /** Useful property for development, gives background colors to your "Row" and "Cols" to build easier your layout */
  debug?: boolean;
  /** "ClassName" css selector */
  className?: string;
  /** CSS inline Object */
  style?: Record<string, string | number | undefined>;
}
/**
 * Row Component: Control all the "Col" components, it
 * should only contain "Col"s as child components and allows
 * you to control behaviors in all your grid such as spacing
 * between your "Col", etc.
 * @param {Props} props Properties that controls some global behavior in all your grid
 * @returns {Component<{}>} Qwik component
 */
export const Frow = component$((props: FrowProps) => {
  // -----------------------CONSTS, HOOKS, STATES
  const { hSpace, vSpace, debug, className, style: styledProp } = props;
  const debugStyles = debug && setDebugStyles();
  const classNames = getRowClassNames({ hSpace, vSpace, debugClassName: debugStyles });

  const style: CSSSAtributes = {
    display: 'block',
    textAlign: props?.hAlign || 'start',
    verticalAlign: props?.vAlign || 'bottom',
    ...styledProp,
  };
  const fullClassNames = className ? `${classNames} ${className}` : classNames;
  // -----------------------RENDER
  return (
    <>
      {debugStyles ? <style>{debugStyles.styles}</style> : null}
      <div class={fullClassNames} style={style}>
        <Slot />
      </div>
    </>
  );
});
