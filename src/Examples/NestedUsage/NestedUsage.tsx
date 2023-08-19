// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Fcol, Frow } from '../../index';

/**
 * NestedUsage Component: Componente en el cual hacemos anidamiento de componentes 
 * @returns {Component<{}>} Qwik component
 */
export const NestedUsage = component$(() => {
  // -----------------------RENDER
  return (
    <>
      <h1>Nested</h1>
      <hr />
      <Frow debug>
        <Fcol span={40}>40%</Fcol>
        <Fcol span={60}>
          <Frow debug hSpace={1} vSpace={1}>
            <Fcol span={70}>
              70%
            </Fcol>
            <Fcol span={20}>
              20%
            </Fcol>
            <Fcol span={10}>
              10%
            </Fcol>
            <Fcol span={25}>
              25%
            </Fcol>
            <Fcol span={25}>
              25%
            </Fcol>
            <Fcol span={25}>
              25%
            </Fcol>
            <Fcol span={25}>
              25%
            </Fcol>
            <Fcol span={40}>
              40%
            </Fcol>
            <Fcol span={60}>
              60%
            </Fcol>
          </Frow>
        </Fcol>
      </Frow>
    </>
  );
});
