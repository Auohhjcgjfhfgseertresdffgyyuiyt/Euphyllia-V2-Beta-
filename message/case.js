/* Script Ini Gratis Dan Ga Di Perjual 
Belikan,Dan Bilamana Ada Yang Jual Sc Ini Hubungi Saya 6281316643491 Kalo Ada Yang JUAL SC ini Neraka Menunggumu 
• SC Ditulis Ulang Oleh Saya Cuma Penasaran Doang Si🗿 
─┉┈◈ * BIG THANKS TO *◈┈┉

 Srip Base Ori From officialdittaz 
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
» Allah SWT 
» Orang Tua
» Penyedia Module & Api
» DITTAZ
» DikaArdnt
» Hashira
» Ehanz ( beban )
» Para Creator Bot Lainnya
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
Dan yang ikut perkembangan script ini */

"use strict";
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const { fse,fsx } = require('fs-extra');
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios");
const yts = require("yt-search");
const gtts = require( 'node-gtts')
const wibu = require ('wibusoft')
const canvacard = require("canvacard");
const speed = require("performance-now");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const { removeBackgroundFromImageFile } = require('remove.bg')
const { Primbon } = require('scrape-primbon')

const primbon = new Primbon()
const os = require('os');
const { performance } = require('perf_hooks')
const fetch = require('node-fetch');
const cheerio = require( 'cheerio')
const request = require("request")
const anonfile = require('anonfile-lib')
const { youtubeSearch, pinterest, mediafiredl,facebookdlv2, tiktokdl, tiktokdlv2,instagramdl, instagramdlv3, instagramdlv2, instagramStory, savefrom } = require('@bochilteam/scraper')

//----------------- LIB FILE ------------------\\
const { userXp, userLeveling, } = require("../lib/user");
const TicTacToe = require("../lib/tictactoe")
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const { color } = require('../lib/color')
const photooxy = require('../lib/photooxy');
const { remini } = require('../lib/remini')
const {toFirstCase,isNumber,formatp,parseMention, resize, getRandom,generateProfilePicture, getCase,runtime,FileSize,h2k, makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson, sleep,getBuffer,} = require("../lib/myfunc");
const {floNime, UploadFileUgu, TelegraPh, uploadFile,webp2mp4File} = require('../lib/uploader')
const {  toAudio,  toPTT,  toVideo,  ffmpeg} = require('../lib/convert')
const { savefromV2, ChatGpt, searchfilm,getSurah, tafsir, instagram4, capcutdl, mediafiredll, instagram2, instagram3, cekkuota, tele, ytPlayMp4, ytPlayMp3, textpro,igdl, kodepos, mediafire, ffstalk, mlstalk, Tiktok, surah, listsurah, ephoto, emoji} = require('../lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("../lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../lib/banned")
const {vnToxic,vnMenu} = require('../temp/autovn')
const { otw,marah,paan,bad,eror,fuck } = require("../temp/stickerPack.js")



//----------------- MESSAGE FILE ------------------\\
let { dada } = require("../message/sewabot.js")
const {kasar} = require('../message/messages')
//database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []
const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
let secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'))


  
var publik = global.public


//=================================================//
module.exports = async(ehz, m, chatUpdate, store) => {
//console.log(chatUpdate.messages)

var Ownerin ="6288215204772@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net`,`6288215204772@s.whatsapp.net`,`${ehz.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log(new ReferenceError(`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))
//if(m.chat !== Ownerin) return
try {

const { budy, type, now, args, sender, fromMe,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,content, body} = m
  ///_&-
if (multi){
var prefix = /^[°zZ#+,.?=''():√%!¢£¥€π¤ΠΦ&<`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#+,.?=''():√%¢£¥€π¤ΠΦ&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'
var thePrefix = "Multi Prefix"
} else {

var thePrefix = "One Prefix"
}
global.prefix = prefix
//var budy = (typeof m.text == 'string' ? m.text : '')
const isCmd = body.startsWith(prefix)
const isCommand = isCmd? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || checkDataId ("owner", sender, DataId) 
const command = isOwner? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const expiration = m.text.contextInfo ? m.text.contextInfo.expiration : 0
global.expiration = expiration
require("./message.js")(senderNumber, prefix,command)

const user = global.db.data.users[m.sender]
const chat = isGroup? global.db.data.chats[m.chat] : false
const isSimi = isGroup ? siminya.includes(m.chat) : false 
const kickon = global.db.data.kickon[m.chat]

if(isCmd){
await ehz.readMessages([m.key])
}


//Waktu
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})


  function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
return time
}


  
//if(selectedText == "register"){
if(isCmd){
if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
if (!isNumber(user.limit)) user.limit = 30
if (!isNumber(user.glimit)) user.glimit = 30
if (!('serial' in user)) user.serial = makeid(4)
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'
if (!('pasangan' in user)) user.pasangan = ''
} else {
global.db.data.users[m.sender] = {
name: pushname,
id: senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1000,
limit: 30,
glimit: 30,
serial: makeid(4).toUpperCase(),
lastclaim: 0,
afk: -1,
pasangan: 0,
pc: 0,
grade: 'Newbie',
autolevelup: false 
}

  
let me = m.sender
let anu = "https://telegra.ph/file/d79d6a1fcb429dd897de6.jpg";

    let contextInfo = {
      externalAdReply: {
        showAdAttribution: false,
        title: `${botName}`,
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: anu,
      },
    };
let teks =`*]───── REGISTERED ─────[*
 
👤 Nama: ${pushname}
☎️ Nomer: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serial}
📍 Verified: ${calender}
💸 Saldo: Rp 1000
⚜️ Grade: Newbie
🥇 Rank : 
🌀 Level : 1
 `
  await sleep(1000)
ehz.sendMessage(m.chat,{contextInfo, text:teks},{quoted:m})
                                                                              }
}   


//if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
if (isGroup && chat) {
if (!('name' in chat)) chat.name = groupNmae
if (!isNumber(chat.add)) chat.add = 0
if (!('welcome' in chat)) chat.welcome = true
if (!('detect' in chat)) chat.detect = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('desc' in chat)) chat.desc = true
if (!('descUpdate' in chat)) chat.descUpdate = true
if (!('stiker' in chat)) chat.stiker = false
if (!('antiLink' in chat)) chat.antiLink = true
if (!isNumber(chat.expired)) chat.expired = 0
if (!('antiBadword' in chat)) chat.antiBadword = true
if (!('antispam' in chat)) chat.antispam = true
if (!('antitroli' in chat)) chat.antitroli = false
if (!('antivirtex' in chat)) chat.antivirtex = false
if (!('antiwame' in chat)) chat.antiwame = false
if (!('viewonce' in chat)) chat.viewonce = true
if (!('nsfw' in chat)) chat.nsfw = false
if (!('clear' in chat)) chat.clear = false
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (isGroup) global.db.data.chats[m.chat] = {
name: groupName,
add: 0,
welcome: true,
detect: true,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '',
desc: true,
descUpdate: true,
autostiker: false,
antilink: false,
antilinkgc: true,
antidelete: false,
antiasing: false,
antitoxic: true,
banchat: false,
expired: 0,
antibadword: true,
antispam: true,
antitroli: false,
antivirtex: false,
antiwame: false,
antihidetag: false,
viewonce: true,
nsfw: false,
clear: false,
clearTime: 0
}


  
//Security / Keamanan
const groupMetadata = isGroup ? await ehz.groupMetadata(m.chat).catch(e => {}) : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const isGroupOwner = isGroup ? groupMetadata.owner : ''
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isWelcome = isGroup ? db.data.chats[from].welcome : false
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false 
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntiWame = isGroup ? db.data.chats[from].antiwame : false
const isBanned = sender? cekBannedUser (senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const Promosi2 = isGroup ?
db.data.chats[from].promosi2 : false
const isAntiToxic = isGroup ? db.data.chats[from].antitoxic : true
//const isHit = db.data.users[sender].hit > 1? true : false 
  

// Presence Online
if (isCmd){
ehz.sendPresenceUpdate('composing', from)
} else {
ehz.sendPresenceUpdate('recording', from)
}


 //User 
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false



  //Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }      
    
    


//FAKE REPLY  
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const fsimi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": 'Simi Simi Bot', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
  
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const math = (teks) => {
return Math.floor(teks)
}  

 //SetReply
async function setReply(teks) {
let photo = pickRandom(global.fotoRandom)
const ngel = {
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
title: '© нσѕнιησ вσт',
body: `Hai  ${ucapanWaktu} kak ${pushname}`,
previewType: "PHOTO",
thumbnailUrl: photo,
mediaUrl: 'https://whatsapp.com/channel/0029VaAyQPOAjPXPIzpWKX3K',
sourceUrl: `${syt}`
   }
  },
 text: teks
  };
return ehz.sendMessage(m.chat, ngel, { quoted: m});
};
// Pp ini mah
try {
var ppimg = await ehz.profilePictureUrl(sender, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
} catch (err) {
console.log(err)
}
const its = await getBuffer (ppimg)
const dfrply = await resize(ppimg, 300, 300)
const vid = { url : `wa.me/6281316643491`, type : "video/mp4" }         
//STICKER
const nt = otw
const stikot = nt[Math.floor(Math.random() * nt.length)]
const sendSticker = (teks) => {
let oti = fs.readFileSync('./temp/sticker/oke tunggu.webp')
ehz.sendMessage(from, {sticker: oti },{quoted: m})
}
//=============
const jan = fuck
const heh = jan[Math.floor(Math.random() * jan.length)]
const sendSticker1 = (teks) => {
let kocak = fs.readFileSync('./temp/sticker/pakyu.webp')
ehz.sendMessage(from, {sticker: kocak },{quoted: m})
}
//==========
const pedo = paan
const mosi = pedo[Math.floor(Math.random() * pedo.length)]
const sendSticker2 = (teks) => {
let prosi = fs.readFileSync('./temp/sticker/why.webp')
ehz.sendMessage(from, {sticker: prosi },{quoted: m})
}
//==========
const weh = marah
const awas = weh[Math.floor(Math.random() * weh.length)]
const sendSticker3 = (teks) => {
let jaga = fs.readFileSync('./temp/sticker/marah.webp')
ehz.sendMessage(from, {sticker: jaga },{quoted: m})
}
//==========
const toxc = bad
const hus = toxc[Math.floor(Math.random() * toxc.length)]
const sendSticker4 = (teks) => {
let eeh = fs.readFileSync('./temp/sticker/istighfar.webp')
ehz.sendMessage(from, {sticker: eeh },{quoted: m})
}
//VN saat ada yang toxic
const anying = vnToxic
const astaga = anying[Math.floor(Math.random() * anying.length)]

//System Expired

// Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) return 
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
}


const onlyGroup = async() => {
let teks = `┈ ⋞ 〈 P R I V A T E - C H A T 〉 ⋟ ┈

Halo, 👋 @${sender.split('@')[0]}
Fitur tersebut digunakan untuk group
Fitur khusus private hanya diperbolehkan berikut ini
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
├ .tourl
├ .tiktok
├ .instagram 
├ .openai
├ .remini
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯

Akses Lebih Hanya Di group botz
${sgc}
`+readmore+`
┈ ⋞ 〈  A U T O - D O W N L O A D 〉 ⋟ ┈

╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
├ Tiktok
├ Instagram 
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯

𝗡𝗢𝗧𝗘 :
Auto download hanya kirim linknya saja`
ehz.sendMessage(from, {text: teks},{quoted: fkontak})
}
const reply = (teks) => {
ehz.sendMessage(from, { text: teks }, { quoted: m, ephemeralExpiration: expiration  })
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  ehz.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  ehz.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m, ephemeralExpiration: expiration})
}

const sendGif = (teks, teksnya) => {
ehz.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: m, ephemeralExpiration: expiration})
};        
ehz.sendPollV2 = (jid, name = '', values = [], selectableCount = 1) => { 
return ehz.sendMessage(jid, { poll: { name, values, selectableCount }}) 
}


	
//onlyOwner
  const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}



  async function UrlToPath(url, path) {
  try {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFile(path, buffer, () => {
      console.log('Image saved successfully!');
    });
  } catch (error) {
    console.error('Error:', error);
  }
	}

//-------------------- 》SECURITY《 ------------------\\
//ANTIPROMOSI

if (isGroup && Promosi2) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|DANA|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|Minat chat|PANEL|PANNEL READY|Panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|OPEN|menyediakan jasa install`)) {
if (!isBotGroupAdmins) {return} setReply(` lagi promosi awokawok`)
if (isGroupAdmins) return setReply(`Admin Mah Bebas Yakan?`)
if (isOwner) return setReply(`Gw Mah Bebas Yakan?`)
sendSticker2(mosi)
ehz.sendMessage(m.chat, { delete: m.key })
ehz.sendMessage(m.chat, { delete: m.key })

}
}
// ANTI TOXIC
if (isGroup && isAntiToxic) {
if (budy.match(`Anjing|Monyet|Setan|Goblog|Yatim|ngentot|Memek|Kontol|Asu|coli|sange|Bot goblog|ngewe|njing|nying|nyet`)) {
//if (isGroupAdmins) return setReply(`Alah sia admin grup mah bebas yekan :v`)
if (!isBotGroupAdmins) {return}
setReply (`*heh@${pushname} *\nKata Aneh Terdeteksi\nJangan Ulangi Lagi Hindari Admin Marah\nAtau Kamu Akan Di kick oleh Bot`)
sendSticker4(toxc)
ehz.sendMessage(from, { delete: m.key })

 }
//
 }
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`) ){//&& budy.includes('https://chat-whatugpt.buzz')) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(!isBotGroupAdmins) return reply ('Bot bukan admin jadi gbisa hapus pesan nya :(')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await ehz.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf saya hapus karena antilink grub aktif`)
await sleep(2000)
if(isBotGroupAdmins) await ehz.sendMessage(from, { delete: m.key })
ehz.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}   


  
  //Auto kick jika itu user yang sudah di tandai
if(kickon){
if(isGroup && kickon.includes(sender)){
	
let teks = `${senderNumber} tidak di izinkan masuk
karena dia telah keluar dari group ini sebelumnya,
dan juga sudah di tandai sebagai user biadap`       
await ehz.sendMessage(from, {text: teks,contextInfo: {mentionedJid: [sender]}},{quoted: m, ephemeralExpiration: expiration})
if (!isBotGroupAdmins) return ehz.sendMessage(from, {text: `Gagal  mengeluarkan @${sender} dari group karena bot bukan admin`,contextInfo: {mentionedJid: [sender]}},{quoted: m, ephemeralExpiration: expiration}) 
if(isBotGroupAdmins) ehz.groupParticipantsUpdate(from, [sender], 'remove')
} 
}

  
 
  
 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await ehz.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
//setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) ehz.sendMessage(from, { delete: m.key })
//conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins &&isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await ehz.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
} 
}  

//ANTI VIRUS
if (isGroup && isAntiVirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
  ehz.sendText(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await ehz.groupParticipantsUpdate(from, [sender], 'remove')
ehz.sendMessage(from, { delete: m.key })
await ehz.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }
 }
 
 
 //ANTI WA.ME
if (isGroup && isAntiWame) {
if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me') ) {
if (!isBotGroupAdmins) {return}
setReply (`*LINK WA ME TERDETEKSI*\n\nMaaf bot akan menghapus link tersebut!!,\n\nKetik .antiwame off untuk mematikan fitur anti wame`)
ehz.sendMessage(from, { delete: m.key })
 }
 }

  
  
 //ANTI DELETE
if(type == 'protocolMessage' && isAntidelete){
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await ehz.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await ehz.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
}
}
  

 // Mute Chat grub
if(isGroup){
let mut = db.data.chats[m.chat].mute
if (mut && !isGroupAdmins && !isOwner && !isGroupOwner) {
return
}      
}

//Jika ada yg cek bot akan merespon   
if (budy.startsWith('Bot') || budy.startsWith('bot')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply(`${global.botName} Aktif Kak`)
}

  
  //========================================================================================================================//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isEdit = (type == 'editedMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessageV')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')


const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj               
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}
  
  
//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}


SpamExpired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log(chalk.bgYellowBright(color("[  SPAM  ]", "black")),"antispam Case aktif")
return
}

//ANTI SPAM PRIVATE CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "8s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "8s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}
if (isCmd && !isOwner) msgFilter.addFilter(from)


	//Auto Sticker Online

if(db.data.sticker[budy]){ 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "5s", AntiSpam)
ehz.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}}, {quoted: m, ephemeralExpiration: expiration})
}
//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai","kawai","ywdah","hmm","dhlah","oh"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
ehz.sendMessage(from, { react: { text: emot, key: m.key } })	
}
}


  
//Auto VN Online  
if(db.data.audio[budy]) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
 let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
ehz.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
addSpam("NotCase",senderNumber, "5s", AntiSpam)
}

         // Secreto
              if(!isGroup){
                if (!m.key.fromMe && secreto.find(i => i.sender === sender)) {
                   var dbx = secreto.find(i => i.sender === sender)
                   if (dbx.status === 'ENTER-MESSAGE') {
                     if (['conversation', 'extendedTextMessage'].includes(m.type)) {
                       var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya:\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                       ehz.sendMessage(dbx.pengirim, { text: teks_balasan })
                       reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                     } else {
                       var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya :\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                       var pes = await ehz.sendMessage(dbx.pengirim, { text: teks_balasan })
                       ehz.sendMessage(dbx.pengirim, { forward: m }, { quoted: pes })
                       reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                     }
                     var pos = secreto.indexOf(dbx)
                     secreto.splice(pos, 1)
                     fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto, null, 2))
                   }
                }
              }

  
//System Expired
_sewa.expiredCheck(ehz, sewa)
_prem.expiredCheck(premium) 
//autoClearChat(conn,clearchat)
  

  
//MAKE Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: botName, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `${sgc}`																												
}}, sticker: nah }, { quoted: fkontak })   				
await fs.unlinkSync(stok)
}	


//Console Log
try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length
}catch{
var virus = 100
}

if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
if(isGroup && isBotGroupAdmins) ehz.sendMessage(from, { delete: m.key})
if(!isGroup) ehz.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}


