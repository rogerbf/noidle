module.exports = (fork, pmset, subject) => {
  return new Promise((resolve, reject) => {
    const node = fork(
      `${__dirname}/external-watch.js`,
      [
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
