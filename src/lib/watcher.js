const pmset = process.argv[2]
const surveyed = process.argv[3]

const isRunning = (processes, pid) => {
  return processes.filter(proc => proc.PID === pid).length === 1
}

const top = require('streaming-top')({ delay: 3 })

top.on('data', data => {
  
  const processes = JSON.parse(data.toString()).processes

  if (isRunning(processes, pmset)) {
    if (!isRunning(processes, surveyed)) {
      process.kill(parseInt(pmset))
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
