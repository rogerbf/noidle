# noidle
Prevents a macOS computer from going to sleep. If a pid is supplied as an argument, the computer will stay awake for as long as the process with that identifier is running. Uses `pmset noidle` under the hood.

``` javascript
const noidle = require('noidle')

noidle()
  .then(pmset_pid => console.log(pmset_pid))
// stay awake indefinitely

noidle(435)
  .then(pmset_pid => console.log(pmset_pid))
// stay awake for as long as process with pid 435 is running

noidle(436, (err, pmset_pid) => console.log(pmset_pid))
// alternative way of invoking with a callback
```