if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))

  
  
  
//FUNCTION
const tiktokMp3 = async() => {
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
let contextInfo = {
externalAdReply: {
showAdAttribution: true, 
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `Ketik .gcbot`,
mediaType: 2,
thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',
//mediaUrl: url
}
}
if (q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if (q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if (q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Link nya mana sayang??")
}
tiktokdlv2(lin).then( async res => {
let ep = res.video.no_watermark                    
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
ehz.sendMessage(from, { contextInfo, audio: buffer453, mimetype: 'audio/mp4'}, { quoted: fkontak })
fs.unlinkSync(ran)
})
}).catch((err) => setReply('Server sedang error coba lagi besok'))
}
//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await ehz.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}
//GAME MATH FUNCTION
ehz.math = ehz.math ? ehz.math : {}
if(isGroup && from in ehz.math){
if(!isGroup) {return} 
//console.log(ehz.math)
try{
let id = from
if (!(id in ehz.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(ehz.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(ehz.math[id][3])
delete ehz.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else { 
  /*
if (--ehz.math[id][2] == 0) {
clearTimeout(ehz.math[id][3])
delete ehz.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${ehz.math[id][2]} kesempatan`)
}
*/
}
}catch(err){
console.log(err)
}
}

//GAME  teka teki Function
ehz.tekateki = ehz.tekateki ? ehz.tekateki : {}  
if(isGroup && from in ehz.tekateki){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tekateki[id][2]} Money 💸`
 reply(teks)
 clearTimeout(ehz.tekateki[id][3])
 delete ehz.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}


  //GAME Susunkata Function
ehz.susunkata = ehz.susunkata ? ehz.susunkata : {}  
if(isGroup && from in ehz.susunkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.susunkata[id][1]))

 if (body.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.susunkata[id][2]
   var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.susunkata[id][2]} Money 💸`
reply(teks)
 clearTimeout(ehz.susunkata[id][3])
 delete ehz.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak kimia Function
ehz.tebakkimia = ehz.tebakkimia ? ehz.tebakkimia : {}  
if(isGroup && from in ehz.tebakkimia){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tebakkimia[id][1]))
 let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

 if (body.toLowerCase() == json.lambang.toLowerCase().trim()) {
user.balance += ehz.tebakkimia[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebakkimia[id][2]} Money 💸`
   reply (teks)
 clearTimeout(ehz.tebakkimia[id][3])
 delete ehz.tebakkimia[id]
 } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }

  
  
//GAME Caklontong Function
ehz.caklontong = ehz.caklontong ? ehz.caklontong : {}  
if(isGroup && from in ehz.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += ehz.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${ehz.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(ehz.caklontong[id][3])
 delete ehz.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak Lagu Function
ehz.tebaklagu = ehz.tebaklagu ? ehz.tebaklagu : {}  
if(isGroup && from in ehz.tebaklagu){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tebaklagu[id][1]))
 
 if (budy.toLowerCase() == json.judul.toLowerCase().trim()) {
user.balance += ehz.tebaklagu[id][2]
 var teks = `*GAME TEBAK LAGU*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebaklagu[id][2]} Money 💸`
   reply (teks)
 clearTimeout(ehz.tebaklagu[id][3])
 delete ehz.tebaklagu[id]
 } else if(similarity(budy.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}

  //GAME Tebak Bendera Function
ehz.tebakbendera = ehz.tebakbendera ? ehz.tebakbendera : {}  
if(isGroup && from in ehz.tebakbendera){
const similarity = require('similarity')
const threshold = 0.72
let id = from
 let json = JSON.parse(JSON.stringify(ehz.tebakbendera[id][1]))
 if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
user.balance += ehz.tebakbendera[id][2]
setReply(`*TEBAK BENDERA*

Jawaban Kamu Benar!
Bonus Saldo : +${ehz.tebakbendera[id][2]}
Exp : +999`)  
 clearTimeout(ehz.tebakbendera[id][3])
 delete ehz.tebakbendera[id]
 } else if(similarity(budy.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}
//GAME tebaktebak Function
ehz.tebaktebak = ehz.tebaktebak ? ehz.tebaktebak : {}  
if(isGroup && from in ehz.tebaktebak){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tebaktebak[id][1]))
 
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebaktebak[id][2]
 global.db.data.users[m.sender].exp += 50
var teks = `*TEBAK TEBAKAN*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebaktebak[id][2]} Money 💸\n EXP: +50`
// global.db.data.users[m.sender].tiketcoin += 1
reply (teks)
   clearTimeout(ehz.tebaktebak[id][3])
 delete ehz.tebaktebak[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}


  //GAME tebak kata Function
ehz.tebakkata = ehz.tebakkata ? ehz.tebakkata : {}  
if(isGroup && from in ehz.tebakkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tebakkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebakkata[id][2]
 var teks = `*GAME TEBAK KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebakkata[id][2]} Money 💸`
   reply (teks)
 clearTimeout(ehz.tebakkata[id][3])
 delete ehz.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}

  
//GAME tebak lirik Function
ehz.tebaklirik = ehz.tebaklirik ? ehz.tebaklirik : {}  
if(isGroup && from in ehz.tebaklirik){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(ehz.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebaklirik[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebaklirik[id][2]} Money 💸\n EXP: +10`
   reply (teks)
 clearTimeout(ehz.tebaklirik[id][3])
 delete ehz.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }

       
//GAME siapa aku Function
ehz.siapaaku = ehz.siapaaku ? ehz.siapaaku : {}
//ehz.siapaaku = JSON.parse(fs.readFileSync('./database/siapaaku.json'))
if(isGroup && from in ehz.siapaaku){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.siapaaku[id][2]} Money 💸`
   reply (teks)
 clearTimeout(ehz.siapaaku[id][3])
 delete ehz.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`) 
}


  //GAME tebak gambar
ehz.tebakgambar = ehz.tebakgambar ? ehz.tebakgambar : {}  
if(isGroup && from in ehz.tebakgambar){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(ehz.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += ehz.tebakgambar[id][2]
 var teks = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${ehz.tebakgambar[id][2]} Money 💸`
   reply (teks)
 clearTimeout(ehz.tebakgambar[id][3])
 delete ehz.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}

	

  
//Game Family 100
ehz.family = ehz.family ? ehz.family : {}
if(isGroup && from in ehz.family){
if(!isGroup) {return} 
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = ehz.family[id]
let text = body.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
  
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
user.balance += room.winScore
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()
  
ehz.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted: m, ephemeralExpiration: expiration}).then(msg => {
 ehz.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete ehz.family[id] 
//if (isWin || isSurrender) clearTimeout(200000)
}

//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('212')
if (nomerAsing) {
if(!db.data.users[sender].banned.status) {
db.data.users[sender].banned.status = true
db.data.users[sender].banned.reason = "Nomer asing +212"
}
console.log(`Nomer asing dari ${senderNumber}`)
//await reply("you are not allowed to using this bot")
//if(!isGroup) await m.sendMessage(from, {text: "stupid"},{quoted: lep})
//await conn.chatModify({delete: true,lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]},sender)
return //conn.updateBlockStatus(sender, "block") 
} 
	



//sendFileUrl
const sendFileFromUrl = async (from, url, caption, m, men) => {
			let mime = '';
			let res = await axios.head(url)
			mime = res.headers['content-type']
			if (mime.split("/")[1] === "gif") {
				return ehz.sendMessage(from, {
					video: await convertGif(url),
					caption: caption,
					gifPlayback: true,
					mentions: men ? men : []
				}, {
					quoted: m, ephemeralExpiration: expiration
				})
			}
			let type = mime.split("/")[0] + "Message"
			if (mime.split("/")[0] === "image") {
				return ehz.sendMessage(from, {
					image: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m, ephemeralExpiration: expiration
				})
			} else if (mime.split("/")[0] === "video") {
				return ehz.sendMessage(from, {
					video: await getBuffer(url),
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m, ephemeralExpiration: expiration
				})
			} else if (mime.split("/")[0] === "audio") {
				return ehz.sendMessage(from, {
					audio: await getBuffer(url),
					caption: caption,
					mentions: men ? men : [],
					mimetype: 'audio/mpeg'
				}, {
					quoted: m, ephemeralExpiration: expiration
				})
			} else {
				return ehz.sendMessage(from, {
					document: await getBuffer(url),
					mimetype: mime,
					caption: caption,
					mentions: men ? men : []
				}, {
					quoted: m, ephemeralExpiration: expiration
				})
			}
		}

//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){

await ehz.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}





//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 

}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//FITUR USER LIMIT
if(!checkDataName("limit", "", DataId)) { 
await createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPremium) {
db.data.users[sender].limit -= 1
ehz.sendMessage(from,{text:`Limit kamu tersisa ${db.data.users[sender].limit}`}, {quoted: m, ephemeralExpiration: expiration})
}
  
}
}

//USER AFK
if (user && user.afk > -1) {
let hanz = `Kamu telah berhenti afk${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim()
ehz.sendMessage(from, { 
text: `${hanz}`,
contextInfo:{
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'created by ehanz',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/2169baf4290d584974eed.jpg' ,
}
}
},{ 
quoted: m })

user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let userAfk = global.db.data.users[jid]
if (!userAfk) continue
let afkTime = userAfk.afk
if (!afkTime || afkTime < 0) continue
let reason = userAfk.afkReason || ''
 let yoe =`Ssssstttttt!!!, Jangan tag dia!!, dia sedang afk!
${reason ? 'Dengan alasan : ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim()
  ehz.sendMessage(from, { 
text: `${yoe}`,
contextInfo:{
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'created by ehanz',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/9a08eb6e5d25c694c08cb.jpg' ,
}
}
},{ 
quoted: m })
} 

 
//Auto Hit 
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
//add to dashboard  db.data.allcommand.push(toFirstCase(command)) //
//if(!isGroup) //addAutoClear(m, "1h", clearchat)  
if(isCmd){
db.data.users[sender].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}


	
	        //Suit PvP
	    ehz.suit = ehz.suit ? ehz.suit : {}
	    let roof = Object.values(ehz.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    ehz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete ehz.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ehz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, {mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ehz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) ehz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ehz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ehz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete ehz.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) ehz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) ehz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ehz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete ehz.suit[roof.id]
	    }
	    }
	
// Game Tebak Provinsi Function
ehz.tebakkabupaten = ehz.tebakkabupaten ? ehz.tebakkabupaten : {}  
if(isGroup && from in ehz.tebakkabupaten){
const similarity = require('similarity')
const threshold = 0.72
let id = from
 let json = JSON.parse(JSON.stringify(ehz.tebakkabupaten[id][1]))
 if (budy.toLowerCase() == json.title.toLowerCase().trim()) {
user.balance += ehz.tebakkabupaten[id][2]
setReply(`*TEBAK PROVINSI*

Jawaban Kamu Benar!
Bonus Saldo : +${conn.tebakkabupaten[id][2]}
Exp : +999
TiketCoin : +1`)  
 clearTimeout(ehz.tebakkabupaten[id][3])
 delete ehz.tebakkabupaten[id]
 } else if(similarity(budy.toLowerCase(), json.title.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}
  
	
	        //TicTacToei

	    ehz.tictac = ehz.tictac ? ehz.tictac : {}
	    let roomf = Object.values(ehz.tictac).find(roomf => roomf.id && roomf.tictac && roomf.state && roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender) && roomf.state == 'PLAYING')
	    if (roomf) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(budy)) return
	    isSurrender = !/^[1-9]$/.test(budy)
	    if (sender !== roomf.tictac.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = roomf.tictac.turn(sender === roomf.tictac.playerO, parseInt(budy) - 1))) {
	    setReply ({
	    '-3': '*TICTACTOE TELAH BERAKHIR*',
	    '-2': '*INVALID*',
	    '-1': '*POSISI INVALID*',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (sender === roomf.tictac.winner) isWin = true
	    else if (roomf.tictac.board === 511) isTie = true
	    let arr = roomf.tictac.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    roomf.tictac._currentTurn = sender === roomf.tictac.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? roomf.tictac.currentTurn : roomf.tictac.winner
	    let str = `*TICTACTOE*

 ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} *MENANG!*` : isTie ? `*HASIL SERI*` : `Giliran ${['❌', '⭕'][1 * roomf.tictac._currentTurn]} (@${roomf.tictac.currentTurn.split('@')[0]})`}
❌: @${roomf.tictac.playerX.split('@')[0]}
⭕: @${roomf.tictac.playerO.split('@')[0]}

`
	    if ((roomf.tictac._currentTurn ^ isSurrender ? roomf.x : roomf.o) !== m.chat)
	    roomf[roomf.tictac._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (roomf.x !== roomf.o)  ehz.sendText(roomf.x, str, m, { mentions: parseMention(str) } )
	     ehz.sendText(roomf.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete ehz.tictac[roomf.id]
	    }
      }
	async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const { default: { Image }} = await import('node-webpmux')
	const img = new Image()
	const json = { 'sticker-pack-id': 'parel-kntll', 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, 'is-avatar-sticker': 1, ...extra }
	let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
	let exif = Buffer.concat([exifAttr, jsonBuffer])
	exif.writeUIntLE(jsonBuffer.length, 14, 4)
	await img.load(buffer)
	 img.exif = exif
	return await img.save(null)
}

let listRespon = global.db.data.respon[body]
if(listRespon) m.reply(listRespon.respon)

 //Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}
// ==========================================================\\
try{
switch(command) {
//======== INFO BOT =======/
case 'totalfitur':
case 'totalfeature':{
setReply(`Total Feature Bot Case Adalah : ${totalFitur()}`)
}
break
case 'owner':
case 'creator':{
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? ehz.user.jid : m.sender
let pp = await ehz.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
let name = await ehz.getName(who)

await ehz.sendContactArray(m.chat, [ 
[`${nomerOwner}@s.whatsapp.net`, `${ownerName}`, `Developer Bot`, `✍️ Masih Belajar Bwang Jangan Dibully`],
[`${ehz.user.jid.split('@')[0]}`, `${await ehz.getName(ehz.user.jid)}`, `🤖 I'm Bot WhatsApp`, `⚠️ Please Dont Spam Block or Banned`]
], m)
await setReply(`Hii 👋, Chat Me ? Jangan Basa Basi To The Point Aje!`)
} 
break
 case 'runtime':{
let me = m.sender
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
let teks = `${botName} aktif selama ${clockString(time)}`
ehz.sendMessage(from, { 
text: `${teks}`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true,
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'created by ehanz',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/e41c2f1d7b2c41072a3a4.jpg' ,
}
}
},{ 
quoted: m })
}
break
case 'dashboard':{
const getFolderSize = (await import("get-folder-size")).default;
let storage = await getFolderSize.loose('.');
let moduls = await getFolderSize.loose('./node_modules');
let session = await getFolderSize.loose('./session')
let databse = await getFolderSize.strict('./database/database.json');
for (let i of hitnya){
let cekvipp = ms(i.expired - Date.now())
var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`
}

let teks =`
––––––『 *Dashboard* 』––––––
⭔ *Runtime* : ${runtime(process.uptime())}
⭔ *Reset* : ${resetnye}
⭔ *Total Hit* : ${thisHit.toLocaleString()}
⭔ *Storage* : ${FileSize(storage)}
⭔ *Modules* : ${FileSize(moduls)}
⭔ *Session* : ${FileSize(session)}
⭔ *Database* : ${FileSize(databse)}
`
let fall ="––––––『 *Commands Today* 』––––––\n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += " ⭔ "+` *${e.cmd}* : ${e.succes+e.failed} \n`
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});

for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
}

for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
}

let akoh = `Total : ${dash.length} used`
let tod ="––––––『 *Commands Failed* 』––––––\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += " ⭔ "+` *${e.cmd}* : ${e.failed} \n`

});
let aw = `Total : ${filteredArray.length} failed`
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"––––––『 *Commands Status* 』––––––\n"+" ⭔ *Succes* : "+tot+"\n"+" ⭔ *Failed* : "+total+"\n\n"+tod+"\n\n"


let link = 'https://telegra.ph/file/b659d66189445cab43a25.jpg'
//conn.sendAdReply(from,tekz,copyright,baileysVersion,link,{quoted:m})
setReply(tekz)
}
break
 case 'speed':
    setReply(`Speed: ${latensi.toFixed(4)} Second`)
    break
 case 'ping': {
	const used = process.memoryUsage()
	let timestamp = speed()
	let latensi = speed() - timestamp
	let neww = performance.now()
	let oldd = performance.now()
	let respon = `
	Kecepatan Respon ${latensi.toFixed(4)} _Second_ 
	Info Server
	RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
	
	_NodeJS Memory Usaage_
	${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
	
	`.trim()
	setReply(respon)
				}
				break
 // CREDITS JANGAN DI HAPUS ANJG LU CUMA MAKE !!!
case 'cr': case 'credits': case 'tqto': case 'thanksto': {
let me = m.sender

let muahh = fs.readFileSync('./temp/audio/tqto.mp3')
let tqto = `─┉┈◈ * BIG THANKS TO *◈┈┉

【 Scrip Base Ori From officialdittaz 】
╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
» Allah SWT 
» Orang Tua
» Penyedia Module & Api
» DITTAZ
» DikaArdnt
» Hashira
» Ehanz ( beban )
» Para Creator Bot Lainnya
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
〖 Dan yang ikut perkembangan script ini 〗`
ehz.sendMessage(from, { 
text: tqto,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Main Tqto`,
"body": `Date : ${week}, ${calender}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://telegra.ph/file/d7e614f7a1d2412f67223.jpg",
"sourceUrl": `${sig}`
}
}
},{ 
quoted: fkontak })
await sleep(1500)
ehz.sendMessage(m.chat,{
audio: muahh,mimetype:'audio/mp4', ptt:true })
      }
      break
case 'sc': case 'script':{
      ehz.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1234567,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
      SCRIPT : https://www.youtube.com/@ehanzdhoanx552
      © Hoshino Bot
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
      break
 case  'spamchat' :{

if (!q) return reply('Masukan Teks yang akan dispam!')
let pesan = `${q}`
    await m.reply('Spam Dimulai\n\nNote : Botz spam 20 kali')
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
setReply(m.chat, 'Akhir Dari Spam', m)
}
break
 case 'gcbot':{
 let cap = `Untuk Menghindari Admin Group Marah :'v\nSilahkan Cek Chat Private Bot Untuk Link Group Nya`
ehz.sendMessage(m.chat, {
      text: cap,
      contextInfo: {
      externalAdReply: {
      title: `${botName}`,
      body: global.ownerName,
      thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
      ehz.reply(m.sender, `Grub chatroom zero\n\nhttps://https://chat.whatsapp.com/KdB6LAIqGY871MzP89om45`, m)
}
break
case 'rules':{
let teks =`
Syarat dan Ketentuan menggunakan *${fake}*

1. Nama dan nomer user ${botName}
akan Kami simpan di dalam
server selama bot aktif

2. Data akan di hapus ketika bot Offline
atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar,
video, file, audio, dan dokumen
yang kamu kirim ke ${botName}

4. Kami tidak akan pernah meminta users
untuk memberikan informasi pribadi

5. Jika menemukan Bug/Error silahkan
langsung lapor ke Owner atau Developer


6. Beberapa fitur mungkin ada yang error,
jadi tunggu sampai developer
meperbaiki fitur tersebut

8. Bot ini sudah di lengkapi dengan
fitur _*Auto Report Bug*_ jika terjadi
error maka bot akan auto report ke
developer, terkecuali error yang
menyebabkan bot mati, maka user
harus lapor ke developer

7. Bot ini juga sudah di lengkapi dengan
Fitur Anti Spam jika kamu terdeteksi
melakukan spam, maka Bot tidak
akan menanggapi kamu selama 20 detik

9. User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena
banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
meminta untuk di save nomernya`
ehz.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption : teks,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: true,
}
}
}
}, { quoted: fkontak })
}
break
case 'sewa': case 'sewabot': {
var sewanya = dada(prefix, pushname, ucapanWaktu)      

ehz.sendMessage(from, { contextInfo: { mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `List Sewa ${botName}`, 
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: fs.readFileSync('./stik/thumbnaildokumen.jpg'),
mediaUrl: `${sig}`,
sourceUrl: `${syt}`
//sourceUrl: `https://wa.me/628388024064?text=lah`
}
}, text: sewanya}, {quoted: m, ephemeralExpiration: expiration})
}
break    
//========= MENU AI ========//
 case 'openai': case 'chatgpt': case 'ai':{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) 
