// ---Dependencies
import { component$, Slot } from '@builder.io/qwik';
import { getColClassNames, GridSystem } from './useStyles';
import './colStyles.css';

export interface McolProps extends GridSystem {
  className?: string;
  style?: any;
}

/**
 * Mcol Component: Container that allows you handle all your grid content controlling it 
 * based in a percentage way instead of classic 12 or 24 columns per row allowing you 
 * to handle up to 100 columns per row.
 * @param {McolProps} props Properties that controls the width of your "Cols" in percentage with static width (span) or with responsive behaviors(xs, sm, md lg, xl, xxl)
 */
export const Mcol = component$((props: McolProps) => {
  // -----------------------CONSTS, HOOKS, STATES
  const { className, style, ...grid } = props;
  const classNames = getColClassNames({ ...grid });
  const fullClassNames = className ? `${classNames} ${className}` : classNames;
  
  // -----------------------RENDER
  return (
    <div class={fullClassNames} style={style}>
    <Slot />
  </div>
  );
});

