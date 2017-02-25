const pmset = parseInt(process.argv[2], 10)
const subject = parseInt(process.argv[3], 10)

const watch = (pid, callback, delay = 1500) => {
  setTimeout(() => {
    try {
      process.kill(pid, 0)
      watch(pid, callback, delay)
    } catch (error) {
      callback(pid)
    }
  }, delay)
}

watch(pmset, () => process.exit())
watch(subject, () => process.kill(pmset))