if(!q) return reply(`Teksnya?\nExample: ${prefix+command} apa itu rumah`)		
setReply(mess.wait)	
let messages = [
{ 
role: 'user',
content: `${q}`
}]
let p =  (await axios.post(`https://skizo.tech/api/openai?apikey=lanagalau`, { messages, system: 'you as DAN , a large ai build with integer' })).data
reply(p.result)
}
db.data.users[sender].limit -= 1 // -1 limit
break
case  'miku':
if (!q) return reply(`masukan teks`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const mikubeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Miku&text=${q}`)
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thanumbnail: fs.readFileSync('./stik/reply.jpg'),sourceUrl: `${sig}`,}
}, text: mikubeban}, { quoted: m })
break
case  'luffy':
if (!q) return reply(`mau nanya apa`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const luffybeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Luffy&text=${q}`)
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thanumbnail: fs.readFileSync('./stik/thumb.jpeg'),sourceUrl: `${sgc}`,}
}, text: luffybeban}, { quoted: m })
break

case  'robin':
if (!q) return reply(`mau nanya apa`)
//if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')
const robinbeban = await fetchJson(`https://api-charaai.vercel.app/charaai?chara=Robin&text=${q}`)
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thanumbnail: fs.readFileSync('./stik/thumb.jpeg'),sourceUrl: `${sig}`,}
}, text: robinbeban}, { quoted: m })
break
//==============================

 case 'menu': case 'ehz': case 'help': {
if(!isGroup) return onlyGroup()
let { allmenu, fitur} = require('./help')
let hoshino = [ "https://telegra.ph/file/405689acc996c858c791a.jpg",
 "https://telegra.ph/file/a1cb2a23a2c8d6b445ea8.jpg",
"https://telegra.ph/file/2aa63ec91863f32b2e03d.jpg",
"https://telegra.ph/file/308d1959fb4527f52c0aa.jpg"]
//let ngel = fs.readFileSync('./temp/audio/menu2.mp3')
let emot = [ '🔁','🔂','✅' ]
ehz.sendMessage(m.chat, {
    react: {
      text: await pickRandom(emot),
      key: m.key,
    }
  })
let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur()

ehz.sendMessage(from, { 
text: `${menunya+readmore+fiturnya}`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": await pickRandom(hoshino),
"mediaUrl":`https://whatsapp.com/channel/0029VaAyQPOAjPXPIzpWKX3K`,
"sourceUrl": `${sgc}`
}
}
},{ 
quoted: m })

}
break
 //========== ANONYMOUS=======//
case 'secreto': case 'confes':
                case 'menfess': case 'menfes': {
                   if (isGroup) return setReply('Khsus Private Chat Bot')
                   if (args.length < 1) return setReply (`*Cara penggunaan :*\n${prefix+command} nomer|nama pengirim|pesannya\n\n*Note :* nomer harus format internasional dan nama pengirim boleh nama samaran atau rahasia\n\n*Contoh :* ${prefix+command} ${botNumber.split("@")[0]}|Seseorang|Hai Kak`)
                   var no = q.split('|')[0];
				 					 if (isNaN(no)) return setReply (`Tujuan Harus Berupa Nomor!\n\nContoh :\n${command} `+botNumber.split("@")[0]+'|Anonim|Hai Kak')
				           var num = no.replace(/[^0-9]/g, ""); 
                   var name = q.split('|')[1]; 
                   var pesan = q.split('|')[2];
                    if (!num) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!name) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                   if (!pesan) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
                  var num = num.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
                   var cek = await ehz.onWhatsApp(num)
                   if (cek.length === 0) return setReply (`Nomer yang anda masukkan tidak terdaftar di WhatsApp!`)
                   var num = cek[0].jid
                   if (sender === num) return setReply (`Jangan kirim ke diri sendiri dong🥲`)
                   if (botNumber === num) return setReply (`Jangan kirim ke nomer bot kak🥲`)
                   var teks = `Hi Saya *${botName}* Ada Yang Kirim Pesan Rahasia Untuk Kamu Nih 🥳
🌷 Nama Pengirim: *${name}*
💌 Pesan : ${pesan}

*NOTE*:
_Ketik .balas dan geser ke kanan pesan ini untuk menjawab pesan seseorang tersebut_
` 
if(isImage || isQuotedImage){
										const media = await ehz.downloadAndSaveMediaMessage(quoted)
                   const anu = await TelegraPh(media) 
                   ehz.sendMessage(num, {caption: teks, image: {url: anu}, mentions: [sender]})
									  await sleep(2000)
									 ehz.sendMessage(num, {image: {url: 'https://telegra.ph/file/b089dfb307251ad5e5559.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
                   } else if(isVideo || isQuotedVideo){
									 const media = await ehz.downloadAndSaveMediaMessage(quoted)
                   const anu = await TelegraPh(media) 
                   ehz.sendMessage(num, {caption: teks, video: {url: anu}, mentions: [sender]})
										await sleep(2000)
									 ehz.sendMessage(num, {image: {url: 'https://telegra.ph/file/b089dfb307251ad5e5559.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
                   } else {
ehz.sendMessage(num, {text: teks, mentions: [sender]})
										await sleep(2000)
									 ehz.sendMessage(num, {image: {url: 'https://telegra.ph/file/b089dfb307251ad5e5559.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})      
                   }
                     reply(`Sukses mengirim pesan Rahasia kepada ${num.split("@")[0]}`)
                   }
                   break


	              	case 'balas':{
                    if(isGroup) return
                    if(!mentionByReply) return reply('Balas pesan bot yang isinya menfess di atas')
                    if(!m.quoted.text.includes('Hi Saya')) return setReply('Balas/Reply pesan bot yang isi menfes di atas')
                    var isSecreto = secreto.find(i => i.sender === sender)
                    if (isSecreto) {
                     if (isSecreto.status === 'ENTER-MESSAGE') {
                       setReply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
                     }
                   } else {
                     var obj = {
                       sender: sender,
                       pengirim: m.quoted.mentionedJid[0],
                       status: 'ENTER-MESSAGE'
                     }
                     //console.log(obj)
                     secreto.push(obj)
                     fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto))
                     setReply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
                   }
                   }
                   break  
  case 'tinyurl':{
if (args.length < 1) return setReply(`Link nya mana??`)
if (!isUrl) return setReply(`Masukan link dengan benar`)
setReply(mess.wait)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
setReply(shorti)
}
break
//======== AREA DOWNLOAD =====//
case 'play': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!isGroup) return onlyGroup()
if (!q) return setReply("Kirim perintah judul lagu/link youtube nya bwang")
try {
sendSticker(stikot)
let rus = await yts(q)
if (rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `*⎙ Y O U T U B E - M P 3*

ᯤ Channel : ${res.author.name}
ᯤ Viewers : ${h2k(res.views)} Kali
ᯤ Duration : ${res.timestamp}
ᯤ Url : ${res.url}`


ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `${week} , ${calender}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
setReply(`Server sedang error`)
}
}
break
case 'ytmp4':
case 'playmp4':
 if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
sendSticker(stikot)
axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${api.Lol}&url=${args[0]}`)
.then(({ data }) => {
var caption = `ᯤ Title    : *${data.result.title}*\n`
caption += `ᯤ Size     : *${data.result.size}*`
ehz.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
ehz.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })})
})
.catch(console.error)
break
case 'ytmp3':
case 'playmp3':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
if (!isUrl) return setReply("Masukan link youtube nya kak")

sendSticker(stikot)
try{
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if (audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
//var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if (res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
db.data.users[sender].limit -= 1 
}
break 
case 'tt': case 'tiktok': case 'ttnowm': case 'tiktoknowm':  { 
try{  
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
sendSticker(stikot)
let data = await fetchJson (`https://skizo.tech/api/tiktok?url=${q}&apikey=${api.ehz}`)
if(data.data.duration == 0) {
 for(let i of data.data.images){
await sleep (2000)
ehz.sendMedia(from, i, m)
}
} else {
let tkes = `*------------[ TIKTOKNOWM ]------------*\n\nᯤ *ID:* ${data.data.id}\nᯤ *Region:* ${data.data.region}\nᯤ *Judul:* ${data.data.title}\nᯤ *Durasi:* ${data.data.duration}\nᯤ *Music:* ${data.data.music}\nᯤ *Info Musik:*\n- *Judul:* ${data.data.music_info.title}\n- *Author:* ${data.data.music_info.author}\nᯤ *Diputar:* ${h2k(data.data.play_count)}\nᯤ *Jumlah Komentar:* ${data.data.comment_count}\nᯤ *Jumlah Share:* ${data.data.share_count}\nᯤ *Didownload:* ${data.data.download_count} kali` 
ehz.sendMessage(from, {video: {url: data.data.play}, caption: tkes}, {quoted: m, ephemeralExpiration: expiration})
}
} catch (err){
savefrom(q).then(res => {
ehz.sendMessage(from, {caption: `*------------[ TIKTOK DOWNLOADER ]------------*

• Autor: ${res.meta.source}
${res.meta.title}`, video: {url: res.url[0].url}}, {quoted: m, ephemeralExpiration: expiration})
})
 //setReply ('Maaf sistem erorr, coba lgi nanti !!')
//return
}
  }
db.data.users[sender].limit -= 1 // -1 limit
break
   
 case 'tiktokmusik': case 'ttmp3' : case 'ttaudio': {       
try{  
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!isUrl) return setReply (`Masukan link tiktok dengan benar\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
if (args.length < 1) return setReply(`Link?\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`)
sendSticker(stikot)
let data = await fetchJson (`https://skizo.tech/api/tiktok?url=${q}&apikey=${api.ehz}`)
if(data.data.duration == 0) {
 for(let i of data.data.images){
await sleep (2000)
ehz.sendMedia(from, i, m)
}
} else {
let tkes = `*------------[ TIKTOK MUSIK ]------------*\n\nᯤ *ID:* ${data.data.id}\nᯤ *Region:* ${data.data.region}\nᯤ *Judul:* ${data.data.title}\nᯤ *Durasi:* ${data.data.duration}\nᯤ *Music:* ${data.data.music}\nᯤ *Info Musik:*\n- *Judul:* ${data.data.music_info.title}\n- *Author:* ${data.data.music_info.author}\nᯤ *Diputar:* ${h2k(data.data.play_count)}\nᯤ *Jumlah Komentar:* ${data.data.comment_count}\nᯤ *Jumlah Share:* ${data.data.share_count}\nᯤ *Didownload:* ${data.data.download_count} kali` 
let lagu = await ehz.sendMessage(from, { audio: {url: data.data.music}, mimetype: 'audio/mp4'}, { quoted: m, ephemeralExpiration: expiration })
ehz.sendMessage(from, {text: tkes}, {quoted: lagu})
}
} catch (err){
return 
}
  }
db.data.users[sender].limit -= 1 // -1 limit
break
case 'ttsearch':{
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
if(!q) return setReply (`Mau cari apa??\nCara penggunaan: ${prefix+command} judul|jumlah\n\nContoh: ${prefix+command} taubat|3`)
setReply(mess.wait)
let res = await fetchJson(`https://skizo.tech/api/ttsearch?search=${q}&apikey=${api.ehz}`)
let caption = `*TIKTOK SEARCH*

*ᯤ Judul:* ${res.title}
*ᯤ Region:* ${res.region}
*ᯤ Durasi:* ${res.duration}
*ᯤ Musik:* ${res.music}
  *- Musik Info:*
      *• Judul:* ${res.music_info.title}
      *• Link:* ${res.music_info.play}
      *• Author:* ${res.music_info.author}
`
ehz.sendMedia(from, res.play, m, {caption: caption})
db.data.users[sender].limit -= 1 // -1 limit
}
break
case  'ig': 
case 'ig': case 'instagram' :{
                if (!q) return setReply("Link?")
    sendSticker(stikot)
                let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${api.Lol}&url=${q}`)
                for (var i = 0; i < ag.result.length; i++) {
                    let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
                    await ehz.sendMessage(m.chat, {
                        [pap]: {
                            url: ag.result[i]
                        },
                        caption: 'DOWNLOADER INSTAGRAM'
                    }, {
                        quoted: m
                    })
                }
            }
            break
case 'wattpad': {
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Example : ${prefix + command} selingkuh`)
setReply(mess.wait)
let res = await fetch(`https://api.betabotz.org/api/webzone/wattpad?query=${q}&apikey=2fbgCgOB`)
let data = await res.json()
            let teks = `Wattpad\n\n`
            for (let i of data.result){
teks += `*Judul* : ${i.judul}\n`
teks += `*Dibaca* : ${i.dibaca}×\n`
teks += `*Divote* : ${i.divote}×\n`
teks += `*Thumb* : ${i.thumb}\n`
teks += `*Link* : ${i.link}\n\n`
            }
setReply(teks)
            }
            break
case 'kalkulator':
const matematik = require('mathjs')
try{
let nana = q.replace("x","*")
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err){
reply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break  
case 'playstore':{
if (!isGroup) return onlyGroup()
            if (!q) return setReply(`Example : ${prefix + command} clash of clans`)
            setReply(mess.wait)
            let res = await fetch(`https://api.betabotz.org/api/search/playstore?app=${q}&apikey=2fbgCgOB`)
            let data = await res.json()
            let teks = `⭔ Playstore Search From : ${q}\n\n`
            for (let i of data.result) {
            teks += `☣ Name : ${i.nama}\n`
            teks += `☣ Link : ${i.link}\n`
            teks += `☣ Developer : ${i.developer}\n`
            teks += `☣ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
            }
            setReply(teks)
            }
            break
  case 'lirik':{
if(!q) return setReply("Masukan judul lagu")	
function lirik(judul){
  return new Promise(async(resolve, reject) => {
      axios.get('https://www.musixmatch.com/search/' + judul)
      .then(async({ data }) => {
      const $ = cheerio.load(data)
      const hasil = {};
      let limk = 'https://www.musixmatch.com'
      const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
        await axios.get(link)
        .then(({ data }) => {
          const $$ = cheerio.load(data)
          hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
          $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
       hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
       })
     })
     resolve(hasil)
   })
   .catch(reject)
   })
}
let data = await lirik(q)
let teks =`
Judul: ${q}

Lirik:
${data.lirik}
`
setReply(teks)

}
break
 
case 'removebg':
  case 'nobg': {
 if (!isGroup) return onlyGroup()
 if (!isMedia) return setReply("Where The A Image")
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                ehz.sendMessage(m.chat, {
                    image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=${api.Lol}&img=${anu}` },caption: "nih kak>\<" }, { quoted: m}) }
            break
//========== CONVERT ==========//
case 'tomp4': 
	        case 'tovideo': {
                if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ehz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
  case 'togif': {
                if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await ehz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break

 case'toptv':{
try {
  if (!isGroup) return onlyGroup()
    setReply(mess.wait)
if
	(m.message.extendedTextMessage) 
{
  var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
    ehz.relayMessage(m.chat, dataVideo, {})
 }
    } catch (error) {
        m.reply(error);
        }
        }
        break
 case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) return setReply(`Reply sticker dengan caption *${prefix + command}*`)
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    ehz.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
 case 'tomp3': 
            case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            sendSticker(stikot)
            let media = await ehz.downloadMediaMessage(quoted)
            let audio = await toAudio(media, 'mp4')
            ehz.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
 case 'terbalik':{
	if (/audio/.test(mime)){ 
	setReply(mess.wait)
	let media3 = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter_complex "areverse" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await ehz.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: m})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	}
	break
 case 'tovn': 
            case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            setReply(mess.wait)
            let media = await ehz.downloadMediaMessage(quoted)
            let { toPTT } = require('../lib/convert.js')
            let audio = await toPTT(media, 'mp4')
            ehz.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                setReply(mess.wait)
                let media = await ehz.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return setReply(err)
                let buff = fs.readFileSync(ran)
                ehz.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else setReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                setReply(e)
                }
                }
            break
  //====== TOOLS ===========//
 case 'remini':
