

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🤭 I AM FINE 🤟'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ➸🛡️ ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ 🛡️ ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/cd6032c65c27e0510ddad.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: " 🔮 Hay All I'm Alive now 🔮\n\n🧿 My name :🛡️ ᗪᖇ𝙰𝙶𝚘𝚗 Ӽ 🛡️⎠\n\n\n ◐. Developer:ᴊᴀɴɪᴛʜ ꜱᴀᴅᴀɴᴜᴡᴀɴ  \n ◐. Github - https://bit.ly/3L8TVwS \n ◐. Youtube - https://bit.ly/3IeLP3Q \n ◐. Owner - https://bit.ly/3A5DTyQ \n ◐. Our Web - https://bit.ly/3Kig1Na \n\n ◐. All Cammands -Type .Dragon X\n\n\n🖲️Thank You For Using ⎝🛡️ Dragon X 🛡️⎠"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🤭 I AM FINE 🤟'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd6032c65c27e0510ddad.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⎝🛡️ Dragon X 🛡️⎠ ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*⎝🛡️ Dragon X 🛡️⎠*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⎝🛡️ Dragon X 🛡️⎠*\n\n` + 
                '```Installed version :```\n' +
                ' V 4.0.0 Public'+
                `\n\n🍁 Check github for bot: https://github.com/Janithsadanuwan/Dragonx-Whatsapp-Bot
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🤭 I AM FINE 🤟'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⎝🛡️Dragon X 🛡️⎠ ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/35883180004518cb15fe9.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "🔮 Hay All I'm Alive now 🔮\n\n🧿 My name : ⎝🛡️ Dragon X 🛡️⎠\n\n\n ◐. Developer:Janith Sadanuwan \n ◐. Github -https://bit.ly/3LteqEX \n ◐. Youtube - https://bit.ly/35Vl8TG \n ◐. Owner - https://bit.ly/3A5DTyQ \n ◐. Our Web - https://bit.ly/3uIHsdE \n\n ◐. All Cammands -Type .Menu X\n\n\n🖲️Thank You For Using ⎝🛡️ Dragon X 🛡️⎠"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🤭 I AM FINE 🤟'}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/35883180004518cb15fe9.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⎝🛡️ Dragon X 🛡️⎠ ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*⎝🛡️ Dragon X 🛡️⎠*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⎝🛡️ Dragon X 🛡️⎠*\n\n` + 
                '```Installed version :```\n' +
                ' V 1.0.0 - Public'+
                `\n\n🍁 Check github for bot:  https://github.com/Janithsadanuwan/Dragonx-Whatsapp-Bot`
           , MessageType.text);
            
        }));
}
