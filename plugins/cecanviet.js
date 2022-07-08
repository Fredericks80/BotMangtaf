let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/vietnam'), 'Subscribe : https://www.youtube.com/c/Frederick27', wm, 'NEXT', '.cecanvietnam', m)
}

handler.help = ['cecanvietnam']
handler.tags = ['asupan']
handler.command = /^(cecanvietnam)$/i
handler.limit = 3

module.exports = handler
