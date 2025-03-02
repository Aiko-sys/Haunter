const client = require("./client.js")
const generate_QRcode = require("./qrcode.js")
const config = require("./config/config.json")
const create_sticker = require("./sticker.js")

client.once('ready', () =>{
    console.log("Client is ready")

  })

generate_QRcode(client)

client.on('message', async msg =>{

    // MAIN COMMANDS
    if(msg.body == "/versão"){
        msg.reply(config.strings.version)
    }
    else if(msg.body == "/info"){
        msg.reply(config.strings.infocreator)
    } 
    else if(msg.body == "/menu"){
        msg.reply(config.strings.menu)
    } 
    else if(msg.hasMedia){
        if(msg.body == '/figurinha'){
            create_sticker(msg, client)
            console.log('[SYSTEM]: Sticker created')
        }
    }
})

client.initialize()