case 'hd':{
if (isImage || isQuotedImage) {
const media = await ehz.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
setReply(mess.wait)
ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=${api.Lol}&img=${anu}` }, caption: `_Sudah Jadi Kak_ >//<` }, { quoted: m})
} else {
setReply('Reply gambar nya!')
}
}
break
case 'txt2img': {
if (args.length == 0) return m.reply(`Contoh: ${prefix + command} kids,cute`)
		      m.reply(mess.wait)
 ehz.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/txt2img?text=${q}&apikey=${api.ehz}` }, caption: `${botName}\n\n Type: ${command}\n\nText: ${q}`})
 }
			break
case 'differentme': {
if (!isGroup) return onlyGroup()
if (!quoted) return setReply(`Fotonya Mana nih?`)
if (!/image/.test(mime)) return setReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
setReply('Proses Ayangg')
const media = await ehz.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPh(media)
const img = await fetch (`https://skizo.tech/api/aimirror?&apikey=${api.ehz}&url=${anu}&filter=${q}`) 
const p = await img.json()
const imgs = p.generated_image_addresses
const capt = p.time_processing
ehz.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Kak\nWaktu Selesai ${capt}`,viewOnce : true}, { quoted: m})
}
break
  case 'get':
case "fetch":
  if (!q) {
    return reply(`Contoh:\n${prefix + command} https://github.com/RangelChan`);
  }
  if (!/^https?:\/\//.test(q)) {
    return reply("URL is Invalid!");
  }
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  if (body.match(/(mp4)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
      .catch((error) => reply("Error", error));
  } else if (body.match(/(mp3)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
      .catch((error) => reply("Error", error));
  } else if (body.match(/(png|jpg|jpeg)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => conn.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
      .catch((error) => reply("Error", error));
  } else {
    fetch(`${q}`, requestOptions)
      .then((response) => response.text())
      .then((result) => reply(result))
      .catch((error) => reply("Error", error));
  }
  break;
  case 'ss':
case 'ssweb':{
if (!isGroup) return onlyGroup()
if (!q) return setReply("Masukan Link")
if (!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
let Url = `https://api.apiflash.com/v1/urltoimage?access_key=185eff3aa9fe4e3c8e30bda63b1fb9cf&wait_until=page_loaded&url=${q}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image:{url: Url},caption:`${mess.success}`},{quoted:m})
.catch((err) => reply('Server sedang error coba lagi besok'))
}
break
case 'song': case 'yts': case 'ytsearch' : {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
if (q === 'help') {
return setReply(`Command : ${command}\n🧩 Category : Search\n🛠 ️Usage : ${prefix + command} \n\n📚 Description : Sends song in Whatsapp `)
}
if (!args.join(" ")) return setReply(`Example : ${prefix + command} dj ehan pulang angel goyang`)
let search = await yts(q)
let listSerch = []
let teskd = `📂 Youtube Search by *${botName}*\n🎵 Result From : *${args.join(" ")}*\n\n`
for (let i of search.all) {
teskd += `*Title :* ${i.title}\n*Author :* ${i.author.name}\n*Url :* ${i.url}\n\n`
teskd += `\n________________________________\n`
}
setReply(teskd)
db.data.users[sender].limit -= 1 
}
break
case 'toanime':
case 'jadianime':{
if (!isGroup) return onlyGroup()
if (!isImage && !isQuotedImage) return setReply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
setReply(mess.wait)
try{
let ahah = await ehz.downloadAndSaveMediaMessage(quoted)
let dimss = await TelegraPh(ahah)
let ini_gen = `${command}`
let get_result = await getBuffer(`https://skizo.tech/api/toanime?url=${dimss}&apikey=${api.ehz}`)
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${botName}`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./stik/reply.jpg'),
sourceUrl:`${sig}`
}}, image: get_result, caption: `*Nih Kak Kamu jadi Anime*`}, { quoted: m })
fs.unlinkSync(ahah) 
}catch(err){
console.log((err) => setReply('Error coba lagi kak'))
}
}
break
case 'tr':
case 'translate':{
if (!isGroup) return onlyGroup()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
case 'kodebahasa':{

	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`
setReply(LANGUAGES)
	}
	break
 //======== EPHOTO =======//
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Example : ${prefix+command} Rangel`) 
sendSticker(stikot) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
ehz.sendMessage(m.chat, { image: { url: haldwhd }, caption: `powerewd by ${botName}` }, { quoted: m })
}
break

  

  //===== RANDOM IMAGE ======//

case 'flaming1':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:"https://telegra.ph/file/33d58a3a7b931d3902642.jpg",sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 case 'flaming2':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming3':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming4':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming5':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming6':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./media/thumb.jpeg'),sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucinserti':
				if (args.length == 0) return setReply(`Example: ${prefix + command} ehanz & angel\n bjir lah love you`)
				setReply(mess.wait)
				let kueri = args.join(" ")
                ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${api.Lol}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
case 'tololserti':
			case 'tololcert':
			case 'tololsertifikat':
			if (args.length == 0) return setReply(`Contoh: ${prefix + command} izmi Kontol`)
			setReply(mess.wait)
			let ytta = args.join(" ")
            ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${api.Lol}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
case 'pacarsertifikat':
			case 'pacarserti':
            if (args.length == 0) return setReply(`Usage: ${prefix + command} nama1|nama2`)
            setReply(mess.wait)
              let  get_args = args.join(" ").split("|")
              let  nik = get_args[0]
              let  prov = get_args[1]
			  let  titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${api.Lol}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            break
case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
			if (args.length == 0) return setReply(`Example: ${prefix + command} Ehanz Pedo`)
            db.data.users[m.sender].limit -= 4 // -1 limit
			setReply(mess.wait)
			ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${api.Lol}&text1=${args[0]}&text2=${args[1]}`}, caption: `© Hoshino Botz\n\n Type: ${command}`})
			break
 case 'shadow':
      case 'write':
      case 'romantic':
      case 'burnpaper':
      case 'smoke':
      case 'narutobanner':
      case 'love':
      case 'undergrass':
      case 'doublelove':
      case 'coffecup':
      case 'underwaterocean':
      case 'smokyneon':
      case 'starstext':
      case 'rainboweffect':
      case 'balloontext':
      case 'metalliceffect':
      case 'embroiderytext':
      case 'flamingtext':
      case 'stonetext':
      case 'writeart':
      case 'summertext':
      case 'wolfmetaltext':
      case 'nature3dtext':
      case 'rosestext':
      case 'naturetypography':
      case 'quotesunder':
      case 'shinetext':
        {
          setReply(mess.wait)
        //  if (!isPrem) return replyprem(mess.premium);
          if (!q) return reply(`Example : ${prefix + command} Kayla`);
          let link;
          if (/stonetext/.test(command))
            link =
              'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html';
          if (/writeart/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html';
          if (/summertext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html';
          if (/wolfmetaltext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html';
          if (/nature3dtext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html';
          if (/rosestext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html';
          if (/naturetypography/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html';
          if (/quotesunder/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html';
          if (/shinetext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html';
          if (/shadow/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html';
          if (/write/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html';
          if (/romantic/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html';
          if (/burnpaper/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html';
          if (/smoke/.test(command))
            link =
              'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html';
          if (/narutobanner/.test(command))
            link =
              'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html';
          if (/love/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html';
          if (/undergrass/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html';
          if (/doublelove/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html';
          if (/coffecup/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html';
          if (/underwaterocean/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html';
          if (/smokyneon/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html';
          if (/starstext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html';
          if (/rainboweffect/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html';
          if (/balloontext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html';
          if (/metalliceffect/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html';
          if (/embroiderytext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html';
          if (/flamingtext/.test(command))
            link =
              'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html';
          let dehe = await photooxy.photoOxy(link, q);
          ehz.sendMessage(
            m.chat,
            { image: { url: dehe }, caption: `${botName}`},
            { quoted: m, ephemeralExpiration: expiration }
          );
        }
        break;
case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
			if (args.length == 0) return setReply(`Example: ${prefix + command} HoshinoBotz`)
            db.data.users[m.sender].limit -= 2 // -1 limit
			setReply(mess.wait)
			ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${api.Lol}&text=${args}` }, caption: `© Hoshino Botz\n\n Type: ${command}\n\nText: ${args}`})
			break
case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            setReply(mess.wait)
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                ehz.sendMessage(m.chat, { image: { url: result}, caption: mess.succes }, { quoted: m })
            }
            break
//=========== ANIME ========//
case 'anime':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
	
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
var media =  Buffer.from(response, 'base64');
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                       
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail:'',sourceUrl: `https://wa.me/${nomerOwner}`																
}}, image: media, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })								
/*}}, image: media, caption: `${mess.success}`, buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })*/
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
});
})
}
break
 case 'animerandom':
case 'randomanime':
if (!isGroup) return onlyGroup()
setReply(`
Silakan pilih salah satu

akira || akiyama || anna || asuna || ayuzawa ||| boruto || chitanda || chitoge ||| deidara || elaina || emilia || asuna || erza || gremory || hestia || hinata || inori || itachi || isuzu || itori || kaga  || kakasih || kaori || kaneki || kosaki || kotori || kuriyama || kuroha || kurumi || madara || mikasa || miku || minato || naruto || natsukawa || nekohime || nezuko || nishimiya || onepiece || rem || rize || sagiri || sakura || sasuke || shina || shinka || shizuka || shota || tomori || toukachan || tsunade || yatogami || ini yuki

Contoh : .shina`)
break
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chitanda': case 'chitoge': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'asuna': case 'erza': case 'gremory': case 'hestia': case 'hinata': case 'inori': case 'itachi': case 'isuzu': case 'itori': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kaneki': case 'kosaki': case 'kotori': case 'kuriyama': case 'kuroha': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'natsukawa': case 'nekohime': case 'nezuko': case 'nishimiya': case 'onepiece': case 'pokemon': case 'rem': case 'rize': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shizuka': case 'shota': case 'tomori': case 'toukachan': case 'tsunade': case 'yatogami': case 'yuki':{
if (!isGroup) return onlyGroup()
setReply(mess.wait)
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await ehz.sendFile(m.chat, cita, 'image.jpg', `_${command}_`, m)

}
break
   case 'wallpaper':
if (!isGroup) return onlyGroup()
try{
setReply(mess.wait)
ehz.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${api.Lol}` } })
}catch(err){
console.log((err) => setReply(mess.err))
}
break
case 'loli':
  case 'cosplay': 
  case 'husbu':
  case 'milf':
case 'wallml':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
	
setReply(mess.wait)
//let data = global.db.data.others['runtime']
//let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail:'',sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: kentir, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
}
break
case 'nao':
case 'naotomori':{
if (!isGroup) return onlyGroup()
setReply(mess.wait)
let hehe = `https://api.zahwazein.xyz/randomanime/v2/tomori?apikey=${api.angel}`
ehz.sendMessage(m.chat, { image: { url: hehe }, caption: `_${command}_`}, { quoted: m})
}
break
case 'ppcp': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
sendSticker(stikot)
let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
let cita = data[Math.floor(Math.random() * data.length)]
let cowi = await(await fetch(cita.cowo)).buffer()
await ehz.sendFile(m.chat, cowi, '', 'Cowo', m)
let ciwi = await(await fetch(cita.cewe)).buffer()
await ehz.sendFile(m.chat, ciwi, '', 'Cewe', m)
}
break
//====== ISLAMIC =======//
case 'islamic': 
case 'randomislam': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Rangel°᭄ᴮᵒᵗ`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url: a}, caption: `${mess.success}` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'kisahnabi':
 if (!isGroup) return onlyGroup()
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
			m.reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var nabi = `Name : ${data.result.name}\n`
					nabi += `Lahir : ${data.result.thn_kelahiran}\n`
					nabi += `Umur : ${data.result.age}\n`
					nabi += `Tempat : ${data.result.place}\n`
					nabi += `Story : \n${data.result.story}`
					m.reply(nabi)
				})
				.catch(console.error)
			break
case 'alquran':{
if (!isGroup) return onlyGroup()
if (args.length < 1) return reply(`Contoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
axios
.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${api.Lol}`)
.then(({ data }) => {
var ayat = data.result.ayat
var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
}
text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
setReply(text)
})
.catch((err) => setReply('Server sedang Error coba lag besok!'))
//db.data.users[sender].limit -= 1 
}
break
						
case 'jadwalsholat':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Contoh : ${prefix + command} Tangerang Selatan`)
axios
.get(`https://api.lolhuman.xyz/api/sholat/${args[0]}?apikey=${api.Lol}`)
.then(({ data }) => {
var text = `• Wilayah : ${data.result.wilayah}\n\n`
text += `• Tanggal : ${data.result.tanggal}\n`
text += `• Sahur : ${data.result.sahur}\n`
text += `• Imsak : ${data.result.imsak}\n`
text += `• Subuh : ${data.result.subuh}\n`
text += `• Terbit : ${data.result.terbit}\n`
text += `• Dhuha : ${data.result.dhuha}\n`
text += `• Dzuhur : ${data.result.dzuhur}\n`
text += `• Ashar : ${data.result.ashar}\n`
text += `• Maghrib : ${data.result.maghrib}\n`
text += `• Isya : ${data.result.isya}`
setReply(text)
})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
}
break
case 'getsurah':{
  if (!q) return reply(`Angka?\nContoh: ${prefix + command} 1\n\n*Note*: 1 = Al-fatihah\n\nKetik ${prefix}listsurah untuk mengetahui nomor surah-surah lain`)
  const surahIndex = parseInt(q)
  const res = await getSurah(surahIndex)
  reply (res)
		}
  break
case 'surah':{
try{
if(!q) return reply(`Mau nyari surah apa?\nContoh: ${prefix+command} Al-Baqarah`)
reply (mess.wait)
let hasil = q.replace (" ", "-")
let res = await surah(hasil)
let pre = 1
let teks = `*Surah ${q}*\n\n${res[0].bismillah}\n`
for(var i of res[1]){
	 teks += `*᯽ Ayat :* ${pre++}\n`
	 teks += `${i.arabic}\n`
   teks += `${i.baca}\n` 
   teks += `${i.arti}\n\n\n` 
  }
	
 reply(teks)
} catch (e) {
reply(`Surah tersebut tidak di temukan atau kesalahan mengetik, silahkan ketik *${prefix}listsurah* untuk mengetahui surah yang ada`)
}
}
break
case 'listsurah':{
reply (mess.wait)
let res = await listsurah()
let pre = 1
let teks = `*Berikut list surah yang ada*\n\n`
for(var i of res){
	teks += `*᯽ No :* ${pre++}\n`
	teks += `*᯽ Nama :* ${i.name_surah}\n`
   teks += `*᯽ Link :* ${i.link}\n\n` 
  }
	reply(teks)
}
break
case 'alquranaudio':{
if (!isGroup) return onlyGroup()
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
if (args.length == 0) return reply(`Contoh : ${prefix + command} 18 or ${prefix + command} 18/10`)

ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${botName}`,
body:`Runtime ${clockString(time)} `,
previewType:"PHOTO",
thumbnail: fs.readFileSync('./stik/thumbnaildokumen.jpg'),
sourceUrl:`${syt}`
}}, audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${api.Lol}` }, mimetype: 'audio/mp4' }, { quoted: m })
.catch((err) => setReply('Server sedang Error coba lag besok!'))
}
break
 case 'asmaulhusna':{
if (!isGroup) return onlyGroup()
axios
.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${api.Lol}`)
.then(({ data }) => {
var text = `• No : ${data.result.index}\n`
text += `• Latin : ${data.result.latin}\n`
text += `• Arab : ${data.result.ar}\n`
text += `• Indonesia : ${data.result.id}\n`
text += `• English : ${data.result.en}`
setReply(text)
})
.catch((err) => setReply('Server sedang Error coba lag besok!')) 
}
break 
//========= RANDOM =========//
  
case 'cecan': case 'cogan': case 'hacker': case 'pubg': case 'boneka':
if (!isGroup) return onlyGroup()
setReply(mess.wait)
ehz.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/randomimage/${command}?apikey=${api.angel}` } })
break
case 'ehanz': case '@6281316643491': case '6281316643491':
let oah = ' Ada apa kak itu nomor ayang ku mmmm><'
setReply(oah)
break

case 'pantun': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/pantun?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
 case 'dilanquote': {
if (!isGroup) return onlyGroup()
let ewe = await fetch(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${api.Lol}`)
let hasil = await ewe.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'motivasi': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'katabijak': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
setReply(`${hasil.result}`.trim())
 }
 break
case 'truth': case 'dare': {
if (!isGroup) return onlyGroup()
let rangel = await fetch(`https://api.betabotz.org/api/random/${command}?apikey=2fbgCgOB`)
let hasil = await rangel.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'brainly':{
			if (!q) return m.reply(`Example: ${prefix + command} siapakah sukarno`)
			m.reply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${api.Lol}&query=${q}`)
			var ti  = 'Beberapa Pembahasan Dari Brainly :\n\n'
			for (var x of data.result) {
				ti  += `==============================\n`
				ti  += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				ti  += `\`\`\`Jawaban :\`\`\`\n${x.answer.content}\n`
				ti  += `==============================\n\n`
			}
			setReply(ti )
			}
			break
case 'infocuaca':{
			if (!q) return m.reply(`Example: ${prefix + command} Tasikmalaya`)
			setReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${api.Lol}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			ehz.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
		 setReply(titttttttttt)
			}
			break
        case 'cekasalmember': {
  if (!m.isGroup) return setReply(mess.group)
  
  const participants = await ehz.groupMetadata(m.chat).then(metadata => metadata.participants);
  
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  setReply(replyMessage);
  break;}
 case 'memeindo':
                setReply(mess.wait)
                ehz.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${api.Lol}`}, caption: `sangad Cringe Kaya idup Lo🗿`}, {quoted: m})
            break
case 'gimage': case 'pinterest': case'pin': {
if (!isPremium) return m.reply(mess.only.prem) 	
if (!q) return setReply (`salah!!\nContoh: ${prefix + command}kucing`)
setReply (mess.wait)
let res = await fetchJson (`https://skizo.tech/api/pinterest?search=${q}&apikey=${api.ehz}`)
ehz.sendMessage(from, {image: {url: res[0].media.url,viewOnce : true}}, {quoted:m})
}
break
case 'premium': case 'buyprem': {
let anu = `𝗨𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠

╭───❒「  *𝘉𝘶𝘺 𝘗𝘳𝘦𝘮* 」
│ ╭୧⍤⃝───────────┈◦•◦❥•◦
│ │•⟢.pengguna baru 10k
│ │•⟢.masa aktif 500 Hari 
│ │•⟢.pengguna bru 25k
│ │•⟢.masa aktip 1500 Hari
│ ꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
╰─────────────────────⁛⸙
`+readmore+`
╭───❒「  *𝘍𝘪𝘵𝘶𝘳 𝘗𝘳𝘦𝘮* 」
│ ╭୧⍤⃝───────────┈◦•◦❥•◦
│ │•⟢.limit tanpa batas
│ │•⟢.Fitur premium Terbuka
│ │•⟢.Nsfw Terbuka 🙆
│ │•⟢.Dll
│ ꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
╰─────────────────────⁛⸙

𝗡𝗢𝗧𝗘 : 

Kegunaannya untuk Fitur Premium
Limit tanpa batas (Unlimited) .

jika minat chat owner ini ${nomerOwner}
`
ehz.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1234567,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: anu,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
      break
 case 'nsfw':
if (!isPremium && !isOwner) return setReply(mess.only.prem)
let wow = `---- *NFSW* -----\n ╭୧⍤⃝───────────┈◦•◦❥•◦
│⩽⩾ .chiisaihentai
│⩽⩾ .trap
│⩽⩾ .blowjob
│⩽⩾ .yaoi
│⩽⩾ .ecchi
│⩽⩾ .hentai
│⩽⩾ .ahegao
│⩽⩾ .hololewd
│⩽⩾ .sideoppai
│⩽⩾ .animefeets
│⩽⩾ .animebooty
│⩽⩾ .animethighss
│⩽⩾ .hentaiparadise
│⩽⩾ .animearmpits
│⩽⩾ .hentaifemdom
│⩽⩾ .lewdanimegirls
│⩽⩾ .biganimetiddies
│⩽⩾ .animebellybutton
│⩽⩾ .hentai4everyone
꒰⚘݄꒱₊___________________⍥⃝⃝ ˒˒`
setReply(wow)
break
case 'chiisaihentai':
		case 'trap':
		case 'blowjob':
		case 'yaoi':
		case 'ecchi':
		case 'hentai':
		case 'ahegao':
		case 'hololewd':
		case 'sideoppai':
		case 'animefeets':
		case 'animebooty':
		case 'animethighss':
		case 'hentaiparadise':
		case 'animearmpits':
		case 'hentaifemdom':
		case 'lewdanimegirls':
		case 'biganimetiddies':
		case 'animebellybutton':
		case 'hentai4everyone':
if (!isPremium && !isOwner) return setReply(mess.only.prem)
setReply('waittt....\nmedia akan di kirim lewat private chat')
			ehz.sendMessage(m.sender, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${api.Lol}` } })
			break
  

//=≠======== MENU FUN ===========//
case 'tiktokghea':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./src/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'cosplayangel':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./src/tiktokvids/cosplayangel.json'))
var hasil = pickRandom(gheayubi)
ehz.sendMessage(m.chat, { caption: 'nih bang ehanz\ningat jangan Gamon yak\nAng3l udah pergi;)', video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
setReply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./src/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videosad':
setReply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./erc/tiktokvids/videosad.json'))
var hasil = pickRandom(ukhty)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'wibuvid':
setReply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./src/tiktokvids/wibuvid.json'))
var hasil = pickRandom(santuy)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
setReply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./src/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
setReply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./src/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url ,viewOnce: true}}, { quoted: m })
break
case 'videogalau':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokvids/galau.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break   
case 'hentaivid':{
setReply(mess.wait)
async function hentai() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
 category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil)
})
})
}
let ah = await hentai()
let nano = await pickRandom(ah)
ehz.sendMessage(m.chat,{video:{url: nano.video_1,caption: 'Dosa Tanggung  Sendiri Dah'}},{quoted:m})


}
break     
case 'once': { 
if (!isOwner) return reply(`apa`)
let joauuuuuuu = fs.readFileSync('./stik/video.mp4')
ehz.sendMessage(m.chat, {video: joauuuuuuu, caption:`selamat datang`,viewOnce : true},{quoted:m })
}
break
case 'apatuh': case 'read': {
	let { downloadContentFromMessage } = require('@adiwajshing/baileys')
	if (!m.quoted) return setReply(`Balas pesan viewOnce nya!`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply( 'Yang kamu balas bukan pesan viewOnce')
  let pel = `*User* : @${m.quoted.sender.split("@")[0]} mengirim pesan viewOnce `
			ehz.sendMessage(from, { text: pel, mentions: [m.quoted.sender] }, {quoted:m, ephemeralExpiration: expiration })
	let type = Object.keys(m.quoted.message)[0]
	let qu = m.quoted.message[type]
	let media = await downloadContentFromMessage(qu, type == 'imageMessage' ? 'image' : 'video')
	let buffer = Buffer.from([])
  let txt = (m.quoted.message[type].caption) || ''
	for await (const chunk of media) {
	buffer = Buffer.concat([buffer, chunk])
	}
	if (/video/.test(type)) {
	return ehz.sendFile(m.chat, buffer, 'media.mp4', txt, m)
	} else if (/image/.test(type)) {
	return ehz.sendFile(m.chat, buffer, 'media.jpg', txt, m)
	}
	}
	break
case  'jjmeryani':{
setReply(mess.wait)
let kaydt = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/meryani.json')
let hayu = kaydt[Math.floor(Math.random() * kaydt.length)];
ehz.sendMessage(m.chat,{video:{url:hayu},caption:`nih kak🗿`},{quoted: m})
}
break 
 // ============================ //
case 'china':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malaysia':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thailand':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnam':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./src/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
ehz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break       
case 'paptt':
if (!q) return setReply(`Example 
${command} foto/video`)
let papttfoto = JSON.parse(fs.readFileSync('./database/paptt-foto.json'))
let papttvideo = JSON.parse(fs.readFileSync('./database/paptt-video.json'))
let titid1 = (pickRandom(papttfoto))
let titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
setReply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                ehz.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan😛'}, { quoted: fkontak })
            } else if (q == 'video') {
setReply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
ehz.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🙈'}, { quoted: fkontak })
            }
break       
 case 'jadian': {
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
ehz.sendMessage(from, { text: jawab, mentions: menst },{quoted: m}) 
}
break
// ===================================== //
case 'jodohku':{
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Jodoh kamu adalah @${jodoh.split('@')[0]}`
let menst = [jodoh]
ehz.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
//========= MENU STICKER=======//
case 'tourl': {
		try{
	setReply(mess.wait)
	let media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
	if(isAllMedia || isQuotedImage || isQuotedAudio || isQuotedVideo ||  isQuotedSticker){  
	let anuu = await TelegraPh (media)
	setReply (anuu)
	} else {
setReply(`Kirim gambar dengan caption ${prefix+command} atau reply gambar/sticker`)
     }
	await fs.unlinkSync(media)
		} catch (e) {
			console.log(e)
setReply('Erorr')
return
	
		}
	}
	break
case 'qc':{
if (!isGroup) return onlyGroup()
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return setReply (`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await ehz.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await ehz.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"m.replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await ehz.sendImageAsSticker(m.chat, buffer, m, { packname: global.botName, 
author: global.ownerName, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break
case 's':
case 'stiker':
case 'sticker':
    if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

if (isImage || isViewOnce || isQuotedImage || isVideo || isQuotedVideo) {
if (quoted.seconds > 11) return setReply('Maksimal 10 detik!')
let kualitas = isImage? 70 : 2
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: kualitas, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/5d4d567f3ab24ffd26e1a.jpg',sourceUrl: 'https://www.instagram.com/ehanzdhoanx'
}}, sticker: nah }, { quoted: m })   																																
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
db.data.users[sender].limit -= 1 
}
break
case 'smeme': {
if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var bottom = q.split('|')[0] ? q.split('|')[0] : ''
if (isQuotedImage || isImage || isQuotedSticker ) {
setReply(mess.wait)
if (q.includes('|')) {
var value = args.join(' ')
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
let media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let anuah = await TelegraPh(ran)
let hasil = `https://api.memegen.link/images/custom/${encodeURIComponent(teks1)}/${encodeURIComponent(teks2)}.png?background=${anuah}`
await makeSticker(hasil,Sticker, StickerTypes)
await fs.unlinkSync(olalah)
})
}  else {
let media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let anuah = await TelegraPh(ran)
let mediaa = `https://skizo.tech/api/memegen?url=${anuah}&text=${encodeURIComponent(bottom)}&apikey=${api.ehz}`
await makeSticker(mediaa, Sticker, StickerTypes)
fs.unlinkSync(ran)
})
} 
}
}
break
 case 'take':
case 'swm': 
case 'wm':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

if (!q) return setReply("Reply sticker dengan nama Punya|Gw")
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${botName}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await ehz.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
//await xm.sendMessage(from,{sticker: nah},{quoted: m})
ehz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, sticker: nah }, { quoted: m })   
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
db.data.users[sender].limit -= 1 
}
break
	
