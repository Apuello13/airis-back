module.exports = Object.freeze({
  findLastId: (arr) => arr.reduce((prev, current) => {
      return (prev.id > current.id) ? prev : current
  }).id
})