const getMethods = (obj) => {
  let properties = new Set()
  let currentObj = obj
  do {
    Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
  } while ((currentObj = Object.getPrototypeOf(currentObj)))
  return [...properties.keys()].filter(item => typeof obj[item] === 'function')
}

console.log(getMethods("").length);
console.log(getMethods(new String('str')).length);
console.log(getMethods({}).length);
console.log(getMethods(Error.prototype).length);
console.log(getMethods(Number.prototype).length);
console.log(getMethods(Boolean.prototype).length);
console.log(getMethods(null).length);