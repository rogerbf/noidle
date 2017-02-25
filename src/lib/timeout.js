module.exports = (fork, pmset, timeout) => {
  return new Promise((resolve, reject) => {
    const node = fork(
      `${__dirname}/external-timeout.js`,
      [
        pmset,
        timeout / 1000
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
