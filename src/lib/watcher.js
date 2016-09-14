const subject = process.argv[2]
const surveyed = process.argv[3]

const top = require('streaming-top')({ delay: 3 })

top.on('data', data => {
  const processes = JSON.parse(data.toString()).processes

  const pmsetIsRunning = processes.filter(proc => proc.PID === subject).length === 1
  const surveyedIsRunning = processes.filter(proc => proc.PID === surveyed).length === 1

  if (pmsetIsRunning) {
    if (!surveyedIsRunning) {
      process.kill(parseInt(subject))
      process.exit()
    }
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  top.kill()
})

process.on('uncaughtException', err => {
  top.kill()
  throw err
})
