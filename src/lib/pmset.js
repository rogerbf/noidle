const spawn = require('child_process').spawn
const execFile = require('child_process').execFile

const pmset = callback => {
  execFile('which', ['pmset'], (err, stdout, stderr) => {
    if (err) callback('which was not found in path')
    const path = stdout.trim()
    if (path.length < 1) callback('pmset was not found in path')
    const instance = spawn(path, ['noidle'], {
      detached: true,
      stdio: 'ignore'
    })
    instance.unref()
    callback(null, instance.pid)
  })
}

module.exports = pmset

// pmset((err, pid) => {
//   if (err) console.log('error:', err)
//   console.log('pid:', pid)
// })
