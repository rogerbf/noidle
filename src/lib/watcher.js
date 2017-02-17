const watch = require(`watch-pid`)
const pmsetPid = process.argv[2]
const subjectPid = process.argv[3]

watch(subjectPid, () => {
  process.kill(pmsetPid)
  process.exit()
})
