# noidle

Spawns an instance of `pmset noidle` which prevents a macOS computer form going to sleep.

## usage

```javascript
const noidle = require('noidle')

noidle()
  .then(pmsetPid => console.log(pmsetPid))
// stay awake indefinitely

noidle(435)
  .then(pmsetPid => console.log(pmsetPid))
// stay awake for as long as the process with the pid 435 is running

noidle(436, (err, pmsetPid) => console.log(pmsetPid))
// alternative way of invoking with a callback
```

## api

### `noidle([pid])`

Returns a promise which resolves with the pid of the underlying `pmset` instance. If called with a pid, noidle will run until the associated process quits. The watcher spawns detached and keeps running independently of the node process which invoked `noidle`.

## see also

In older versions of macOS `pmset noidle` was the way to go if you wanted to force your computer to stay awake. In later versions of the OS, Apple shipped a new tool: `caffeinate`. To run that instead, have a look at:  [caffeinate](https://www.npmjs.com/package/caffeinate). Or if you prefer a more high level module which automatically runs the preferred method depending on system version: [vaka](https://www.npmjs.com/package/vaka) might be what you are looking for.
