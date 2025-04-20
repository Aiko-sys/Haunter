const fs = require('fs');
const { strings } = require('./../config/config.js')

const loadIntentsFromFile = (manager, filePath) => {
    try{
        if(fs.existsSync(filePath)){
            const intents = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    
            Object.keys(intents).forEach((intent) =>{
                intents[intent].forEach((phrase) => {
                    manager.addDocument('pt', phrase, intent)
                })
            })
    
            console.log(`${strings.bot_brain_string} Intents loaded sucessfully.`)
        } else{
            console.log(`${strings.bot_brain_string} Intents path not found.`)
        }  
    } catch(e){
        console.log(`${strings.bot_brain_error_string} something went wrong with intents path.`)
    }
     
}
module.exports = {
   loadIntentsFromFile
}