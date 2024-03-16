const version = require("@adiwajshing/baileys/package.json").version


global.language = "id"
global.nomerOwner = ["6288215204772"]
global.sig = "https://instagram.com/ehanzdhoanx"
global.email = "ehanzdhoanx@gmail.com"
global.runWith = "Panel"
global.botName = "© Zero™ - 着た вσт" 
global.ownerName = "ᴍᴀsᴛɪʀᴏ 𖣘" 
global.sessionName ="session"
global.setmenu ="location" 
global.docType = "docx"
global.public = true
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.prefa = "!"
global.fake = botName
global.Console = false
global.autorespon = false
global.copyright = `Bot WhatsApp`
global.baileysVersion = `Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Zero™ - 着た°᭄ᴮᵒᵗ`"
global.packName = "Zero™ - 着た вσт"
global.authorName = "Created By ᴍᴀsᴛɪʀᴏ 𖣘"
global.replyType = "mess"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = false 
global.Dana = '6281316643491'
global.gamewaktu = 600
global.limitCount = 300
global.Intervalmsg = 1000 //detik
global.sgc = 'https://chat.whatsapp.com/KdB6LAIqGY871MzP89om45'
global.syt = 'https://www.youtube.com/@ehanzdhoanx552'
global.nobg = ['jVW2tQEAj2Qo7RD2mjcv99QU','Z9XYXF8LgFeszUF3a6u5PKbJ', 'yFPL4CQFi38fAWVhVQczyrBg']
global.token = "13cc2eee-5315-4d84-b3c8-d5b05ce297c3"
global.fileStackApi = "AVKHbeyXsT0G9IKI01qenz"  
//Apikey kalo error daftar aje
global.api = {
ehz: 'always ehz', //skizo.tech
angel: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
global.gcounti = {
'prem' : 1000,
'user' : 20
} 
global.fotoRandom = [
    "https://telegra.ph/file/405689acc996c858c791a.jpg",
    "https://telegra.ph/file/a1cb2a23a2c8d6b445ea8.jpg",
    "https://telegra.ph/file/2aa63ec91863f32b2e03d.jpg",
    "https://telegra.ph/file/308d1959fb4527f52c0aa.jpg",
   
    ]

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