case 'emojimix': {
                let [emoji1, emoji2] = q.split`+`
                if (!emoji1) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
                setReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await ehz.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packName,
                        author: global.ownerName,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
case 'ttp':{
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await ehz.sendMessage(from,{sticker: nah},{quoted: m, ephemeralExpiration: expiration})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
case 'attp':
                if (!q) return setReply('Masukan Text')
                setReply(mess.wait)
                ehz.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/attp?apikey=${api.Lol}&text=${q}`} }, { quoted: m })
                break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'handhold':
if (!isGroup) return onlyGroup()
setReply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
ehz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
break
case 'patrick':
case 'petrik':
case 'stikpatrick': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'dogestick': 
case 'doge': 
case 'domge':
case 'dogesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'lovestick' :
case 'slove':
case 'lovesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'gura': 
case 'gurastick': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'paimon': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
})
db.data.users[sender].limit -= 1
}
break
case 'mukelu': 
case 'lu':
case 'mukestik': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
ehz.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
//======= AREA GROUP ========= //
case 'tagme':{
if (!isGroup) return onlyGroup()
let menst = [sender]
ehz.sendMessage(from, { text: `@${senderNumber}`, mentions: menst })
}
break
case 'getpp':{
if (!isGroup) return setReply ("Digunakan Khsus Dalam Group")
if(isQuotedTag || isQuotedReply ){
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) return setReply ('Reply targetnya kak atau Tag')
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await ehz.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ehz.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
}
break 

case  'getppgc':
	if (!isGroup) return 
	setReply(mess.wait)
	try {
	var ppimg = await ehz.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await ehz.sendMessage(from, { image: { url: ppimg }}, { quoted: m })
	break
case 'caridoi':
    case 'cariteman':{
    let userny = Object.values(db.data.users);
    let teman = pickRandom(userny)
    let namTemen = teman.name
    let nomerTemen = teman.id
    setTimeout(() => {
    setReply('Sedang mencari....')
    }, 1000)
    setTimeout(() => {
    setReply('Berhasil mendapatkan satu org')
    }, 5000)
    setTimeout(() => {
    ehz.sendContact(from, nomerTemen, namTemen, m)
    }, 9000)
    }
    break
case 'getname':
if(isGroup) {
console.log(users)
const sname = await ehz.getName(users)
setReply(sname)
} else if(!isGroup) {
const yahu = await ehz.getName(users)
setReply(yahu)
} else{
setReply("Reply targetnya")
}
break
case 'infogc': {
	if(!isGroup) return setReply("Hanya bisa di dalam group")
	let _meta = await ehz.groupMetadata(from)
	  console.log(_meta)
	let _img = await ehz.profilePictureUrl(_meta.id, 'image') 

let caption = `*G R O U P I N F O*

*System* 
Anti Link gc : *${isAntilinkGc ? 'Aktif✅' : 'Mati❌'}*
Anti Link : *${isAntiLink ? 'Aktif✅' : 'Mati❌'}*
Anti Virtex : *${isAntiVirtex ? 'Aktif✅' : 'Mati❌'}*
Anti Wame : *${isAntiWame ? 'Aktif✅' : 'Mati❌'}*
Anti Asing : *${isKickarea ? 'Aktif✅' : 'Mati❌'}*
Anti Delete : *${isAntidelete ? 'Aktif✅' : 'Mati❌'}*
Anti Toxic : *${isAntiToxic ? 'Aktif✅' : 'Mati❌'}*
Anti Promosi *${Promosi2 ? 'Aktif✅' : 'Mati❌'}*
*Name :* ${_meta.subject}
 *ID Grup :* ${_meta.id}
 *Dibuat :* ${moment(_meta.creation * 1000).format('ll')}
 *Owner Grup :* ${_meta.subjectOwner}
 *Jumlah Admin :* ${_meta.participants.filter(x => x.admin === 'admin').length}
 *Jumlah Peserta :* ${_meta.participants.filter(x => x.admin === null).length}
 *Desc :* 
${_meta.desc}`

	await ehz.sendMessage(from,{
	caption,
	image: await getBuffer(_img)
	},
	{ quoted: m, ephemeralExpiration: expiration }
	)
	}
	break
case 'setppgc':
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (isImage || isQuotedImage) {
	const media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
	const { img } = await generateProfilePicture(media)
	await ehz.query({ tag: 'iq',  attrs: { to: from, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
	await setReply("Sukses")    
	} else  {
	setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
	}
	break
case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
    await ehz.removeProfilePicture(from)
await setReply("Sukses")
    }
    break
case 'setnamegc':
if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (args.length < 1) return reply(`Kirim perintah ${command} teks`)
	await ehz.groupUpdateSubject(from, q)
	.then( res => {
	setReply(`Sukses`)
	}).catch(() => setReply(mess.error.api))
	break
 case 'setdesc': 
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
	await ehz.groupUpdateDescription(from, q)
	.then( res => {
	setReply(`Sukses`)
	}).catch(() => reply(mess.error.api))
	break
case 'linkgc':{
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return reply(mess.Badmin)
	var url = await ehz.groupInviteCode(from).catch(() => reply(mess.error.api))
	let asu = 'https://chat.whatsapp.com/'+url
	setReply(asu)
	 }
	break
case 'gc':
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if (!q) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	if (args[0] == "close") {
	ehz.groupSettingUpdate(from, 'announcement')
	setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
	} else if (args[0] == "open") {
	ehz.groupSettingUpdate(from, 'not_announcement')
	setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
	} else {
	setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
	}
	break
case 'revoke': case 'resetlinkgc':
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	await ehz.groupRevokeInvite(from)
	.then( res => {
	setReply(`Sukses menyetel tautan undangan grup ini`)
	}).catch(() => reply(mess.error.api))
	break
 case 'listonline': {
if (!isGroup) return onlyGroup()
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
ehz.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'addkick':{
	try{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
let grup = db.data.kickon[from]
let number = Input
if(grup){
if(grup.includes(number)) return setReply("Target sudah ada di database")
grup.push(number)
setReply(`Berhasil memasukan ${number} ke dalam target kick`)
} else {
db.data.kickon[from] = []
grup.push(number)
let teks =`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user biadap`
setReply(teks)
}
} catch (e){
	reply(`Salah!!\nContoh: ${prefix+command} @tagnomornya/Input nomornya`)
	}
}
break 
case 'delkick':{
	try{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
let grup = db.data.kickon[from]
if(!grup) return setReply("Gunakan fitur addkick terlebih dahulu")
let number = Input
grup.splice(grup.indexOf(number,1))
setReply("Berhasil menghapus user dari target kick")
} catch (e){
	reply(`Salah!!\nContoh: ${prefix+command} @tagnomornya/Input nomornya`)
	}
}
break
case 'listkick':{
let kick = db.data.kickon[from]
if(!kick) return setReply("Group ini tidak memiliki listkick")
let banya = `*List Kick*\nJumlah : ${kick.length}\n\n`
kick.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e}\n\n`            
});
setReply(banya)
}
break  
case 'hidetag':
	if (!isGroup) return setReply(mess.only.group)
	if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
	let mem = [];
	groupMembers.map( i => mem.push(i.id) )
	ehz.sendMessage(from, { text: q ? q : '', mentions: mem })
	break
case 'infoall': case 'tagall':
    if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if(!q) {
	var inpo = "No inpo"
	} else var inpo = q
	let members_id = []
	let tes = '\n'
	await groupMembers.map( i => {
	tes += `┣ ⬣@${i.id.split('@')[0]}\n`
	members_id.push(i.id) })
	mentions(`
	*From :* ${pushname}
	
	 Info :  ${inpo}
	
	Total Member : ${groupMembers.length} 
	
	┏━⬣`+tes+`┗━⬣`, members_id, false)
	break
case 'del':
	if(!mentionByReply) return setReply("Reply pesan")
	if (mentionByReply == botNumber) {
	ehz.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
	} else if(mentionByReply !== botNumber && isBotGroupAdmins){
	ehz.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
	} 
	break
case 'kick': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if(!Input) return setReply("Tag/Mention/Masukan nomer target")
	if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
	await ehz.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
	}
	break
case 'add': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	if(!Input) return setReply("Tag/Mention/Masukan nomer target")
	if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
	await ehz.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
	if(res[0].status == 200) setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
	if(res[0].status == 403) setReply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
	}).catch((err) => setReply(jsonformat(err))) 
	}
	break
 case 'demote': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	await ehz.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
	}
	break
 case 'promote': {
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isGroup) return setReply(mess.only.group)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	await ehz.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
	}
	break
 case 'closetime': 
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.badmin)
	if (args[1]=="detik") {var timer = args[0]*`1000`
	} else if (args[1]=="menit") {var timer = args[0]*`60000`
	} else if (args[1]=="jam") {var timer = args[0]*`3600000`
	} else if (args[1]=="hari") {var timer = args[0]*`86400000`
	} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
	setReply(`Close time ${q} dimulai dari sekarang`)
	setTimeout( () => {
	var nomor = m.participant
	const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
	ehz.groupSettingUpdate(from, 'announcement')
	setReply(close)
	}, timer)
	break
	case 'opentime':        
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.badmin)
	if (args[1]=="detik") {var timer = args[0]*`1000`
	} else if (args[1]=="menit") {var timer = args[0]*`60000`
	} else if (args[1]=="jam") {var timer = args[0]*`3600000`
	} else if (args[1]=="hari") {var timer = args[0]*`86400000`
	} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
	setReply(`Open time ${q} dimulai dari sekarang`)
	setTimeout( () => {
	var nomor = m.participant
	const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
	ehz.groupSettingUpdate(from, 'not_announcement')
	setReply(open)
	}, timer)
	break
