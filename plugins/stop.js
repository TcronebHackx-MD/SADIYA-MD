const {cmd , commands} = require('../command')

cmd({
    pattern: "stop",
    desc: "stop the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const {exec} = require("child_process")
reply("SADIYA-MD Is stop")
exec("pm2 stop SADIYA-MD")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
