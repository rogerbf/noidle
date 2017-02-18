const { spawn } = require('child_process')

module.exports = (pmset, subject) => {
  const watcher = spawn(
    `node`,
    [
      `-e`,
      `require('watch-pid')(${subject}, () => process.kill(${pmset}))`
    ],
    {
      detached: true,
      stio: `ignore`
    }
  )
  watcher.unref()
  return watcher.pid
}
