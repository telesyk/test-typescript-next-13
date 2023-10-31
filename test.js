console.debug('🐛debug test text')
console.log('🌈debug test text')
console.warn('📢debug test text')
console.error('❌debug test text')
const userName = 'John'
console.count(userName)

console.debug = function (txt, value = null) {
  const prefix = '🪛'
  const cValue = !value ? '' : value
  if (typeof txt !== 'string') return console.log(prefix, cValue)
  return console.log(`${prefix} ${txt}`, cValue)
}
console.debug('hey')
// console = Object.create('debugger');
// Object.assign(Window.console.prototype, {
//   debugger(txt, value = null) {
//     const prefix = '🪛'
//     if (typeof txt !== 'string') return console.log(prefix, value)
//     return console.log(`${prefix} ${txt}`, value)
//   },
// })
//
