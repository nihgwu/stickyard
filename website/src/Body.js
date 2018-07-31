import React from 'react'
import styled, { css } from 'react-emotion'
import Stickyard from 'stickyard'

import Props from './Props'

const Container = styled('div')`
  margin: 20px auto;
  max-width: 900px;
  height: calc(100vh - 100px);
  overflow: auto;
  background-color: #f5f5f5;
  box-shadow: 1px 1px 4px #ccc, -1px -1px 4px #ccc;
`

const Item = styled('div')`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

const Header = styled('div')`
  height: ${props => Math.ceil(Math.random() * 30) + 50}px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-weight: 500;
  font-size: 18px;
`

const stickyStyle = css`
  box-shadow: 0 1px 4px #888;
`

const Intro = styled('div')`
  font-weight: 500;
  height: 200px;
  padding: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Pre = styled('pre')`
  margin: 0;
  padding: 20px;
  background-color: #333;
  color: #eee;
  font-size: 14px;
  overflow-x: auto;
`

const install = `# Yarn
yarn add stickyard

# NPM
npm install --save stickyard`

const usage = `import Stickyard from 'stickyard'

// pseudo code
<Stickyard>
  {({ registerContainer, registerSticky }) => (
    <ul ref={registerContainer}>
      {items.map((item, index) => (
        <li key={item.key} ref={item.sticky ? registerSticky : null}>
          {item.label}
        </li>
      ))}
    </ul>
  )}
</Stickyard>`

const items = new Array(100).fill(0).map((x, i) => `Item ${i}`)

export default () => (
  <Stickyard stickyClassName={stickyStyle}>
    {({ registerContainer, registerSticky }) => (
      <Container innerRef={registerContainer}>
        <Intro>Make your component sticky the easy way using render prop</Intro>
        <Header innerRef={registerSticky}>Install</Header>
        <Pre>{install}</Pre>
        <Header innerRef={registerSticky}>Props</Header>
        <Props />
        <Header innerRef={registerSticky}>Usage</Header>
        <Pre>{usage}</Pre>
        <Header innerRef={registerSticky}>Demo</Header>
        {items.map(
          (item, index) =>
            index % 5 === 0 && index !== 0 ? (
              <Header key={index} innerRef={registerSticky}>
                {item}
              </Header>
            ) : (
              <Item key={index}>{item}</Item>
            )
        )}
      </Container>
    )}
  </Stickyard>
)
