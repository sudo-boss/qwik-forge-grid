// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Fcol, Frow } from '../../index';
/**
 * BasicUsage Component: Basic implementation of the grid system with "span"
 * he expone un Grid basico estatico en el cual se expone de principio el uso del Row y Col 
 * @returns {Component<{}>} Qwik component
 */
export const BasicUsage = component$(() => {
  // -----------------------RENDER
  return (
    <>
      <h1>Basic Usage</h1>
      <hr />
      <Frow hSpace={2} vSpace={2} debug>
        <Fcol span={70}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nisi.
          Nihil provident sunt tempore, exercitationem aspernatur atque eum
          quidem vero natus, expedita fugiat blanditiis numquam possimus beatae!
          Assumenda, dignissimos consequatur.
        </Fcol>
        <Fcol span={20}>20%</Fcol>
        <Fcol span={10}>10%</Fcol>
        <Fcol span={25}>25%</Fcol>
        <Fcol span={25}>25%</Fcol>
        <Fcol span={25}>25%</Fcol>
        <Fcol span={25}>25%</Fcol>
        <Fcol span={40}>40%</Fcol>
        <Fcol span={80}>80%</Fcol>
      </Frow>
    </>
  );
});
