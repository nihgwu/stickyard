import React from 'react'
import styled, { css } from 'react-emotion'
import Stickyard from 'stickyard'
import { source } from 'common-tags'

import Layout from '../components/Layout'
import Props from '../components/Props'

const stickyStyle = css`
  box-shadow: 0 1px 4px #888;
`

const Container = styled.div`
  height: calc(100vh - 100px);
`

const Header = styled.div`
  height: 50px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-weight: 500;
  font-size: 18px;
`

const Intro = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-weight: 500;
  font-size: 20px;
`

const Code = styled.pre`
  background-color: #333;
  margin: 0;
  padding: 20px;
  color: #eee;
  font-size: 14px;
  overflow-x: auto;
`

const Item = styled.div`
  height: ${props => Math.ceil(Math.random() * 50) + 30}px;
  background-color: ${props => (props.sticky ? '#ccc' : '#fff')};
  display: flex;
  align-items: center;
  padding: 0 20px;
`

const items = new Array(100).fill(0).map((x, i) => `Item ${i}`)

const Home = () => (
  <Layout>
    <Stickyard stickyClassName={stickyStyle}>
      {({ registerContainer, registerSticky }) => (
        <Container innerRef={registerContainer}>
          <Intro>
            Make your React component sticky the easy way using render prop
          </Intro>
          <Header innerRef={registerSticky}>Install</Header>
          <Code>
            {source`
              # Yarn
              yarn add stickyard

              # NPM
              npm install --save stickyard
            `}
          </Code>
          <Header innerRef={registerSticky}>API</Header>
          <Props />
          <Header innerRef={registerSticky}>Usage</Header>
          <Code>
            {source`
              import Stickyard from 'stickyard'

              // pseudo code
              <Stickyard>
                {({ registerContainer, registerSticky }) => (
                  <div ref={registerContainer}>
                    {items.map((item, index) => (
                      <div key={item.key} ref={item.sticky ? registerSticky : null}>
                        {item.label}
                      </div>
                    ))}
                  </div>
                )}
              </Stickyard>
            `}
          </Code>
          <Header innerRef={registerSticky}>Demo</Header>
          {items.map((item, index) => {
            const sticky = index !== 0 && index % 5 === 0
            return (
              <Item
                key={index}
                sticky={sticky}
                innerRef={sticky ? registerSticky : null}
              >
                {item}
              </Item>
            )
          })}
        </Container>
      )}
    </Stickyard>
  </Layout>
)

export default Home
