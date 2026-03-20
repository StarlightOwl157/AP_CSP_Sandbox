// import * as dayjs from 'dayjs'
const dayjs = require('dayjs')
// console.log(dayjs())
var now = dayjs().format('MM-DD-YYYY dddd');
var sec = dayjs().second() // => new Date().getSeconds()
var min = dayjs().minute()
var hour = dayjs().hour()
var dayofweek = dayjs().day()

console.log(now)
console.log(hour + ":" + min + ":" + sec)