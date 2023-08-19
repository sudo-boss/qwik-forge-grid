// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { Mcol, Mrow } from '../../index';
/**
 * MVariant Component: Basic implementation of the grid system with "span"
 * he expone un Grid basico estatico en el cual se expone de principio el uso del Row y Col 
 * @returns {Component<{}>} Qwik component
 */
export const MVariant = component$(() => {
  // -----------------------RENDER
  return (
    <>
      <h1>MVariant Usage</h1>
      <hr />
      <Mrow space={0} debug>
        <Mcol span={70}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nisi.
          Nihil provident sunt tempore, exercitationem aspernatur atque eum
          quidem vero natus, expedita fugiat blanditiis numquam possimus beatae!
          Assumenda, dignissimos consequatur.
        </Mcol>
        <Mcol span={20}>20%</Mcol>
        <Mcol span={10}>10%</Mcol>
        <Mcol span={25}>25%</Mcol>
        <Mcol span={25}>25%</Mcol>
        <Mcol span={25}>25%</Mcol>
        <Mcol span={25}>25%</Mcol>
        <Mcol span={40}>40%</Mcol>
        <Mcol span={60}>60%</Mcol>
      </Mrow>
    </>
  );
});
