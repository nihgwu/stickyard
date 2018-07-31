import React from 'react'
import styled from 'react-emotion'

const Prop = styled('div')`
  margin: 20px;
`

const Name = styled('div')`
  font-weight: 500;
`

const Type = styled('span')`
  font-size: 13px;
  padding: 1px 5px;
  margin: 0 10px;
  border-radius: 2px;
  background-color: #ccc;
  color: #333;
`

const Required = styled('span')`
  font-size: 13px;
  padding: 1px 5px;
  border-radius: 2px;
  background-color: #333;
  color: #fff;
`

const Description = styled('div')`
  font-size: 14px;
  margin: 10px;
`

export default () => (
  <div>
    <Prop>
      <Name>
        children
        <Type>{'function({ registerContainer, registerSticky })'}</Type>
        <Required>required</Required>
      </Name>
      <Description>Render whatever you want, it's called with an object with the following properties</Description>
      <Description>
        <Type>registerContainer</Type>
        pass to the container's ref prop
      </Description>
      <Description>
        <Type>registerSticky</Type>
        pass to the `ref` prop of whatever node within the container if you want
        to make it sticky
      </Description>
    </Prop>
    <Prop>
      <Name>
        stickyClassName
        <Type>string</Type>
      </Name>
      <Description>
        The className to be attached to the element when it's sticky
      </Description>
    </Prop>
  </div>
)
