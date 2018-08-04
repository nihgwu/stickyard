import React from 'react'
import styled from 'react-emotion'

const Prop = styled.div`
  margin: 20px;
`

const Name = styled.div`
  font-weight: 500;
`

const Type = styled.span`
  background-color: #ccc;
  margin: 0 10px;
  padding: 1px 5px;
  border-radius: 2px;
  color: #333;
  font-size: 13px;
`

const Tag = styled.span`
  background-color: #333;
  padding: 1px 5px;
  border-radius: 2px;
  color: #fff;
  font-size: 13px;
`

const Description = styled.div`
  margin: 10px;
  font-size: 14px;
`

const Param = styled.div`
  margin: 10px 0;
  font-size: 14px;
`

const Note = styled.div`
  opacity: 0.6;
  background-color: #ccc;
  padding: 10px;
  border-radius: 2px;
  font-size: 14px;
`

export default () => (
  <div>
    <Prop>
      <Name>
        children
        <Type>{'function({})'}</Type>
        <Tag>required</Tag>
      </Name>
      <Description>
        Render whatever you want, it's called with an object with the following
        properties:
      </Description>
      <Param>
        <Type>registerContainer(ref)</Type>
        pass to the container's <Tag>ref</Tag> prop
      </Param>
      <Param>
        <Type>registerSticky(ref)</Type>
        pass to the <Tag>ref</Tag> prop of whatever node within the container if
        you want to make it sticky
      </Param>
      <Param>
        <Type>updateState()</Type>
        update the sticky state manually, this useful if your content is
        resizable
      </Param>
      <Param>
        <Type>getStickyOffsets()</Type>
        return all the sticky-able elements' offsets
      </Param>
      <Param>
        <Type>scrollToIndex(index)</Type>
        scroll to the specific sticky element by index
      </Param>
      <Param>
        <Type>scrollTo(offset)</Type>
        scroll to the specific offset
      </Param>
      <Note>
        The ref-register must be passed to the real DOM node, so if the
        component is a wrapper uppon DOM node, you need to register it to the
        underlying DOM node, using <Tag>innerRef</Tag> or something like that if
        provided.
      </Note>
    </Prop>
    <Prop>
      <Name>
        stickyClassName
        <Type>string</Type>
      </Name>
      <Description>
        The className to be attached to the element when it's sticky
      </Description>
      <Note>
        This feature relies on <Tag>classList</Tag> which is not supported below
        IE10, so it won't take any effect on IE9 or below, you can use{' '}
        <Tag>onSticky</Tag> to implement by yourself.
      </Note>
    </Prop>
    <Prop>
      <Name>
        onSticky
        <Type>function(index)</Type>
      </Name>
      <Description>
        It's called when an element becomes sticky, <Tag>-1</Tag> means there is
        no sticky element
      </Description>
    </Prop>
  </div>
)
