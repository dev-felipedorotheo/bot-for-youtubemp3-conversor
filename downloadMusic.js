// Usar esse site para fazer as conversoes
// https://youtubemp3.biz/pt2/
var inputLink = document.querySelector('input#youtube-url')
var btnConvert = document.querySelector('input#submit')
var arrSong = []
numberDownload = Number.parseInt(prompt("Quantas musicas voce quer fazer download?"))
for (i = 1; i <= numberDownload; i++) {
    musicLink = prompt(`LINK: ${i}`)
    arrSong.push(musicLink)
}
setInterval(() => {
    var getLink = arrSong.shift()
    inputLink.value = getLink
    setTimeout(() => {
        btnConvert.click()
        setTimeout(() => {
            var btnDownload = document.querySelector("b#download").click()
        }, 10000)
    }, 5000)
}, 20000) 