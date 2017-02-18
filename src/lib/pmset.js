module.exports = spawn => {
  return new Promise((resolve, reject) => {
    const pmset = spawn(
      `pmset`,
      [ `noidle` ],
      {
        detached: true,
        stdio: `ignore`
      }
    )
    pmset.unref()
    resolve(pmset.pid)
  })
}
