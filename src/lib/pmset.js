module.exports = spawn => {
  return new Promise((resolve, reject) => {
    const pmset = spawn(
      `pmset`,
      [ `noidle` ],
      {
        detached: true,
        stdio: `ignore`
      }
    ).on(`error`, reject)
    pmset.unref()
    process.nextTick(resolve.bind(null, pmset.pid))
  })
}
