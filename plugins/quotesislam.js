let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {

let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/randomquote/muslim?apikey=Alphabot`)
json = await res.json()


if (!json.result) throw 'EROR NGAB!'

conn.reply(m.chat, `${json.result.text_id}`, m)
   await conn.sendButton(m.chat, author, 'Qotes Islamic', `${usedPrefix}quotesislami`, m)
}
handler.help = ['Quotesislami']
handler.tags = ['quran']
handler.command = /^(quotesislami|quotesislam)$/i

module.exports = handler
