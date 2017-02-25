const pmset = parseInt(process.argv[2], 10)
const time = parseInt(process.argv[3], 10)

setTimeout(() => {
  process.kill(pmset)
}, time)
