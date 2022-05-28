//═══════════════════════════════════════════════════════//
// ᴛʜɪs ʙᴏᴛ ᴄᴏᴅᴇʀ ᴏɴʟʏ ᴀʙᴜ
// ʏᴏᴜ ʀᴇ ᴇᴅɪᴛɪɴɢ ᴏʀ ᴄᴏᴘʏɪɴɢ
// ʏᴏᴜ ᴄʀᴇᴅɪᴛ ʀᴇᴍᴏᴠᴇ ʙᴜᴛ
// ᴊᴇsᴛ sᴜᴘᴘᴏʀᴛ ᴍᴇ
//════════════════════════════//
module.exports = {
    ...require('./adapters/JSONFile.js'),
    ...require('./adapters/JSONFileSync.js'),
    ...require('./adapters/LocalStorage.js'),
    ...require('./adapters/Memory.js'),
    ...require('./adapters/MemorySync.js'),
    ...require('./adapters/TextFile.js'),
    ...require('./adapters/TextFileSync.js'),
    ...require('./Low.js'),
    ...require('./LowSync.js'),
}