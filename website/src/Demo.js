import React from 'react'
import styled from 'styled-components'
import Stickyard from 'stickyard'

import './Demo.css'

const Container = styled.div`
  margin: 20px auto;
  width: 50%;
  height: calc(100vh - 140px);
  overflow: auto;
  background-color: #eee;
`

const Item = styled.div`
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
`

const Header = Item.extend`
  height: ${props => Math.ceil(Math.random() * 30) + 20}px;
  background-color: #ccc;
`

const items = new Array(100).fill(0).map((x, i) => `Item ${i}`)

export default () => (
  <Stickyard stickyClassName="sticky">
    {({ registerContainer, registerSticky }) => (
      <Container innerRef={registerContainer}>
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