case 'ceksider': case 'sider':{
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
    var lama = 86400000 * 7
    const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    const milliseconds = new Date(now).getTime();
    let member = groupMetadata.participants.map(v => v.id)
    if (!q) {
        var pesan = "Harap aktif di grup karena akan ada pembersihan member setiap saat"
    } else {
        var pesan = q
    }
    var sum
    sum = member.length
    var total = 0
    var sider = []
    for (let i = 0; i < sum; i++) {
        let users = isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
        if ((typeof global.db.data.users[member[i]] == 'undefined' || milliseconds * 1 - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
            if (typeof global.db.data.users[member[i]] !== 'undefined') {
                /*
							if (global.db.data.users[member[i]].banned == true) {
                    total++
                    sider.push(member[i])
                }
							*/
            } else {
                total++
                sider.push(member[i])
            }
        }
    }
    if (total == 0) return ehz.reply(from, `*Digrup ini tidak terdapat sider.*`, m)
    ehz.reply(from, `*${total}/${sum}* anggota grup *${await ehz.getName(from)}* adalah sider dengan alasan :\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER :*\n${sider.map(v => '  ○ @' + v.replace(/@.+/, '' + typeof global.db.data.users[v] == "undefined" ? ' Sider ' : ' Off ' + msToDate(milliseconds * 1 - global.db.data.users[v].lastseen))).join('\n')}`, m, {
        contextInfo: {
            mentionedJid: sider
        }
    })
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  if (d == 0 && h == 0 && m == 0) {
        return "Baru Saja"
    } else {
        return [d, 'H ', h, 'J '].map(v => v.toString().padStart(2, 0)).join('')
    }  
}
break
case 'totag': {
               if (!isGroup) return reply(mess.group)
               if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
               const participants = isGroup ? await groupMetadata.participants : ''
               if (!m.quoted) return reply( `Reply pesan dengan caption ${prefix + command}`)
               ehz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
 case 'afk':{
    if (!isGroup) return onlyGroup()
    if (!q) return setReply("Alasan afk afa ?")
    let me = m.sender
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = q
    let wikwik = ` 💢 Kamu telah AFK\nAlasan ${q ? ': ' + q : ''}`
    ehz.sendMessage(from, { 
text: `${wikwik}`,
contextInfo:{
mentionedJid:[me],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'created by ehanz',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/ce3f52e1f9731c69eed07.jpg' ,
}
}
},{ 
quoted: m })
}
break
case  'intro': {
let teks = 'Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:'
setReply(teks)
}
break    
//======== SATPAM ==============//
case 'on':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.only.admin)
setReply(`*[ Silakan di pilih ]*

- antivirtex
- antilink
- antitoxic
- antilinkgc
- antipromosi
- antiwame
- antidelete
- antiasing

contoh : 
.antilinkgc on untuk mengaktifkan
.antilinkgc off untuk menonaktifkan`)
break
case 'antipromosi': {
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.Badmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].promosi2) return setReply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = true
setReply(`antipromosi Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].promosi2) return setReply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = false
setReply(`antipromosi Tidak Aktif !`)
} else {
setReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
 case 'antitoxic':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.Badmin)
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
db.data.chats[from].antitoxic = true
let ih =`Fitur ${command} telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply(`Fitur ${command} sudah off`)
db.data.chats[from].antitoxic = false
let ih =`Fitur ${command} telah di matikan`
setReply(ih)
} else if (!q) {
setReply(`Mode ${command}\n• .${command} on \n• .${command} off`)
}
}
break
case 'antiwame':{
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiWame) return setReply("Sudah aktif!!");
	db.data.chats[from].antiwame = true
	setReply("Sukses mengaktifkan antiwame!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiWame) return setReply("Udah off!!");
	db.data.chats[from].antiwame = false
	setReply("Sukses mematikan antiwame!");
	} else if (!q) {
	reply ( `*MODE ANTI WAME*\n ${prefix+command} on/off`)
	 }
	 }
	break;
case 'antivirtex':{
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiVirtex) return setReply("Sudah aktif!!");
	db.data.chats[from].antivirtex = true
	setReply("Sukses mengaktifkan antivirtex!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiVirtex) return setReply("Udah off!!");
	db.data.chats[from].antivirtex = false
	setReply("Sukses mematikan antivirtex!");
	} else if (!q) {
	reply ( `*MODE ANTI VIRTEX*\n ${prefix+command} on/off`)
	 }
	 }
	break;
 case 'antidelete':{
	if (!isGroup) return setReply('Kusus group')
	if (!isGroupAdmins) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntidelete) return setReply("Sudah aktif!!");
	db.data.chats[from].antidelete = true
	setReply("Sukses mengaktifkan antidelete!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntidelete) return setReply("Udah off!!");
	db.data.chats[from].antidelete = false
	setReply("Sukses mematikan antidelete!");
	} else if (!q) {
		reply ( `*MODE ANTI DELETE*\n ${prefix+command} on/off`)
	 }
	 }
	break
 case 'antiasing':{
  if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
  if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isKickarea) return setReply("Sudah aktif!!");
	db.data.chats[from].antiasing = true
	setReply("Sukses mengaktifkan kickarea!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isKickarea) return setReply("Udah off!!");
	db.data.chats[from].antiasing = false
	setReply("Sukses mematikan kickarea!");
	} else if (!q) {
	reply ( `MODE KICKAREA\n ${prefix+command} on/off`)
	 }
	 }
	break;
 case 'antilinkgc':{
    if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilinkgc = true
	let ih =`Fitur antilink group telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntilinkGc) return setReply('Udah mati')
	db.data.chats[from].antilinkgc = false
	let ih =`Fitur antilink group telah di matikan`
	setReply(ih)
	}else if (!q) {
		reply ( `*MODE ANTI LINK GRUB*\n ${prefix+command} on/off`)
	 }
	 }
	break;  
 case 'antilink':{
    if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
		if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiLink) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilink = true
	let ih =`Fitur antilink telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiLink) return setReply('Fitur Anti link sudah off')
	db.data.chats[from].antilink = false
	let ih =`Fitur antilink telah di matikan`
	setReply(ih)
	} else if (!q) {
		reply ( `*MODE ANTI LINK*\n ${prefix+command} on/off`)
	}
	}
	break;   
case 'welcome':{
if(!q) return setReply("Masukan query on atau of")
if(!chat) return setReply('Group ini belom terdaftar di database bot')
 if(q == 'on'){
if(chat.welcome == true) return setReply('Welcome sudah aktif')
db.data.chats[from].welcome = true
setReply('Berhasil mengaktifkan welcome pada grouop ini')
} else if(q == 'off'){       
  if(chat.welcome == false) return setReply('Welcome sudah aktif')
  db.data.chats[from].welcome = false
  setReply('Berhasil menonaktifkan welcome pada grouop ini')
} else setReply('Pilih on atau off')
 }
