let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tekohint/i.test(m.quoted.contentText)) return !0
    conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
    if (!(id in conn.tebakkota)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == conn.tebakkota[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebakkota[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
            global.DATABASE.data.users[m.sender].money += conn.tebakkota[id][2]
            m.reply(`*Benar!*\n+${conn.tebakkota[id][2]} XP`)
            clearTimeout(conn.tebakkota[id][3])
            delete conn.tebakkota[id]
        } else if (m.text.toLowerCase().endsWith(json.result.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
