const { MessageMedia } = require('whatsapp-web.js');
const config = require("./../config/config.json")

async function create_sticker(msg, client){
    try {
        const media = await msg.downloadMedia()     
        const sticker = new MessageMedia(media.mimetype, media.data, media.filename)
        
        await client.sendMessage(msg.from, sticker, 
            {sendMediaAsSticker:true, stickerName: "𝘊𝘳𝘪𝘢𝘥𝘰 𝘤𝘰𝘮 𝙃𝙖𝙪𝙣𝙩𝙚𝙧 𝙗𝙤𝙩", stickerAuthor:"𝘾𝙧𝙞𝙖𝙙𝙤𝙧 𝙙𝙤 𝙗𝙤𝙩: 𝔸𝕚𝕜𝕠"})
    } catch (error) {
        await msg.reply("‼ >> Algo de errado aconteceu, verifique se você mandou o formato de media certo.")
    }
    
}

module.exports = create_sticker