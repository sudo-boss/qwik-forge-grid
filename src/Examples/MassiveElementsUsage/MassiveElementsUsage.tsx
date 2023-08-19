// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Fcol, Frow } from '../../index';
/**
 * MassiveElementsUsage Component: Componente en el cual demostramos
 * una multitud de Columnas, y su performance en el rendereo
 * @returns {Component<{}>} Qwik component
 */
export const MassiveElementsUsage = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const responsiveGrid = {
    xs: 8,
    sm: 6,
    md: 4,
    lg: 3,
    xl: 2,
    xxl: 1,
    style: {
      fontSize: '11px',
    }
  };
  // -----------------------MAIN METHODS
  const cols = [];
  for (let i = 0; i < 100; i++) {
    cols.push(i + 1);
  }
  // -----------------------RENDER
  return (
    <>
      <h1>Massive responsive</h1>
      <hr />
      <Frow debug hAlign="center" vAlign="bottom">
        {cols.map((e) => (
          <Fcol key={e} {...responsiveGrid}>{e}</Fcol>
        ))}
      </Frow>
    </>
  );
});
