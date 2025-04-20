// =============== IDEIAS ==============

// Baixar vídeos do YouTube / Reels / TikTok
// fazer processamento de linguagem natural

// # VARIABLES
var bot_mood = 'default'
//

// # CONSTS
const cmd_list = ['/versão', '/info', '/menu', '/figurinha']
//

require('dotenv').config()
const brain = require('./core/brain.js')
const fs = require('fs')
const responses = require('./core/responses.js')
const intents = require('./core/intents.js')
const client = require("./client.js")
const generate_QRcode = require("./modules/qrcode.js")
const config = require("./config/config.json")
const create_sticker = require("./modules/sticker.js")
const { strings } = require("./config/config.js")
const path = require('path')


// BRAIN CONSTS
const modelPath = path.join(__dirname, 'core','memory', 'model', 'model.nlp')
const manager = brain.setupNlpManager(modelPath)



console.log("\x1b[35m%s\x1b[0m", strings.haunter_initialization_string)
client.once('ready', () => {
    console.log(`${strings.bot_system_string} Client is ready.`)
})
generate_QRcode(client)
brain.initializeModel(manager, modelPath)
client.on('message', async msg =>{

        let senderId = msg.author || msg.from
        let number = senderId.split('@')[0].slice(2)

        // MAIN COMMANDS
        if(msg.body.toLowerCase().startsWith("haunter,") ){
            let user_msg = msg.body.slice(9).trim()
            const response = await brain.processText(manager, user_msg)

            msg.reply(response)
        }
        else if(msg.body == cmd_list[0]){
            msg.reply(config.strings.version)
        }
        else if(msg.body == cmd_list[1]){
            msg.reply(config.strings.infocreator)
        } 
        else if(msg.body == cmd_list[2]){
            msg.reply(config.strings.menu)
        } 
        else if(msg.hasMedia){
            if(msg.body == cmd_list[3]){
                create_sticker(msg, client)
                console.log(`${string.bot_system_string} Sticker created`)
            }
        
        }
    
    }
)

client.initialize()