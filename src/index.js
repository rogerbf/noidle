const pmset = require('./lib/pmset.js')
const watch = require('./lib/watch.js')

const run = pidToWatch => {
  return (
  pmset()
    .then(pmsetPid => {
      if (pidToWatch) {
        watch(pmsetPid, pidToWatch)
        return Promise.resolve(pmsetPid)
      } else {
        return Promise.resolve(pmsetPid)
      }
    })
  )
}

const noidle = (...args) => {

  const pidToWatch = (
  typeof (args[0]) === 'number' ?
    args[0] : null
  )

  const callback = (
  typeof (args[args.length - 1]) === 'function' ?
    args[args.length - 1] : null
  )

  if (callback) {
    run(pidToWatch)
      .then(pid => callback(null, pid))
      .catch(e => callback(e))
  } else {
    return run(pidToWatch)
  }

}

module.exports = noidle
