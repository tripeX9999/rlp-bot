let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/Audio/tarhim.mp3'
conn.sendFile(m.chat, vn, 'tarhim.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /(Alaihi|Subuh|Tarhim)/
handler.command = new RegExp
module.exports = handler