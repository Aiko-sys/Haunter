const fs = require('fs');
const { strings } = require('./../config/config.js')

const loadEntitiesFromFile = (manager, filePath) =>{
    try{
        if(fs.existsSync(filePath)){
            const entities = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

            entities.forEach(entity => {
                
            })
            
            console.log(`${strings.bot_brain_string} Entities loaded successfully.`);
        } else{
            console.log(`${strings.bot_brain_error_string} path not found`)
        }
    } catch (e){
        console.log(`${strings.bot_brain_error_string} ${e}`)
    }
}

module.exports = {
    loadEntitiesFromFile
} 