# noidle

Prevent a system running macOS from going to sleep indefinitely, on behalf of a utility or for a specified amount of time. Uses `pmset noidle`.

## usage

```javascript
const noidle = require('noidle')

noidle()
.then(pmsetPID => console.log(pmsetPID))
.catch(console.log)
// prevent sleep indefinitely

noidle({ pid: 435 })
.then(pmsetPID => console.log(pmsetPID))
.catch(console.log)
// prevent sleep for as long as pid 435 exists

noidle({ timeout: 10 })
.then(pmsetPID => console.log(pmsetPID))
.catch(console.log)
// prevent sleep for 10 seconds
```

## api

### `noidle([options])`

Returns a `Promise` which resolves with the `pid` of the underlying `pmset` instance.

## other

In older versions of macOS `pmset noidle` was the way to go if you wanted to force your computer to stay awake. In later versions, Apple shipped a new tool: `caffeinate` which came with a tracking functionality. To run that instead, have a look at:  [caffeinate](https://www.npmjs.com/package/caffeinate).

If you prefer a more high level module which automatically selects the preferred method depending on system version: [vaka](https://www.npmjs.com/package/vaka)
