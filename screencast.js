// https://github.com/OnetapInc/chromy/blob/master/examples/screencast.js

const Chromy = require('chromy')
const chromy = new Chromy()
const url = 'https://www.instagram.com/explore/tags/%E5%85%AB%E9%87%8D%E5%B1%B1/?hl=ja'

chromy.chain()
      .goto(url)
      .startScreencast(async (payload) => {
        console.log(payload.data.length)
      }, {format: 'jpeg', quality: 50})
      .evaluate(_ => {
        setInterval(_ => {
          var s = document.createElement('span')
          s.innerHTML = 'foo'
          document.body.appendChild(s)
        }, 50)
      })
      .sleep(1000)
      .stopScreencast()
      .sleep(1000)
      .end()
      .then(_ => chromy.close())
      .catch(_ => { console.log(_); chromy.close() })