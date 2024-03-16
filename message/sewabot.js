




exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa bot

╭─❒ 「  *𝘚𝘦𝘸𝘢 𝘎𝘳𝘰𝘶𝘱* 」
│ Harga!
├ Pengguna baru Rp. 5k
├ Masa aktif 15 Hari
├ Free Givesaldo + Givelimit
├ Free Premium Semua Admin
╰─────────⁛⸙

╭─❒ 「  *𝘚𝘦𝘸𝘢 𝘎𝘳𝘰𝘶𝘱 2* 」
│ Harga!
├ Pengguna baru Rp. 10k
├ Masa aktif 1 Bulan
├ Perpanjang Rp. 5k
├ Free Givesaldo + Givelimit
├ Free Premium Semua Admin
╰─────────⁛⸙

╭─❒ 「  *𝘉𝘶𝘺 𝘗𝘳𝘦𝘮* 」
│ Harga!
├ Pengguna baru Rp. 5k 
├ Masa aktif  1 Bulan
╰─────────⁛⸙

╭─❒ 「  *𝘍𝘪𝘵𝘶𝘳 𝘗𝘳𝘦𝘮* 」
├ Limit tanpa batas 
├ Menu nsfw Terbuka
├ Klaim lebih banyak EXP Harian
├ Hidetag, mentionAll member
├ Bisa mengubah watermark stiker 
├ Dan masih banyak lagi 
╰─────────⁛⸙

𝗡𝗢𝗧𝗘 : 
Bot on 24 jam tapi kadang juga mati
Atau lgi ada error perbaikan Bug .


_Silahkan ketik .owner untuk mengetahui pemilik bot ini_
`
}

const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

    




