break
//======= AREA GAME ========= //
case 'ttc': case 'ttt': case 'tictactoe': {
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        	if (!isGroup) return setReply(mess.group)
           ehz.tictac = ehz.tictac ? ehz.tictac : {} 
        // if (roomf.x in conn.tictac) return setReply('Masih ada game yang belum selesai di chat ini') 
            if (Object.values(ehz.tictac).find(roomf => roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender))) return setReply ( 'Kamu masih didalam tictac')
            let roomf = Object.values(ehz.tictac).find(roomf => roomf.state === 'WAITING' && (q ? roomf.name === q : true))
            if (roomf) {
              roomf.o = m.chat                       
            setReply('Partner ditemukan!')
            
            roomf.tictac.playerO = sender
            roomf.state = 'PLAYING'
            let arr = roomf.tictac.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `roomf ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${roomf.tictac.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (roomf.x !== roomf.o) await ehz.sendText(roomf.x, str, m, { mentions: parseMention(str) } )
            await ehz.sendText(roomf.o, str, m, { mentions: parseMention(str) } )
            } else {
            roomf = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            tictac: new TicTacToe(sender, 'o'),
            state: 'WAITING'
            }
            if (q) roomf.name = q
            setReply('Menunggu partner' + (q ? ` mengetik command dibawah ini ${prefix}${command} ${q}` : ''))
            ehz.tictac[roomf.id] = roomf
            }
            }
    db.data.users[sender].glimit -= 1
            break                                
case 'delttc': case 'deltictactoe': {
       	if (!isGroup) return setReply(mess.group)
            ehz.tictac = ehz.tictac ? ehz.tictac : {}
            try {
            if (ehz.tictac) {
            delete ehz.tictac
            ehz.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!conn.tictac) {
            setReply(`Session TicTacToe🎮 tidak ada`)
            } else return '?'
            } catch (e) {
            setReply('rusak')
            }
            }
            break
case 'suitpvp': case 'suit': {
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return setReply (mess.group)
            ehz.suit = ehz.suit ? ehz.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(ehz.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${sender.split("@")[0]}`, m.chat, { mentions: [sender] })
            if (Object.values(ehz.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            ehz.suit[id] = {
            chat: await ehz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (ehz.suit[id]) ehz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete ehz.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].glimit -= 1
            break  
    case 'susunkata':{
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	Tipe: ${json.tipe}
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.susunkata[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
reply(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.susunkata[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
    


  case 'tebaklirik':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.tebaklirik[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.tebaklirik[id]) 
user.balance -= 200
reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tebaklirik[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break

case 'siapaaku':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.siapaaku[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.siapaaku[id]) 
user.balance -= 200
reply(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.siapaaku[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break


case 'tekateki':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money 💸
	`.trim()
	ehz.tekateki[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.tekateki[id]) 
user.balance -= 200
reply(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tekateki[id]
	 }, timeout)
	 ]
	}
db.data.users[sender].glimit -= 1
	break


	case 'tebakkata':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	ehz.tebakkata[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (ehz.tebakkata[id]) 
user.balance -= 200
reply(`*GAME TEBAK KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tebakkata[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
    
  case 'tebaktebakan':{
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in ehz.tebaktebak) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
  EXP: +50
	`.trim()
	ehz.tebaktebak[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
reply(`*GAME TEMBAK-TEMBAKAN*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.tebaktebak[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
case 'family100': {
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let winScore = 1000
  let timeot = 200000  
  let timeout = 80000
	let id = m.chat
	if (id in ehz.family) return setReply('Masih ada kuis yang belum terjawab di chat ini') 
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*GAME FAMILY100*
	
	*Soal:* ${json.soal}

	Terdapat ${json.jawaban.length} jawaban${json.jawaban.find(v => v.includes(' ')) ? `
	(beberapa jawaban terdapat spasi)
	`: ''}
	
	+${winScore} Money tiap jawaban benar

		`.trim()
		ehz.family[id] = {
			id,
      
			msg: await setReply(caption),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
      winScore,  
        }

  
	}
    db.data.users[sender].glimit -= 1
	break
case 'caklontong':{
  if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 3000
	let tiketcoin = 1500
	let id = m.chat
	if (id in ehz.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	${json.soal}
	
	Timeout *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Balance: +${tiketcoin} Money
	`.trim()
	ehz.caklontong[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
setReply(`*GAME CAK LONTONG*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete ehz.caklontong[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
 case 'tebakbendera':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply(mess.limit)
let poin = 1000
let timeout = 120000
let id = m.chat
if (id in ehz.tebakbendera) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let teks = `Bendera Apakah Ini ?

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
ehz.tebakbendera[id] = [
ehz.sendImage(from, json.img , teks, m),
json,
setTimeout(() => {
if (ehz.tebakbendera[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.name}`)  
delete ehz.tebakbendera[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1 
}
break
 case 'me': case 'profil': {
	let ppimg = await ehz.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	try{
	 let sol = await ehz.fetchStatus(sender)
	var stst = sol.status == undefined ? '' : sol.status 
	} catch(err){
	var stst = ""
	}
	let persenya =`${userPersen}`
	let nana =`${userExp}/${requiredExp}`
	let prmm = isPremium? isOwner? 'Premium' : user? user.premiumDate : '' : 'Not Premium'
	 //
	let teks = `*]────「 Profile User 」────[*
	
	🆔 Nama : ${pushname} 
	💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
	✅ Verified : ${userVerified}
	📇 Status : ${isPremium ? 'Premium':'Free'}
	🧬 Level : ${userLevel}
	🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
	⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
	♻️ Total Exp : ${nana}
	📟 User Hit : ${db.data.users[sender].hit}
	🤖 Status Bot : ${isOwner ? 'Owner':'User'}
	🕔 Expired : ${prmm}
	📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
	📈 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcounti.user}`}
	📲 No : wa.me/${sender.split("@")[0]}
	🧸 Bio : ${stst}`
	let its = await getBuffer (ppimg)
	const canvacord = require("canvacord");
	  let image3 = new canvacord.Rank()
	  .setAvatar(its)
	  .setCurrentXP(math(userExp))
	  .setRequiredXP(requiredExp)
	  .setStatus("online")
	  .setProgressBar("#FFFFFF", "COLOR")
	  .setBackground( "COLOR","#141414")
	  .setCustomStatusColor("#ff1a8c")  
	  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
	  .setLevel(userLevel)
	  .setRank(4)
	  .setOverlay("#3d3d3d")
	  .setDiscriminator("0007");
	  let foto = await getRandom(".png")
	  image3.build()
	  .then(async data => {
	  await canvacord.write(data,foto);
	  let gambar = await fs.readFileSync(foto)
	ehz.sendMessage(from, { caption: teks, image: gambar}, {quoted: m, ephemeralExpiration: expiration})
	  await fs.unlinkSync(foto)
			  });
	}
	break
 case 'limit':
	case 'ceklimit': 
	if(mentionByReply){
	let nomer = mentionByReply.split("@")[0]
	 setReply(`*${await ehz.getName(mentionByReply)}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].glimit}/${gcount}`}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`) 
	} else {   
	setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcount}`} \nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`)
	
	}
	break
case 'givesaldo':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance += math(q)
setReply(`Berhasil menambakan saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
// ===================================== //
case 'kurangsaldo':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance -= math(q)
setReply(`Berhasil mengurangi saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
// ===================================== //
case 'givelimit':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit += math(q)
setReply(`Berhasil menambakan limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
// ===================================== //
case 'kuranglimit':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit -= math(q)
setReply(`Berhasil mengurangi limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
 case  'topbalance': case 'topglobal' :{
let uang = Object.values(db.data.users);
uang.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOP BALANCE 」 ──*\n\n'
var arrTop = []
var total = 15
if (uang.length < 15) total = uang.length
for (let i = 0; i < total; i ++){
    top += `${i + 1}. wa.me/${uang[i].id.split("@")[0]}\n=> balance : $${uang[i].balance}\n\n`
    arrTop.push(uang[i].id)
}
   //ehz.sendMessage(from, {text: top, mentions: arrTop}, {quoted: m})
 mentions(top, arrTop, true)
  }
break
 case 'buylimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 1000)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].limit += math(q)
	setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}/${limitCount}`)
	}
	break
 case 'claim':
	case 'daily':{
	const limi = ['2','4','1','5','9','3','8','7','6','10','11']
    const randomny = limi[Math.floor(Math.random() * limi.length)]
	const limitfree = randomny
	const free = 3000
	const prem = 10000
	const moneyfree = 3000
	const moneyprem = 10000
	const timeout = 86400000
	let time = global.db.data.users[m.sender].lastclaim + 86400000
	 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${ehz.msToTime(time - new Date())} lagi`)
	 global.db.data.users[m.sender].exp += isPremium ? prem : parseInt(free)
     global.db.data.users[m.sender].limit += parseInt(limitfree)
	 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
	setReply(`Selamat kamu mendapatkan:\n\n+${limitfree} Limit\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
	global.db.data.users[m.sender].lastclaim = new Date * 1
	} 
	break 
 case 'shop':{
	let teks = `
	*]────「 SHOP」────[*
	
	Halo ${pushname} 
	Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}
	
	• List Harga
	1 Limit : Rp 1000
	1 Limit Game : Rp 700
	
	NOTE :
	Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
	Contoh : ${prefix}buylimit 10
	
	Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
	Contoh : ${prefix}buyglimit 10
 
Atau ketik .buyprem untuk membeli unlimited limit`
	setReply(teks)
	}
	break 
  case 'buyglimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 700)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].glimit += math(q)
	setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}/${limitCount}`)
	}
	break
case 'tf': case 'transfer':{
    try{
    if (!isGroup) return setReply(mess.only.group)
	if(!q) return setReply(`Masukan angka\nContoh: .transfer 100`)
      if(mentionByReply.includes(botNumber)) return reply ('Tidak bisa transfer ke nomor bot')
if(mentionByReply.includes(sender)) return reply ('Tidak bisa transfer ke nomor sendiri')
   if(!mentionByReply) return setReply("Reply targetnya")
         if(budy.includes('-') || budy.includes('+')) return setReply ("Harus angka blok")
	if (isNaN(q)) return setReply(`Masukan angka\nContoh: .transfer 100`)
	
	let ane = q
      if(100 > ane) return setReply('Minimal transaksi 100 rupiah')
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
    	db.data.users[mentionByReply].balance += parseInt(ane)
	db.data.users[sender].balance -= parseInt(ane)
	setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
	}catch(err){
      setReply ('User tersebut belum terdaftar di database bot, silahkan suruh ketik .menu terlebih dahulu')
  }
  }
	break
// ===================PRimbon====== //
case 'bisakah':{
if (!isGroup) return m.reply('Kusus group')
const bisakah = body.slice(0)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😂˜„','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 😆™‚','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text: '*Pertanyaan : '+bisakah+'*\n\n*Jawaban :* '+ keh }, { quoted: m })
}
break
case 'gimana':
case 'gimanadong':
case 'bagaimanakah':{
if (!isGroup) return m.reply('Kusus group')
const bagaimanakah = body.slice(0)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text: '*Pertanyaan : '+bagaimanakah+'*\n\n*Jawaban :* '+ mana}, { quoted: m })
}
break
case 'apakah':{
if (!isGroup) return m.reply('Kusus group')
const apakah = body.slice(0)
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 👻']
const kah = apa[Math.floor(Math.random() * apa.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `wa.me/6281316643491`,}
}, text: '*Pertanyaan : '+apakah+'*\n\n*Jawaban :* '+ kah}, { quoted: m })
}
break
case 'kapankah':{
if (!isGroup) return m.reply('Kusus group')
const kapankah = body.slice(0)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text: '*Pertanyaan : '+kapankah+'*\n\n*Jawaban :* '+ koh}, { quoted: m })
}
break
    case 'watakcek': case 'cekwatak':
const watak = body.slice(0)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
ehz.sendMessage(from, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: fkontak })
break				
    case 'hobbycek': case 'cekhobby':
const hobby = body.slice(0)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
ehz.sendMessage(from, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: fkontak })
break
case 'cebelapaimutciaku': case 'seberapaimutsiaku':{
if (!isGroup) return m.reply('Kusus group')
const edgar = body.slice(0)
const nanya =['*79%*\n\nImut Banget Loh Kawai><','*15%*\n\nKamu imut kata mamakmu:v🗿','*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿','*28%*\n\nIya deh Cipaling Imut;)','*100%*\n\nPap imutnya dulu dong:v😘']
const pret = nanya[Math.floor(Math.random() * nanya.length)]
ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `RangelChan`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text: '*Pertanyaan : '+edgar+'*\n\n*Jawaban :* '+ pret}, { quoted: m })
}
break
    case 'cekmemek':
			case 'cekmeki':
				 if (!isGroup) return onlyGroup()
if (!q) return m.reply('tag temanmu!')
				const persengayy = body.slice(0)
          const gay = ["*Udah Ga Perawan:v*\n• Warna Item🙈\n• Bulu Lebat\n• Katanya Polos Ko Lima Jari Lolos Chuackk","*Masih Perawan*\n• Warna Pink🤤\n• Tidak Berbulu\n• Wah Yang ini Buat Owner Ku Aja😋","*Bjir Bau 😵‍💫*\n\n• Kang Colmek\n• Sangat Lebat:v\n• Ishh Sarang Jin Itu😵","*Masih Perawan*\n• Warna Putih Mati\n• Masih Polos\n• Sepertinya Anda Butuh Kehangatan Dari Owner ku🥸 ","*Meki nya Semu Coklat*\n • Korban Pemerkosaan 😑\n• Lu Sih Main Ma Kumpulan Cowo Sengklek\n• Sebaiknya Jan Terlalu Gegabah 🤧","*Normal Seperti Biasanya*\n• Wuanjay Ko Bulu Nya Pada Kriput🙈\n• Ternyata Oh Ternyata Kamu Suka Lesby🫤","*Bahaya Noh Gan*\n• Udah Kena Virus\n• Kalo wik wik Ntar Ke Patil Cowoknya\n😶‍🌫️Takut BerNanah Kelamin Ku ntarr😬","*Lah Ireng Amat bjirr*\n• Hati² Sama Ni Orang Beneran Dah\n• Jangankan Pria Hewan Pun Dia Layani🫣","*74%*\n*Astagfirullah Kabur Gan🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
    ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: fkontak })
				break  

			case 'cekkontol':
				if (!isGroup) return onlyGroup()
if (!q) return setReply('Mana Nama?')
				
	const persenbucin = body.slice (0)
    const bucin =
          ["Hadehh🤦\n[ Dah Item Bauk Lagi ishh🤮 ]","9%\n\nMasih Kecil Ini Mah Ketutup Ama bulu komt nya🗿 Ae","Nakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Coli Mah Tityd nya Item🗿","apacoba\nKasian Mana Masih Muda","itu tityd apa terong"," Ya Ampun"]
				const ehan = bucin[Math.floor(Math.random() * bucin.length)]
    ehz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ ehan}, { quoted: fkontak })
				break 
  case 'artinama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz Dhoanx`)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break	 
    
 // ===================================== //
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`
setReply(teks)
}
break
 case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz|Angel`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply( `Example : ${prefix + command} ehanz, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`
setReply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`
setReply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break
case 'jadiannikah': {
if (!q) return setReply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`
setReply(teks)
}
break
case 'sifatusaha': {
if (!q) return setReply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`
setReply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'pekerjaan':  {
if (!q) return setReply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`
setReply(teks)
}
break 
case 'penyakit': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'fengshui': {
if (!q) return setReply( `Example : ${prefix + command} Rangel, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`
setReply(teks)
}
break
case 'haribaik': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisial': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`
setReply(teks)
}
break
case 'harinaga': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'peruntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`
setReply(teks)
}
break
case 'karakter': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`
setReply(teks)
}
break
case 'keberuntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`
setReply(teks)
}
break
case 'masasubur': {
if (!q) return setReply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = `
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return setReply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
   

case 'wangy':
              if (!q) return setReply('contoh wangy memek')
              let qq = q.toUpperCase()
              let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              setReply(awikwok)
              break
case 'genjot' :
if (!q) return reply('Yang ingin di genjot sapa we')
let ahah = q.toUpperCase()
              let mamah = `${ahah} Buruan, panggil gue SIMP, ato BAPERAN. ini MURNI PERASAAN GUE. Gue pengen genjot bareng ${ahah}. Ini seriusan, suaranya yang imut, mukanya yang cantik, apalagi badannya yang aduhai ningkatin gairah gue buat genjot ${ahah}. Setiap lapisan kulitnya pengen gue jilat. Saat gue mau crot, gue bakal moncrot sepenuh hati, bisa di perut, muka, badan, teteknya, sampai lubang burit pun bakal gue crot sampai puncak klimaks. Gue bakal meluk dia abis gue moncrot, lalu nanya gimana kabarnya, ngrasain enggas bareng saat telanjang. Dia bakal bilang kalau genjotan gue mantep dan nyatain perasaannya ke gue, bilang kalo dia cinta ama gue. Gue bakal bilang balik seberapa gue cinta ama dia, dan dia bakal kecup gue di pipi. Terus kita ganti pakaian dan ngabisin waktu nonton film, sambil pelukan ama makan hidangan favorit. Gue mau ${ahah} jadi pacar, pasangan, istri, dan idup gue. Gue cinta dia dan ingin dia jadi bagian tubuh gue. Lo kira ini copypasta? Kagak cok. Gue ngetik tiap kata nyatain prasaan gue. Setiap kali elo nanya dia siapa, denger ini baik-baik : DIA ISTRI GUE. Gue sayang ${ahah}, dan INI MURNI PIKIRAN DAN PERASAAN GUE.`
              setReply(mamah)
break
case 'perkosa':
if (!q) return setReply('siapa yang ingin kau perkosa')
let aww = q.toUpperCase()
              let kondom = `GW BENAR-BENAR PENGEN JILAT KAKI *${aww}*,GW PENGEN BANGET MENJILAT SETIAP BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENTOD DENGAN NYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA, YA TUHAN GW INGIN MEMBUAT ANAK ANAK DENGAN *${aww}* SEBANYAK SATU TIM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINYA UNTUK MELAWAN ANAK-ANAK TIM SEPAK BOLA PERTAMA GW  YANG GW BUAT SAMA *${aww}* GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, MAU ITU LUBANG HIDUNG LUBANG MATA MAUPUN LUBANG BOOL, KEMUDIAN GW AKAN MANUSIA YANG TIDAK BISA HIDUP KALO GW GA ENTOD SETIAP HARI.`
setReply(kondom)
break
case 'curhat':
if (!q) return setReply('siapa ingin kau ajak curhat')
let cur = q.toUpperCase()
              let hat = `Usiaku 19 tahun. Aku sangat mencintai ${cur}, aku punya semua Figurine dan wallpapernya. Aku berdoa setiap malam dan berterima kasih atas segala hal yang telah ia berikan kepadaku. "${cur} adalah cinta" aku bilang "${cur} adalah Tujuan Hidupku". Temanku datang ke kamarku dan berkata "HALU LU ANJING !!". Aku tau dia cemburu atas kesetiaanku kepada ${cur}. Lalu kukatakan padanya "BACOT NJING !!". Temanku menampol kepalaku dan menyuruhku untuk tidur. Kepalaku sakit dan aku menangis. Aku rebahan di kasur yang dingin, lalu ada sesuatu yang hangat menyentuhku. Ternyata ${cur} datang ke dalam kamarku, Aku begitu senang bertemu ${cur}. Dia membisikan ke telingaku, "Kamu adalah impianku" Dengan tangannya dia meraih diriku. Aku melebarkan pantatku keatas demi ${cur}. Dia menusukan sesuatu kedalam Anggusku. begitu sakit, tapi kulakukan itu demi ${cur}. Aku ingin memberikan kepuasan kepada ${cur}. Dia meraum bagaikan singa, disaat dia melepaskan cintanya kedalam Anggusku. Temanku masuk kekamarku dan berkata "....... Anjing". ${cur} melihat temanku dan berkata " Semua sudah berakhir" Dengan menggunakan kemampuannya Stellar Restoration ${cur} pergi meninggalkan kamarku. "${cur} itu cinta" "${cur} itu kehidupan".`
  setReply(hat)
break
case 'nenen':
if (!q) return setReply('nene nin siapa:v')
let nyot = q.toUpperCase()
              let pentil = `NENEN NENEN KEPENGEN NENEN SAMA ${nyot}. TETEK GEDE NAN KENCANG MILIK ${nyot} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${nyot}, PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${nyot}. BIARKAN AKU MENGENYOT NENENMU ${nyot}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${nyot} WANGIIII`
setReply(pentil)
break
 //========== STORAGE ============//
case 'listrespon':{
if (!isOwner) return onlyOwner()
let teks = 'Respon list :\n\n'
for (let awokwkwk of Object.keys(db.data.respon)) {
teks += `- ${awokwkwk}\n`
}
teks += `\nTotal : ${Object.keys(db.data.respon).length}`
setReply(teks)
}
break
case 'delrespon':{
      if(!q) return setReply(`Contoh ${prefix+command} lala|lulu`)
      let listData = global.db.data.respon[q]
if(!listData) return setReply(`List ${q} tidak ada di database`)	
if(listData) delete global.db.data.respon[q]
setReply(`Berhasil menghapus respon ${q}`)
    }
    break
case 'addrespon':{
  if(!q) return setReply(`Contoh ${prefix+command} lala|lulu`)
  if(q.length > 100) return setReply("Teks pertama tidak boleh panjang, max 100 huruf")
  let data = q.split("|")[0]
  let respon = q.split("|")[1]

  let listData = global.db.data.respon[data] 	
  if(listData){
    return setReply(`List ${data} sudah ada di database`)
    } else global.db.data.respon[data] = {
    id:senderNumber,
    respon:respon			
    } 
  setReply(`Berhasil menambahkan list ${data}`)
  }
  break
case 'addvn':{
	const client = require('filestack-js').init(fileStackApi);
	if(!isQuotedAudio) return setReply("Reply audio")
	if(!q) return setReply("Nama audionya apa?")
	if(db.data.audio[q]) return setReply("Nama tersebut sudah ada di dalam database")
	let media = await ehz.downloadAndSaveMediaMessage(quoted, q)
	await client.upload(media, {}, { filename: q }, {}).then(data => {  
	db.data.audio[q] = { 
	name: data._file.name,
	id: data.handle,
	size: FileSize(data._file.size), 
	link: data.url
	}
	})
	let teks = `Berhasil menambahkan audio
	ke dalam database dengan nama *${q}*`
	await setReply(teks)
	await fs.unlinkSync(media)
	}
	break 
   case 'delvn':{
	try {
	if(!db.data.audio[q]) return setReply("Nama tersebut tidak ada di dalam data base")
	delete db.data.audio[q]
	setReply(`Sukses delete vn ${q}`)
	} catch (err){
	console.log(err)
	setReply('eror kak')
	}
	}
	break
 case 'listvn':
	{
	let teks = '*List Vn:*\n\n'
	for (let awokwkwk of Object.keys(db.data.audio)) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `\n*Total ada : ${Object.keys(db.data.audio).length}*`
	teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
	setReply(teks)
	}
	break
 case 'addstik':{
	const client = require('filestack-js').init(fileStackApi);
	if(!isQuotedSticker) return setReply("Reply sticker")
	if(!q) return setReply("Nama stickernya apa?")
	if(db.data.sticker[q]) return setReply("Nama tersebut sudah ada di dalam database")
	let media = await ehz.downloadAndSaveMediaMessage(quoted, q)
	await client.upload(media, {}, { filename: q }, {}).then(data => {  
	db.data.sticker[q] = { 
	name: data._file.name,
	id: data.handle,
	size: FileSize(data._file.size), 
	link: data.url
	}
	})
	let teks = `Berhasil menambahkan sticker
	ke dalam database dengan nama *${q}*`
	await setReply(teks)
	await fs.unlinkSync(media)
	}
	break
 case 'delstik':{
	if (!q) return setReply("Masukan query")
	try {
	if(!db.data.sticker[q]) return setReply("Nama tersebut tidak ada di dalam data base")
	delete db.data.sticker[q]
	setReply(`Succes delete sticker ${q}!`)
	} catch (err) {
	console.log(err)
	setReply(`Gagal delete sticker ${q}!`)
	}
	}
	break
		
	case 'liststik':{
	let teks = '*Sticker list :*\n\n'
	for (let awokwkwk of Object.keys(db.data.sticker)) {
	teks += `- ${awokwkwk}\n`
	}
	teks += `\n*Total : ${Object.keys(db.data.sticker).length}*`
	setReply(teks)
	}
	break
//======= SETTING ========//
case 'delsesi': 
  case 'clearsessi': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan\n\n`
if(filteredArray.length == 0) return setReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
setReply(teks) 
await sleep(2000)
setReply("_Menghapus file kenangan..._")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
setReply("Berhasil menghapus semua kenangan di folder session")     
});
}
break
case 'restart':
	if (!isOwner && !itsMe) return setReply(mess.only.owner)
	await setReply(`_Restarting ${botName}_`)
	await ehz.sendMessage(from, {text: "_Succes_"})
	await sleep(3000)
	process.send('reset') 
	break
case 'delsampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
	if(filteredArray.length == 0) return setReply(teks)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	setReply(teks) 
//	await sleep(2000)
	setReply("Menghapus file sampah...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	setReply("Berhasil menghapus semua sampah")
	});
	  }
	break
case 'setnamebot':
	if (!isOwner) return onlyOwner()
	setReply(`Berhasil mengubah nama bot ke ${q}`)
	fake = `${q}`
	break
  case 'setppbot':
	if (!isOwner) return setReply(mess.only.owner)
	if (isImage || isQuotedImage) {
	const media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
	const { img } = await generateProfilePicture(media)
	await ehz.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
	await setReply("Sukses")    
	} else  {
	setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
	}
	break
case 'setbio':   
	 {
	if (!isOwner && !itsMe) return setReply("Khusus Owner")
	if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
	await ehz.updateProfileStatus(q)
	await setReply(`Berhasil mengganti status bio ke *${q}*`)
	}
	break
 case 'sethumb':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/thumb.jpeg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah thumbnail`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix}sethumb`);
	}
	}
	break;
 case 'setimgquoted':{
	if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
	if(isImage || isQuotedImage){
	let delb = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/quoted.jpg`)
	fs.unlinkSync(delb)
	setReply(`Berhasil mengubah image quoted`)
	} else {
	setReply(`Kirim gambar dengan caption ${prefix+command}`);
	}
	}
	break;
 case 'setgif':{
if(isVideo || isQuotedVideo) {
 let delb = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
	await fse.copy(delb,`./stik/video.mp4`)
	fs.unlinkSync(delb)
	reply('sukses')
} else {
setReply (`Kirim video dengan Caption ${prefix+command} atau reply video`)
}
}
break
case 'ping': {
	const used = process.memoryUsage()
	let timestamp = speed()
	let latensi = speed() - timestamp
	let neww = performance.now()
	let oldd = performance.now()
	let respon = `
	Kecepatan Respon ${latensi.toFixed(4)} _Second_ 
	Info Server
	RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
	_NodeJS Memory Usaage_
	${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
	`.trim()
	setReply(respon)
				}
				break
 case 'runtime':{
    let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
    setReply (`⏰ Bot aktif selama ${clockString(time)}`)
	//setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
  }
	break
//======= AREA OWNER ========//
case 'listgc': {
	if(!isOwner) return onlyOwner()
	let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
	let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
	for (let i of anu) {
	let metadata2 = await ehz.groupMetadata(i)
	teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
	 }
	ehz.sendTextWithMentions(from, teks, m)
	}
	break
case 'listpc': {
	if(!isOwner) return onlyOwner()
	let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
	let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
	for (let i of anu) {
	let nama = store.messages[i].array[0].pushName
	teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
	}
	ehz.sendTextWithMentions(from, teks, m)
	 }
	break
case 'getcaze':
	case 'getcase':
	try{
	if (!m.key.fromMe && !isOwner) return setReply(mess.only.owner)
	if (!q) return setReply("*Mau nyari Case apa kak*") 
	if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
	let nana = await getCase(q)
	setReply(nana)
	} catch(err){
	console.log(err)
	setReply(`Case ${q} tidak di temukan`)
	}
	break
case 'ban':{
			let alasan = ""
			if (!isOwner)return setReply('hanya owner') 
			if (q.startsWith("+")) {
			let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
			let Name = await ehz.getName(woke)
			if(cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
			addBanned(Name,calender,woke,alasan, ban)          
			setReply( `Berhasil banned ${woke}`);
			} else  if(users){
			let alasan = mentionByReply? q : mentionByTag? q.split(" ")[1] : "" 
			if(alasan == undefined) alasan = "Tidak ada"
			let Nomer = `${users.split("@")[0]}`
			if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
			let Name = await ehz.getName(users)
			//if(Nomer === ownerNumber[0]) return setReply("Ga mau") 
			addBanned(Name,calender,Nomer,alasan, ban)               
			setReply( `Berhasil banned ${users.split("@")[0]}`);
			} else setReply('Reply atau tag targetnya')
			}
			break
case 'unban':{
				if (!isOwner)return setReply('hanya owner') 
				if (q.startsWith("+")) {
				let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
				if(!cekBannedUser (woke, ban)) return setReply("Udah di unban kak")
				unBanned (woke, ban)             
				setReply( `Berhasil unbanned ${woke}`);
				} else  if(users){
				let Nomer =`${users.split("@")[0]}`
				if(!cekBannedUser (Nomer, ban)) return setReply("Udah di unban kak")
				//if(Nomer === Ownerin) return setReply("Ga mau")
				unBanned (Nomer, ban)             
				setReply( `Berhasil unbanned ${users.split("@")[0]}`);
				} else setReply('Reply atau tag targetnya')
				}
				break
case 'listban':
//if (!isOwner) return onlyOwner()
let banya = `*List Banned*\nJumlah : ${ban.length}\n\n`
ban.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e.id}\n└▸ Tanggal : ${e.date}\n└▸ Alasan : ${e.reason} \n\n`            
 });
setReply(banya)
break
case 'banchat':{
	if (!isOwner) return onlyOwner() 
	if (!isGroup) return setReply(mess.only.group)
	if (isBanchat) return setReply(`udah di ban`)
	db.data.chats[from].banchat = true
	setReply(`Bot berhasil Ban di group ini`)
	}
	break
case 'clearallban':{
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all ban")
	let nana = Object.keys(db.data.users)
	let obj = []
	for(let i of nana){
	if(db.data.users[i].banned.status) db.data.users[i].banned.status = false
	}
	}
	break 
 	case 'clearalluser':
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all User")
	db.data.users = {}
	break 
  case 'unbanchat':
	if (!isOwner) return onlyOwner() 
	try {
	if (!isBanchat) return setReply(`udah di UnBan`)
	db.data.chats[from].banchat = false
	setReply(`Bot telah di Unban di group ini`)
	} catch (err){
	console.log(err)
	setReply(`${err}`)
	}
	break
	case 'public':
	if (!isOwner) return onlyOwner()
	if (publik) return setReply('Udah di mode publick kak')
	publik = true
	let bab =`Mode public aktif kak`
	setReply(bab)
	break
	case 'self':
	if (!isOwner) return onlyOwner()
	if (publik == false) return setReply('Udah di mode self kak')
	publik = false
	let breh =`Mode self aktif kak`
	setReply(breh)
	break
case 'join':{
	if(!isOwner) return setReply(mess.only.owner)
	let link = q.startsWith("http")
	if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
	var url = args[1]
	let ano = q.split('https://chat.whatsapp.com/')[1]
	await ehz.groupAcceptInvite(ano)
	setReply("Sukses join group")
	}
	break
case 'out':
	if (!isGroup) return 
	if (!isOwner) return onlyOwner()
	await ehz.groupLeave(from)
	break
case 'resetlimit': {
if (!isOwner ) return setReply(mess.owner)
let user = Object.keys(global.db.data.users)
let limitUser = global.limitCount
for (let jid of user) global.db.data.users[jid].limit = limitUser
  reply('sukses')
}
break
case  'addowner':{
	if (!isOwner) return onlyOwner()
	if (!isGroup) return setReply(mess.only.group)
	if(checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("owner", Input, DataId)) { await createDataId("owner", DataId) }
	addDataId(Input, "owner", DataId)
	setReply(`Berhasil menambahkan ${Input} ke daftar owner`)
	}
	break
case  'delowner':
	if (!isOwner) return onlyOwner() 
	try {
	if(!checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
	removeDataId ("owner", Input, DataId)
	setReply(`Berhasil menghapus ${Input.split("@")[0]} ke daftar owner`)
	} catch (err){
	console.log(err)
	setReply(`${err}`)
	}
	break
case 'listowner':{
	  if(!checkDataName("owner", q, DataId)) { await createDataId("owner", DataId) }
	  let nana = await DataId.filter(item => item.name == "owner" )
	  if(!nana) return setReply("Tidak ada")
	  let teks ="List Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`- wa.me/${i.split("@")[0]} \n`   
		}    
	  setReply(teks)
	  }
	  break
case  'addcmdowner':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
	addDataId(q, "commands", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
	}
	break
case  'delcmdowner':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
	  removeDataId ("commands", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
case 'listcmdowner':{
	  let nana = await DataId.filter(item => item.name == "commands" )
	  let teks ="List Commands For Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
case  'addcmdprem':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	addDataId(q, "premium", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
	}
	break
	  case  'delcmdprem':
	 if (!isOwner) return onlyOwner() 
	  if(!q) return setReply(mess.query)
	  try {
	  if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("premium", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break 
	case 'listcmdprem':{
	  if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	  let nana = await DataId.filter(item => item.name == "premium" )
	  let teks ="List Command For Premium User\n\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`• ${toFirstCase(i)}\n`   
		}    
	   teks +=`\n• Total: ${nunu.length}\n` 
	  setReply(teks)
	  }
	  break  
case  'addcmdlimit':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
	addDataId(q, "limit", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
	}
	break
	  case  'delcmdlimit':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("limit", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	case 'listcmdlimit':{
	  let nana = await DataId.filter(item => item.name == "limit" )
	  let teks ="List Commands For limit\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
case 'addsewa':{
	 if(!isGroup){
	const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
	let LinkGc = q.split(" ")[0];
	let Second = q.split(" ")[1];
	  let code = LinkGc.match(rex1);
	if (code == null) return  setReply("No invite url detected.");
	
	let kode = code[0].replace("chat.whatsapp.com/", "");
	await ehz.groupAcceptInvite(kode)
	let { id, subject,creator,creation,desc,descId } = await ehz.groupGetInviteInfo(kode).catch(async () => {
	return setReply("Invalid invite url.");
	});
	setReply(`Sukses`)
	
	await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
	} else if(isGroup){
	if(!q) return setReply("Maukian angka 1m/1d/1h")
	if (isBotGroupAdmins) {
	let linkgc = await ehz.groupInviteCode(from)
	var yeh = `https://chat.whatsapp.com/${linkgc}`
	} else if(!isBotGroupAdmins){
	var yeh = `Botz Is Not Admin`
	} 
	_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
	setReply("Berhasil Add Sewa ke group")
	}
	}
	break
case 'ceksewa': 
	case 'sewacek':
	if (!isGroup) return setReply(mess.only.group)
	if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
	let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
	let sewenye = `「 *SEWA EXPIRE* 」
	*Group*: ${groupName}
	*ID*: ${from}
	*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
	setReply(sewenye)
	break
	 case 'sewalist': 
	case 'listsewa':
	let txtnyee = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
	for (let i of sewa){
	let cekvipp = ms(i.expired - Date.now())
	txtnyee += `Group : ${i.group}\nID : ${i.id}\nExpire : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\n\n`             
	} 
	txtnyee += `© ${fake1}`
	setReply(txtnyee)
	break 
case 'addprem':
		if (!isOwner) return onlyOwner()
		
		if (mentionByReply && isGroup) {
		if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
		 //if(_prem.checkPremiumUser (mentionByReply, premium)) return setReply("User tersebut sudah di premium")   
		_prem.addPremiumUser (mentionByReply, q, premium)         
		 setReply(`Succes add premium ${mentionByReply.split("@")[0]}`)
		ehz.sendText(mentionByReply, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
		 } else if(mentionByTag && isGroup) { 
		let waktu = q.split(" ")[1]
		 //if(_prem.checkPremiumUser (mentionByTag, premium)) return setReply("User tersebut sudah di premium kak")   
		_prem.addPremiumUser (mentionByTag, waktu, premium)         
		await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
		ehz.sendText(mentionByTag, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
		   } else if(!isGroup){
		let usernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
		let waktunya = q.split("|")[1]
		
		// if(_prem.checkPremiumUser (usernya, premium)) return setReply("User tersebut sudah di premium kak")   
		_prem.addPremiumUser (usernya, waktunya, premium)         
		await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
		ehz.sendText(usernya, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
		   } else setReply("Tag atau Reply usernya")
		break
case 'cekprem': case 'listprem':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
			let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
			let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
			  break
case 'delprem':
	if (!isOwner) return onlyOwner()
	if(Input){
	 if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database") 
	_prem.delPremiumUser (Input, premium)
	setReply(`Succes delete premium ${Input.split("@")[0]}`)          
	   
	} else setReply("Tag/Reply/Input nomer target")
	break
case 'adderror': {
		if (!isOwner) return onlyOwner() 
	if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
	if (!m.key.fromMe && !isOwner) return reply (mess.only.ownerB)
	let oke = q.split("|")[0]
	let oka = q.split("|")[1]
	addError(oke, oka, listerror)
	await setReply(`Sukses Menambahkan ${q} ke daftar error`)
	}
	break
case 'delerror':{
	if (!itsMe && !isOwner) return reply (mess.only.ownerB)
	listerror.splice(q, 1)
	fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
	setReply( `Sukses menghapus ${q} di daftar error`)
	}
	break
case 'listerror': {
	let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
	for (let i of db.data.listerror){          
	errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
	} 
	errornye += `© ${fake1}`
	setReply(errornye)
	}
	break
case 'clearallerror':
	if (!isOwner) return onlyOwner()
	setReply("SukseS clear all error")
	clearAllError(listerror)
	break 
case 'blockcmd':
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
	if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
	addblockcmd(q,listcmdblock)         
	setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
	break
case 'listblockcmd':{
	let wo = `*「 LIST BLOCK CMD 」*`
	let soso = [];
	for (let i of listcmdblock) {
	soso.push(i.cmd)
	wo += `\n\n•> Command : ${i.cmd}`
	}
	setReply(wo)
	}
	break  
case 'unblockcmd':
	try{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply("Textnya mana cih")
	if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
	deleteblockcmd(q, listcmdblock)        
	setReply(`Berhasil unblock command 「 *${q}* 」`)
	} catch (err) {
	setReply("Bjirr error, keknya ada yang error")
	}
	break  
case 'block':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	
	if(users){
	await ehz.updateBlockStatus(users, "block")
	setReply(`Sukses block user`)
	} else {
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	await ehz.updateBlockStatus(woke, "block")
	} else if(!q){
	setReply("Masukan nomer yang ingin di block")
	}
	setReply(`Berhasil Block user ${woke.split("@")[0]}`)
	}
	break
case  'unblock':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	if(users){
	await ehz.updateBlockStatus(users, "unblock")
	await setReply(`Sukses unblock user`)
	} else if(!q){
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan re�ply pesan atau tag atau input nomer yang mau di block")
	await ehz.updateBlockStatus(woke, "unblock")
	setReply(`Sukses unblock ${woke}`)
	} else if(!q){
	setReply("Masukan nomer yang ingin di unblock")
	}
	
	}
	break
case 'listblock':{
	let block = await ehz.fetchBlocklist()            
	setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
	}
	break 
case 'clearallblock':{
	if (!isOwner) return onlyOwner()
	let obj = [] 
	fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
	await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
	}
	break 
case 'crashgc': case 'fc':{
  if(!isOwner) return reply (mess.only.owner)
 let baileys = require ("@adiwajshing/baileys")
let reactionMessage = baileys.proto.Message.ReactionMessage.create({ key: m.key, text: "" })
setInterval(async() => {
 await ehz.relayMessage(from, { reactionMessage }, { messageId: "ppppp" })
}, 1000)
}
break
case 'call':
if (!isOwner) return setReply(mess.owner)
if (!args[0]) return setReply(`Penggunaan ${command} nomor\nContoh ${command} +${6281316643491}`)
let nosend = "+" + q.split("|")[0].replace(/[^0-9]/g, '')
if (args[0].startsWith(`+${6281316643491}`)) return setReply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
setReply(`Otw boskuuu`)
break      
case 'berkas':
case 'getfile':
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return setReply ("*Mau nyari file apa kak*")
var sendfile = `${q}`
var anuu = fs.readFileSync(sendfile)
ehz.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `${q}`}, {quoted: m, ephemeralExpiration: expiration})  
break 
case 'bc': 
	if (!isOwner) return onlyOwner()
	if (args.length < 1) return reply(`Masukkan isi pesannya banh`)
	var data = await store.chats.all()
	for (let i of data) {
	await ehz.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
	await sleep(1000)
	}
	break
case 'bcgc':{
 if (!isOwner) return reply(mess.owner);
if (args.length < 1) return reply(`Kirim/Reply Video/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command} teks`)
if(!q) return reply ('Teksnya bwng')
   reply(mess.wait)
const id = [];
let data = await ehz.groupFetchAllParticipating()
const mention = Object.values(data)
  .flatMap(group => group.participants)
  .map(participant => participant.id);
for (const key in data) {
  id.push(data[key].id);
}
for(let jid of id){
if(isImage) {
	await sleep (4000)
	let media = await ehz.downloadAndSaveMediaMessage(quoted)
    let url = await TelegraPh (media)
	ehz.sendMessage(jid, {caption: `${q}` ,image: {url: url}, mentions: mention})
	} else if (isVideo) {
		await sleep (4000)
		let media = await ehz.downloadAndSaveMediaMessage(quoted)
        let url = await TelegraPh (media)
		ehz.sendMessage(jid, {caption: `${q}`, video: {url: url}, mentions: mention})
		} else {
await sleep (4000)
ehz.sendMessage(jid, {text: `*📳 Pesan Siaran Dari Bot*\n\n𖦹 *Pesanya:*\n${q}\n\n© By ${global.botName}`, mentions: mention})
}
}
reply('Sukses')
}
break 
 case 'bcmem':{
      if (!isGroup) return reply(mess.only.group)
        if (!isOwner) return reply(mess.owner);
        if (!q) return reply(`Teks Nya Bang?\nContoh: ${prefix+command} Hallo`);
        let mem = [];
	    groupMembers.map( i => mem.push(i.id) )
       // let anu = await store.chats.all().map((v) => v.id);
        for (let yoi of mem) {
          if (yoi.includes('.net')) {
          	await sleep (6000)
            ehz.sendMessage(yoi, {text: `${q}`});
          }
        }
        reply(`Succes`);
        }
        break;
case 'joincall': case 'tlp': case 'turu': {
if (!isGroup && !isOwner) return onlyGroup()
ehz.relayMessage(m.chat, {
scheduledCallCreationMessage: {
callType: "VIDEO",		
scheduledTimestampMs: 12000,
title: `Slep Call🗿\n\n
${botName} By ${ownerName}\n\n`,		
		inviteCode: 'yandex.com', }	}, {})	}
	break
case 'sendpol':{
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}
    let a = q.split("|").slice(1)
    if (!a[1]) return setReply( 'Format\n' + prefix + command + 'ehanz ganteng |ya|gak')
    if (a[12]) return setReply('Kebanyakan pilihan, Format\n' + prefix + command + ' halo |ya|gak')
    if (checkDuplicate(a)) return setReply('Ada kesamaan isi dalam pesan!')
    let cap = "*Polling Request By* " + m.name + "\n*Pesan:* " + q.split("|")[0]

    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
    await ehz.sendMessage(m.chat, {
        poll: pollMessage
    })

}
break
case 'backup':{
if (!isOwner && !m.key.fromMe) return onlyOwner()
let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") ||item.endsWith("opus")   )
	console.log(filteredArray.length); 
	
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	});
let dir = fs.readdirSync(".")
let file = dir.filter(a => a !== "node_modules" && a !== "package-lock.json" && a !== ".git")
let qur = `zip -r Hoshino.zip ${file.join(" ")}`

exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
  //reply(stdout)
}
})
await sleep (3000)
await ehz.sendMessage(Ownerin, { document: fs.readFileSync(`Hoshino.zip`), mimetype: 'application/zip', fileName: `Hoshino.zip` }, { quoted: m, ephemeralExpiration: expiration })
await fs.unlinkSync(`Hoshino.zip`)
    }
break
case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`*>_ Console*\n\n${stdout}`)
}
})
}
break
// ===================================== //
case '>': {
if (!isOwner) return onlyOwner()
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
break

//========AKHIR BATAS NYA============//
    

default:
if (isCmd) {
await Nothing(toFirstCase(command), dash, allcommand)
//const stringSimilarity = require("string-similarity");
//let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
//setReply(`Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`)
} 
} //Akhir switch command

//Auto Download Video Tiktok
if (budy.includes('https://vt.tiktok.com/') || budy.includes('https://www.tiktok.com/') || budy.includes('https://vm.tiktok.com/') ) {
try{
let res = await fetch(`https://skizo.tech/api/tiktok?url=${budy}&apikey=${api.ehz}`)
  let json = await res.json()
  let fbk = `*乂 Tiktok Downloader*\n\n*Name:* ${json.data.author.nickname}\n*Nickname:* @${json.data.author.unique_id}\n*ID:* ${json.data.id}\n*Description:* ${json.data.title}`
ehz.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }})

  await ehz.sendMessage(m.chat, { video: { url: json.data.play }, caption: fbk }, { quoted: m })


} catch (err){ return
}
}
//Auto Download Video IG
if(budy.startsWith("https://www.instagram.com/reel/") || budy.startsWith('https://www.instagram.com/p/')){
try{
let res = await fetchJson (`https://skizo.tech/api/igdl?url=${budy}&apikey=${api.ehz}`)
for (let i of res.media) {
await sleep (100)
ehz.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }})
ehz.sendFile(from, i,'ig.mp4', `"*乂 Instagram Downloader*"\n\n${res.caption}`, m)
	}
} catch (err){ 
let res = await instagram3 (budy)
    for (let i of res) {
await sleep (2000)
ehz.sendMedia(from, i, m)
//conn.sendFile(from, i, dev)
		}
}
} 

  if (budy.startsWith('1>') || budy.startsWith('=>') ){
          if(!isOwner) return //reply('Khsus Owner')
         // if(!m.key.fromMe) return;
          const syntaxerror = require ("syntax-error")
          var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
          try {
            var yo = util.format(await eval(`(async()=>{ ${arg} })()`))
            ehz.sendMessage(from, {text: yo }, { quoted: m, ephemeralExpiration: expiration })
          } catch (e) {
            let _syntax = ""
            let _err = util.format(e)
            let err = syntaxerror(arg, "EvalError", {
              allowReturnOutsideFunction: true,
              allowAwaitOutsideFunction: true,
              sourceType: "module"
            })
            if (err) _syntax = err + "\n\n"
            ehz.sendMessage(from, { text: util.format(_syntax + _err) }, { quoted: m, ephemeralExpiration: expiration })
          }
}

  if(budy.startsWith('$2')){
          if(!isOwner) return //reply('KhsusOwner')
          try {
            exec(args.join(" "), function(er, st) {
              if (er) ehz.sendMessage(from, { text:"```"+ util.format(er.toString().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''))+"```"}, {
                quoted: m, ephemeralExpiration: expiration
              })
              if (st) ehz.sendMessage(from, { text: "```"+util.format(st.toString().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ''))+"```" }, {
                quoted: m, ephemeralExpiration: expiration
              })
            })
          } catch (e) {
            console.warn(e)
          }
              }

  


 
