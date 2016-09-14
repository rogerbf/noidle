const spawn = require('child_process').spawn
const execFile = require('child_process').execFile

const pmset = () => {
  return new Promise((resolve, reject) => {
    execFile('which', ['pmset'], (err, stdout, stderr) => {
      if (err) reject('command not found in path')
      const path = stdout.trim()
      const instance = spawn(path, ['noidle'], {
        detached: true,
        stdio: 'ignore'
      })
      instance.unref()
      resolve(instance.pid)
    })
  })
}

module.exports = pmset
