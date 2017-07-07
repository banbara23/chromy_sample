const Chromy = require('chromy')
const chromy = new Chromy()
const url = 'https://www.instagram.com/explore/tags/%E5%85%AB%E9%87%8D%E5%B1%B1/?hl=ja'

chromy.chain()
    // 画像の表示をブロックしてロード＆トラフィックを節約
    .blockUrls(['*.ttf', '*.gif', '*.png', '*.jpg', '*.jpeg', '*.webp'])
    // ページ表示
    .goto(url)
    // ブラウザ内でJavaScriptを評価する
    .evaluate(_ => {
        return document.querySelectorAll('*').length
    })
    .result(r => console.log(r))
    .end()
    .catch(e => console.error(e))
    .then(_ => chromy.close())