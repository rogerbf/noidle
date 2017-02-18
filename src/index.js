const { spawn } = require(`child_process`)
const pmset = require(`./lib/pmset`).bind(null, spawn)
const watch = require(`./lib/watch`).bind(null, spawn)
const noidle = require(`./lib/noidle`)

module.exports = noidle.bind(
  null,
  {
    pmset,
    watch
  }
)
