module.exports = (spawn, pmset, subject) => {
  const node = spawn(
    `node`,
    [
      `-e`,
      `const watch = require('watch-pid');` +
      `const pmset = parseInt(process.argv[1]);` +
      `const subject = parseInt(process.argv[2]);` +
      `watch(subject, () => process.kill(pmset));` +
      `watch(pmset, () => process.exit());`,
      pmset,
      subject
    ],
    {
      detached: true,
      stdio: `ignore`
    }
  )
  node.unref()
  return node.pid
}
