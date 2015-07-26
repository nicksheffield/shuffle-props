# Shuffle Props

Randomly shuffle the order of properties in an object

```
npm install shuffle-props
```

## Usage

```javascript
var shuffleProps = require('shuffle-props');

var obj = { a: 1, b: 2: c: 3};
var shuffledObj = shuffleProps(obj);

console.log(shuffledObj); // { b: 2, a: 1, c: 3} or something like that
```