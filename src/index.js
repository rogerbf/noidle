const pmset = require('./lib/pmset.js')
const watch = require('./lib/watch.js')

const run = watchPid => {
  return (
    pmset()
    .then(pmsetPid => {
      if (watchPid) {
        watch(pmsetPid, watchPid)
        return Promise.resolve(pmsetPid)
      } else {
        return Promise.resolve(pmsetPid)
      }
    })
  )
}

const noidle = (...args) => {
  if (typeof(args[args.length - 1]) === 'function') {
    const callback = args[args.length - 1]
    run(typeof(args[0]) === 'number' ? args[0] : null)
      .then(r => callback(null, r))
      .catch(e => callback(e))
  } else {
    return run(typeof(args[0]) === 'number' ? args[0] : null)
  }
}

module.exports = noidle
