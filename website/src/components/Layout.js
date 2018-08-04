import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'react-emotion'

import Header from './Header'

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

const Body = styled.div`
  margin: 20px auto;
  max-width: 900px;
  background-color: #f5f5f5;
  box-shadow: 1px 1px 4px #ccc, -1px -1px 4px #ccc;
`

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet
      title="Stickyard"
      meta={[
        {
          name: 'description',
          content: 'Make your React component sticky the easy way',
        },
        {
          name: 'keywords',
          content: 'react, component, sticky, stickyard, render-prop',
        },
      ]}
    />
    <Header />
    <Body>{children}</Body>
  </React.Fragment>
)

export default Layout
