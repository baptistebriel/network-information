# network-information

Provides information about the user's connection using [The Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API). This can be used to select high definition content or low definition content.

## Usage

`npm install network-information --save`

```javascript
import Connection from 'network-information'

const connect = new Connection()
console.log(connect.info)

// { effectiveType: "4g", downlink: 10, saveData: false, rtt: 50 }
```

### methods

- `init`: add event listeners
- `destroy`: remove event listeners

## License

MIT, see [LICENSE.md](http://github.com/baptistebriel/network-information/blob/master/LICENSE.md) for details.