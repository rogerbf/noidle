const fork = require('child_process').fork
const path = require('path')

const watch = (pmsetPid, watchPid) => {
  const modulePath = path.join(__dirname, 'watcher.js')
  fork(modulePath, [pmsetPid, watchPid], { stdio: 'ignore' })
}

module.exports = watch
