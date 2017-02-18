module.exports = ({ pmset, watch }, pid) => {
  return (
    typeof (pid) === `number`
    ? Promise.resolve(pid)
    : Promise.reject()
  )
  .then(
    pid => pmset().then(pmset => {
      watch(pmset, pid)
      return pmset
    }),
    () => pmset()
  )
}
