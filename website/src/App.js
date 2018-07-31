import React, { Component } from 'react'
import styled, { injectGlobal } from 'react-emotion'

import Body from './Body'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }
`

const Header = styled('header')`
  background-color: #333;
  color: #fff;
  height: 60px;
  box-shadow: 0 1px 4px #000;
`

const Nav = styled('nav')`
  max-width: 900px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled('div')`
  font-size: 24px;
`

const Link = styled('a')`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #eee;
  }
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <Nav>
            <Title>
              <Link href="https://nihgwu.github.io/stickyard/">Stickyard</Link>
            </Title>
            <Link href="https://github.com/nihgwu/stickyard">Github</Link>
          </Nav>
        </Header>
        <Body />
      </React.Fragment>
    )
  }
}

export default App
