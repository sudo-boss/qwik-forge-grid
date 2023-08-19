// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Fcol, Frow } from '../../index';

/**
 * ResponsiveUsage Component: componente en el cual ya se hace uso del Grid responsive
 * @returns {Component<{}>} Qwik component
 */
export const ResponsiveUsage = component$(() => {
  // -----------------------CONSTS, HOOKS, STATES
  const responsiveGrid = {
    xs: 100,
    sm: 90,
    md: 70,
    lg: 50,
    xl: 33,
    xxl: 20
  };
  // -----------------------RENDER
  return (
    <>
      <h1>Responsive</h1>
      <hr />
      <Frow debug hAlign="center" vAlign="bottom">
        <Fcol {...responsiveGrid}>Responsive :D</Fcol>
        <Fcol {...responsiveGrid}>Responsive :D</Fcol>
        <Fcol {...responsiveGrid}>Responsive :D</Fcol>
        <Fcol {...responsiveGrid}>Responsive :D</Fcol>
        <Fcol {...responsiveGrid}>Responsive :D</Fcol>
        <Fcol {...responsiveGrid}>Responsive :D</Fcol>
        <Fcol {...responsiveGrid}>Responsive :D</Fcol>
        <Fcol {...responsiveGrid}>Responsive :D</Fcol>
        <Fcol {...responsiveGrid}>Responsive :D</Fcol>
      </Frow>
    </>
  );
});
