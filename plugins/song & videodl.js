const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url...")
const search = await yts(q)
const data = search.video[0]
const url = data.url

let desc = `*✨ SADIYA-MD SONG DOWNLOADER . .🌳*

♦️ TITLE - ${data.title}

♦️ VIEWS - ${data.views}

♦️ DESCRIPTION - ${data.description}

♦️ TIME - ${data.timestamp}

♦️ AGO - ${data.ago}

MADE BY SADIYA-MD
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})


    
    
}catch(e){
reply(`${e}`)
}
})
