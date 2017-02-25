module.exports = ({ pmset, watch, timeout }, options) => {
  return (
    options
    ? Promise.resolve(options)
    : Promise.reject()
  )
  .then(
    options =>
    (options.hasOwnProperty(`pid`) || options.hasOwnProperty(`timeout`)
    ? Promise.resolve(options)
    : Promise.reject(`invalid options`))
    .then(options => pmset().then(pmset => Promise.all([
      options.hasOwnProperty(`pid`)
      ? watch(pmset, options.pid)
      : Promise.resolve(),
      options.hasOwnProperty(`timeout`)
      ? timeout(pmset, options.timeout)
      : Promise.resolve()
    ]).then(() => pmset))),
    () => pmset()
  )
}
