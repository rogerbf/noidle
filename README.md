# noidle

Spawns an instance of `pmset noidle` which prevents a system running macOS from going to sleep.

## usage

```javascript
const noidle = require('noidle')

noidle()
.then(pmsetPID => console.log(pmsetPID))
.catch(console.log)
// stay awake indefinitely

noidle(435)
.then(pmsetPID => console.log(pmsetPID))
.catch(console.log)
// stay awake for as long as pid 435 exists
```

## api

### `noidle([pid])`

Returns a `Promise` which resolves with the `pid` of the underlying `pmset` instance. When called with a `pid`, a detached node instance will track the existance of that pid. If the corresponding process no longer exists - `pmset` and the tracking node instance terminates.

## other

In older versions of macOS `pmset noidle` was the way to go if you wanted to force your computer to stay awake. In later versions, Apple shipped a new tool: `caffeinate` which came with a tracking functionality. To run that instead, have a look at:  [caffeinate](https://www.npmjs.com/package/caffeinate).

If you prefer a more high level module which automatically selects the preferred method depending on system version: [vaka](https://www.npmjs.com/package/vaka)
