module.exports = (spawn, pmset, subject) => {
  return new Promise((resolve, reject) => {
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
    ).on(`error`, reject)
    node.unref()
    process.nextTick(resolve.bind(null, node.pid))
  })
}