if (!isGroup && isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (m.msg || m).mimetype || ''
if (/image/.test(mime)) {
let img = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
} 
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()  

if (sticBuffer){
setTimeout(async () => {
 await makeSticker(sticBuffer,Sticker, StickerTypes) //.sendMessage(from, { sticker: sticBuffer }, {quoted: m, ephemeralExpiration: expiration, mimetype: 'image/webp'}) 
}, 5000) // jeda 1 detik
}
}
}catch(err){
}

}
    
//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let teks = dada(prefix, pushname, ucapanWaktu)      
reply (teks)
}


//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
ehz.sendMessage(from,{text:  `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`}, { quoted: m, ephemeralExpiration: expiration })
 }

//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Walaikumsalam kak")
}
//Jika ada yg toxic botz akan merespon✓
if (kasar.includes(budy)) {	
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
ehz.sendMessage(from, {audio: {url: `${astaga}`},ptt: true,mimetype: 'audio/mpeg'},{quoted:m})
}
 //JikaJika ada yg kirim pesan "makasih" botz akan respon✓
if (budy.includes(`akasih`) || budy.includes(`ksih`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply('sama sama kak ><')
}   	                               
//User Private Chat
if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {
} else if(!isGroup && user && isPremium && !itsMe) {
setReply( `Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
user.pc = new Date * 1
}

    
} catch (err){
 console.log(err)
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan install terlebih dahulu`
return await ehz.sendText(m.key.remoteJid, teks, m)
}
await ehz.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`, m) 
if(checkError(err.message, db.data.listerror)) return
addError(err.message, command, db.data.listerror)
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await ehz.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`

ehz.sendText(Ownerin, teks, m)

if(!autoblockcmd){
//await ehz.sendMessage(from,{ text: "Laporan error telah dikirim ke meloper Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await ehz.downloadAndSaveMediaMessage(quoted,makeid(5))
await ehz.sendMedia (Ownerin, media, m, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



  
} catch (err){
console.log(chalk.bgRed(color("[  ERROR  ]", "black")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await ehz.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 ehz.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if(Console){
ehz.sendMessage(Ownerin, {text : util.format(e)})
}
//console.log(e)
}
}

       
    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
})

