# react-forge-grid

> A simpler and faster way to accommodate information within the layout area, so we set the area in percentage (100%) similar to the 24-section layout area of Ant design or the 12 colums of bootstrap, you can think it as a 100 col system. To ensure a high level of visual comfort.

>Library in which its main objective is to have the greatest control of the behavior for the grid in qwik.

>Row and Col are used so it will be very familiar if you have already interacted with Ant Desing, Boostrap, etc.
the Grid is handled by percentage with 100% referring to the maximum.

>The Row and Col can receive properties which help us to have greater control of these.

[![NPM](https://img.shields.io/npm/v/react-forge-grid.svg)](https://www.npmjs.com/package/react-forge-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-forge-grid
```

## Usage

```tsx
import React, { Component } from 'react'
import {Frow, Fcol} from 'qwik-forge-grid'
import 'react-forge-grid/lib/path/for/styles.css'; // Import the styles!!!

function BasicUsage() {
  // -----------------------RENDER
  return (
    <>
      <h1>Basic Usage</h1>
      <hr />
      <Frow hSpace={2} vSpace={2} debug>
        <Fcol span={70}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nisi. Nihil provident sunt
          tempore, exercitationem aspernatur atque eum quidem vero natus, expedita fugiat blanditiis
          numquam possimus beatae! Assumenda, dignissimos consequatur.
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
}
```

## Usage examples and donations:
-Check the docs and examples at [https://qwik.forgemytech.com/](https://qwik.forgemytech.com/)

## License

MIT © [sudo-boss ](https://github.com/sudo-boss )
