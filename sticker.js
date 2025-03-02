const { MessageMedia } = require('whatsapp-web.js');
const config = require("./config/config.json")

async function create_sticker(msg, client){
    try {
        const media = await msg.downloadMedia()     
        const sticker = new MessageMedia(media.mimetype, media.data, media.filename)
        
        await client.sendMessage(msg.from, sticker, 
            {sendMediaAsSticker:true, stickerName: "Feito por Haunter Bot", stickerAuthor:"𝖕𝖗𝖆𝖌𝖆"})
    } catch (error) {
        await msg.reply("‼ >> Algo de errado aconteceu, verifique se você mandou o formato de media certo.")
    }
    
}

module.exports = create_sticker