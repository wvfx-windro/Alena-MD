//═══════════════════════════════════════════════════════//
// 𝚃𝙷𝙸𝚂 𝙱𝙶𝙼 𝙱𝙾𝚃 𝙲𝙾𝙳𝙴𝚁 𝙱𝚈 𝙰𝙱𝚄
// 𝚈𝙾𝚄𝚁 𝙴𝙳𝙸𝚃𝙸𝙽𝙶 𝙾𝚁 𝙲𝙾𝙿𝚈 
// 𝚈𝙾𝚄 𝙲𝚁𝙴𝙳𝙸𝚃 𝚁𝙴𝙼𝙾𝚅𝙴 𝙱𝚄𝚃
// 𝙹𝙴𝚂𝚃 𝚂𝙰𝙿𝙿𝙾𝚁𝚃 𝙼𝙴 𝙿𝙻𝚉
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
global.ownername = 'ᴊsʟ-ᴀʙᴜ'
global.botname = 'ᴀʟᴇɴᴀ-ᴍᴅ'
global.footer = '© ᴀʟᴇɴᴀ ™.'
global.ig = 'https://github.com/Afx-Abu'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/Afx-Abu/Alena-MD'
global.myweb = 'https://instagram.com/jsl-abu'
global.packname = 'ᴀʟᴇɴᴀ-ᴍᴅ'
global.author = 'ᴊsʟ-ᴀʙᴜ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ᴅᴏɴᴇ ✓',
    admin: 'ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ ғᴏʀ ᴀᴅᴍɪɴ !',
    botAdmin: 'ᴀᴅᴍɪɴ ɢɪᴠᴇ ᴍᴜsᴛ ᴛʜᴇɴ ᴡᴏʀᴄᴋ ᴄᴏᴍᴍᴀɴᴅ !',
    owner: 'ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ ᴏᴡɴᴇʀ !',
    group: 'ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ ɢʀᴏᴜᴘ !',
    private: 'ᴛʜɪs ᴡᴏʀᴄᴋ ᴏɴʟʏ ᴘʀɪᴠᴀᴛᴇ !',
    bot: 'ᴛʜɪs ᴡᴏʀᴄᴋ ᴏɴʟʏ ʙᴏᴛ',
    wait: 'ʟᴏᴀᴅɪɴɢ....',
    error: 'ᴀᴘɪ ᴋᴇʏ ᴇxᴘɪʀᴇᴅ !',
    endLimit: 'ʏᴏᴜʀ ɢᴇᴛᴇᴅ ғɪʟʏ ʟɪᴍɪᴛ !',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
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

global.thumburl = process.env.IMAGE || 'https://telegra.ph/file/8dcf20551b533dd0739e5.jpg'
global.packname = process.env.PACKNAME ||'ᴀʟᴇɴᴀ-ᴍᴅ'
global.author = process.env.AUTHOR ||'ᴊsʟ-ᴀʙᴜ'
global.name = 'ALENA MULTI-DEVICE'
global.session = process.env.SESSION_ID|| ''
global.wm = process.env.WATERMARK|| 'ᴀʟᴇɴᴀ-ᴍᴅ'
global.owner_name = process.env.OWNER_NAME || 'ᴊsʟ-ᴀʙᴜ'
global.logsmsg = convertToBool(process.env.LOGS)|| false

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}
