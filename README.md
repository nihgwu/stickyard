# Stickyard

Make your component sticky the easy way using render prop

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
* `getStickyOffsets()`, return the sticky elements' offsets.
* `scrollToIndex(index)`, scroll to the specific sticky element by index.
* `scrollTo(offset)`, scroll to the specific offset.

### stickyClassName

`string`

The className to be attached to the element when it's sticky.

### onSticky
`function(index)`

It's called when a element becomes sticky, `-1` means there is no sticky element.

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

Learn more at [https://nihgwu.github.io/stickyard/](https://nihgwu.github.io/stickyard/)

## License

MIT © [Neo](https://github.com/nihgwu)
