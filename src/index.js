const { spawn, fork } = require(`child_process`)
const pmset = require(`./lib/pmset`).bind(null, spawn)
const watch = require(`./lib/watch`).bind(null, fork)
const timeout = require(`./lib/timeout`).bind(null, fork)
const noidle = require(`./lib/noidle`)

module.exports = noidle.bind(
  null,
  {
    pmset,
    watch,
    timeout
  }
)
