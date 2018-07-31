# Stickyard

Make your component sticky the easy way using render prop

## Install

```bash
# Yarn
yarn add stickyard

# NPM
npm install --save stickyard
```

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

## License

MIT © [Neo](https://github.com/nihgwu)
