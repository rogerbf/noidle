const spawn = require('child_process').spawn
const path = require('path')

const watcherPath = path.join(path.parse(__filename).dir, 'watcher.js')

const watch = (pmsetPid, watchPid) => {
  const instance = spawn('node', [watcherPath, pmsetPid, watchPid],
    { detached: true, stdio: 'ignore' })
  instance.unref()
  return instance.pid
}

module.exports = watch
