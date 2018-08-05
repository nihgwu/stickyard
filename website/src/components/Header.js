import React from 'react'
import styled from 'react-emotion'

const Container = styled.header`
  background-color: #333;
  color: #fff;
  height: 60px;
  box-shadow: 0 1px 4px #000;
`

const Nav = styled.nav`
  max-width: 900px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 24px;
`

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #eee;
  }
`

const Header = () => (
  <Container>
    <Nav>
      <Title>
        <Link href="https://nihgwu.github.io/stickyard/">Stickyard</Link>
      </Title>
      <Link href="https://github.com/nihgwu/stickyard">Github</Link>
    </Nav>
  </Container>
)

export default Header
