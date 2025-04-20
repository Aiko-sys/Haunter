const fs = require('fs');
const { strings } = require('./../config/config.js')

async function loadReponsesFromFile(manager, filePath){
    try{
            if(fs.existsSync(filePath)){
                const responses = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        
                Object.keys(responses).forEach((response) =>{
                    responses[response].forEach((phrase) => {
                        manager.addAnswer('pt', response, phrase)
                    })
                })
        
                console.log(`${strings.bot_brain_string} Responses loaded sucessfully.`)
            } else{
                console.log(`${strings.bot_brain_string} Responses path not found.`)
            }  
        } catch(e){
            console.log(`${strings.bot_brain_error_string} something went wrong with Responses path.`)
        }
         
}

module.exports = {
    loadReponsesFromFile
}