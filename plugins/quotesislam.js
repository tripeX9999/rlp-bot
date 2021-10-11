let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix }) => {

let res = await fetch(`https://api-zeeoneofc.herokuapp.com/api/randomquote/muslim?apikey=Alphabot`)
json = await res.json()


if (!json.result) throw 'EROR NGAB!'

await this.send2Button(m.chat, `${json.result.text_id}` ,author, 'Quotes Islamic', `${usedPrefix}quotesislam','Lu Sedih?', `${usedPrefix}dakwah2' m)
}
}
handler.help = ['Quotesislami']
handler.tags = ['quran']
handler.command = /^(quotesislami|quotesislam)$/i

module.exports = handler
