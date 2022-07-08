let handler = async m => m.reply(`
Hai kak! Perkenalkan aku adalah salah satu admin nya sebut saja aku *_Nall_*!! Kali ini aku bakal memberikan tutorial bagaimana cara mendapatkan uang/money di dalam game RPG Whatsapp ini, Berikut ini adalah cara caranya. 

*(1)* *Cara yang pertama adalah dengan mengklaim RPG Absen*.
 Yaitu contoh commandnya: _Hadiah_ (cooldown 1 jam), _gethadiah_ (1x sehari), _daily_ (1x sehari), _weekly_ (1x seminggu), _Monthly_ (1x sebulan) .

*(2)* *Lalu ada juga cara yang kedua yaitu dengan cara menjual item-item.*
Yaitu dengan cara _. Jual <tipe> <jumlah>_

"_Loh kak emangnya gmn cara dapet item biar bisa dijual?_" Hehe gampang kok, *kalian bisa mendapatkan nya dengan cara berikut*: _menebang, nambang, mulung, serta adventure_
*Item yang kalian dapatkan bisa dijual di shop ya*! ^-^

*(3)* *Lalu ada lagi nih cara yang ketiga yaitu cara kekerasan😱!!!!*

Cara yang terakhir ini adalah cara yang ga boleh dilakukan ya! Jika kalian ketahuan bisa di masukan penjara loh. 

"_Emang caranya apasih sampe masuk penjara?_"

*Caranya adalah:*
_merampok dan membunuh_

*Jika si target merasa dirugikan kamu bisa di laporkan dan kena ban*

"_Cara melaporkan orang yang merampok dan membunuh gimana kak?_ " 
Kalian tinggal chat saja kepala Polisi dunia rpg Whatsapp dengan nomor wa.me/6285710531203 atau wa.me/6289512339018

*Untuk Command selengkapnya bisa ketik* _.menu_ dan lihat di kategori RPG Absen & RPG
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gametutorial']
handler.tags = ['info']
handler.command = /^(game|games|rpg)(tutorial|tutor|tuto)$/i

module.exports = handler
