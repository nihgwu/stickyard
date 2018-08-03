# Stickyard

Make your React component sticky the easy way, using render prop [https://nihgwu.github.io/stickyard/](https://nihgwu.github.io/stickyard/)

## Install

```bash
# Yarn
yarn add stickyard

# NPM
npm install --save stickyard
```

## Props

### children

`function({})` | *required*

Render whatever you want, it's called with an object with the following properties:

* `registerContainer(ref)`, pass to the container's `ref` prop.
* `registerSticky(ref)`, pass to the `ref` prop of whatever node within the container if you want to make it sticky.
* `updateState()`, update the sticky state manually, this useful if your content is resizable.
* `getStickyOffsets()`, return all the sticky-able elements' offsets.
* `scrollToIndex(index)`, scroll to the specific sticky element by index.
* `scrollTo(offset)`, scroll to the specific offset.

> The ref-register must be passed to the real DOM node, so if the component is a wrapper uppon DOM node,
> you need to register it to the underlying DOM node, using `innerRef` or something like that if provided.

### stickyClassName

`string`

The className to be attached to the element when it's sticky.

> This feature relies on `classList` which is not supported below IE10,
> so it won't take any effect on IE9 or below, you can use `onSticky`  to implement by yourself.

### onSticky
`function(index)`

It's called when an element becomes sticky, `-1` means there is no sticky element.

## Usage

```js
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
```

## License

MIT © [Neo](https://github.com/nihgwu)
