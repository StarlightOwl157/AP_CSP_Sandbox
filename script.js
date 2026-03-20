
function find_date() {
    // import * as dayjs from 'dayjs'
    const dayjs = require('dayjs')
    // console.log(dayjs())
    // var now = dayjs().format('MM-DD-YYYY dddd');
    // var sec = dayjs().second() // => new Date().getSeconds()
    // var min = dayjs().minute()
    // var hour = dayjs().hour()
    var dayofweek = dayjs().day()
    console.log(dayofweek)
    document.getElementById('answer').innerText = "hello"
    // console.log(now)
    // console.log(hour + ":" + min + ":" + sec)
    // console.log('hello')
}

 find_date()