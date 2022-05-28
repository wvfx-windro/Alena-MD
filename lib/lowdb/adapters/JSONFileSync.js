//═══════════════════════════════════════════════════════//
// ᴛʜɪs ʙᴏᴛ ᴄᴏᴅᴇʀ ᴏɴʟʏ ᴀʙᴜ
// ʏᴏᴜ ʀᴇ ᴇᴅɪᴛɪɴɢ ᴏʀ ᴄᴏᴘʏɪɴɢ
// ʏᴏᴜ ᴄʀᴇᴅɪᴛ ʀᴇᴍᴏᴠᴇ ʙᴜᴛ
// ᴊᴇsᴛ sᴜᴘᴘᴏʀᴛ ᴍᴇ
//════════════════════════════//
const { TextFileSync } = require('./TextFileSync.js');
class JSONFileSync {
    constructor(filename) {
        this.adapter = new TextFileSync(filename);
    }
    read() {
        const data = this.adapter.read();
        if (data === null) {
            return null;
        }
        else {
            return JSON.parse(data);
        }
    }
    write(obj) {
        this.adapter.write(JSON.stringify(obj, null, 2));
    }
}
module.exports = { JSONFileSync };
