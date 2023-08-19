// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
// ---Styles
import { getRowClassNames, setDebugStyles } from './useStyles';
import './rowStyles.css';

export interface MrowProps {
  /** Horizontal space in px from 0 - 50 between all the "Cols" in this "Row" */
  space?: number;
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
export const Mrow = component$((props: MrowProps) => {
  // -----------------------CONSTS, HOOKS, STATES
  const { space, debug, className, style } = props;
  const debugStyles = debug && setDebugStyles();
  const classNames = getRowClassNames({ space, debugClassName: debugStyles });

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
