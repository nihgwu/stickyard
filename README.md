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

`function({ registerContainer, registerSticky, getStickyOffsets, scrollToIndex, scrollTo })` | *required*

Render whatever you want.

* `registerContainer`, pass to the container's `ref` prop.
* `registerSticky`, pass to the `ref` prop of whatever node within the container if you want to make it sticky.
* `getStickyOffsets`, return the sticky elements' offsets.
* `scrollToIndex`, scroll to the specific sticky element by index
* `scrollTo`, scroll to the specific offset

### stickyClassName

`string`

The className to be attached to the element when it's sticky.

## Usage

```js
import Stickyard from 'stickyard'

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
</Stickyard>
```

Learn more at [https://nihgwu.github.io/stickyard/](https://nihgwu.github.io/stickyard/)

## License

MIT © [Neo](https://github.com/nihgwu)
