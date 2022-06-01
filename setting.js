//═══════════════════════════════════════════════════════//
// ᴛʜɪs ʙᴏᴛ ᴄᴏᴅᴇʀ ᴏɴʟʏ ᴀʙᴜ
// ʏᴏᴜ ʀᴇ ᴇᴅɪᴛɪɴɢ ᴏʀ ᴄᴏᴘʏɪɴɢ
// ʏᴏᴜ ᴄʀᴇᴅɪᴛ ʀᴇᴍᴏᴠᴇ ʙᴜᴛ
// ᴊᴇsᴛ sᴜᴘᴘᴏʀᴛ ᴍᴇ
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['917025994178']
global.premium = ['917025994178']
global.ownernomer = '917025994178'
global.ownername = '𝙰𝙱𝚄 𝚆𝙰 𝙼𝙳'
global.botname = 'Abu-Md'
global.footer = 'jsl ABU.'
global.ig = 'https://github.com/Afx-Abu'
global.region = 'India, NorthEast, Mizoram'
global.sc = 'https://github.com/Afx-Abu/ABU-MD'
global.myweb = 'https://youtu.be/'
global.packname = 'ABU Bot'
global.author = 'JSL ABU'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ᴅᴏɴᴇ',
    admin: 'ᴛʜɪs ғᴇᴀᴛᴜʀsɪs ᴏɴʟʏ ғᴏʀ ᴀᴅᴍɪɴ !',
    botAdmin: 'ɢɪᴠᴇ ᴀᴅᴍɪɴ ʙᴏᴛ ᴍᴜsᴛ!',
    owner: 'ᴛʜɪs ᴏɴʟʏ ᴡᴏʀᴄᴋ ғᴏʀ ᴏᴡɴᴇʀ !',
    group: 'ᴛʜɪs ᴏɴʟʏ ᴡᴏʀᴄᴋ ғᴏʀ ɢʀᴏᴜᴘ !',
    private: 'ᴏɴʟʏ ᴘʀɪᴠɪᴛᴇ ᴜsᴇ !',
    bot: 'ᴛʜɪs ᴏɴʟʏ ᴡᴏʀᴄᴋ ғᴏʀ ʙᴏᴛ !',
    wait: 'ʟᴏᴀᴅɪɴɢ...',
    error: 'ɴᴏᴛ ᴠᴇʀғɪᴅᴇ ᴀᴘɪ ᴋᴇʏ !',
    endLimit: 'ʏᴏᴜʀ ᴅɪʟʏ ʟɪᴍɪᴛᴇ ʀᴇᴀᴄʜ',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.ownernomer = process.env.OWNER_NUMBER || '917025994178'
global.packname = process.env.PACKNAME ||'ᴀʙᴜ-ᴍᴅ'
global.author = process.env.AUTHOR ||'ᴊsʟ/ᴀʙᴜ'
global.botname = process.env.BOT_NAME ||'ᴊsʟ/ᴀʙᴜ'
global.myweb = process.env.INSTA_LINK ||'https://instagram.com/'
global.footer = process.env.FOOTER_CAPTION ||'ᴊsʟ/ᴀʙᴜ'
global.myweb = process.env.GIT_LINK ||'https://github.com/Afx-Abu/ABU-MD'
global.name = 'ABU MULTI-DEVICE'
global.myweb = 'https://instagram.com/'
global.sc = 'https://github.com/Afx-Abu/ABU-MD'
global.session = process.env.SESSION_ID|| ''
global.wm = process.env.WATERMARK|| 'ᴀʙᴜ-ᴍᴅ'
global.owner_name = process.env.OWNER_NAME || 'Jsl/Abu'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}

global.thumb = fs.readFileSync('logo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
