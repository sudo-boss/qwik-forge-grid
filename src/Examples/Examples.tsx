// ---Dependencies
import { component$ } from '@builder.io/qwik';
// ---Components
import { BasicUsage } from './BasicUsage/BasicUsage';
import { MassiveElementsUsage } from './MassiveElementsUsage/MassiveElementsUsage';
import { NestedUsage } from './NestedUsage/NestedUsage';
import { ResponsiveUsage } from './ResponsiveUsage/ResponsiveUsage';
import { MVariant } from './MVariant/MVariant';

/**
 * Examples Component: Renderea una página estática
 * @return {Component<{}>} Qwik component
 */
export const Examples = component$(() => {
  
  return (
    <div>
      <MVariant />
      <br />
      <BasicUsage />
      <br />
      <ResponsiveUsage />
      <br />
      <NestedUsage />
      <br />
      <MassiveElementsUsage />
    </div>
  );
});
