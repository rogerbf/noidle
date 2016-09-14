const spawn = require('child_process').spawn
const execFile = require('child_process').execFile

const pmset = () => {
  return new Promise((resolve, reject) => {
    execFile('which', ['pmset'], (err, stdout, stderr) => {
      if (err) reject('command not found in path')

      const path = stdout.trim()
      const options = { detached: true, stdio: 'ignore' }
      const instance = spawn(path, ['noidle'], options)

      instance.unref()

      resolve(instance.pid)
    })
  })
}

module.exports = pmset
