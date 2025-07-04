const { NlpManager } = require('node-nlp')
const path = require('path')
const { strings } = require('./../config/config')
const intents = require('./intents.js')
const responses = require('./responses.js')
const entities = require('./entities.js')

// PATHS
const defaultIntentsPath = path.join(__dirname, 'memory', 'default_memory', 'intents.json');
const learnedIntentsPath = path.join(__dirname, 'memory', 'learned_memory', 'intents.json');
const defaultResponsesPath = path.join(__dirname, 'memory', 'default_memory', 'responses.json');
const learnedResponsesPath = path.join(__dirname, 'memory', 'learned_memory', 'responses.json');
const defaultEntitiesPath = path.join(__dirname, 'memory', 'default_memory', 'entities.json');
const learnedEntitiesPath = path.join(__dirname, 'memory', 'learned_memory', 'entities.json');

function setupNlpManager(modelPath){
    const manager = new NlpManager({
        languages:['pt'],
        forceNER: true,
        autoSave: true,
        modelFilename: modelPath
    })

    return manager;
}

async function trainAndSave(manager, modelPath){
    
    try{
        console.log(`${strings.bot_brain_string} train and save process initialized!`)
        intents.loadIntentsFromFile(manager, defaultIntentsPath)
        intents.loadIntentsFromFile(manager, learnedIntentsPath)

        responses.loadReponsesFromFile(manager, defaultResponsesPath)
        responses.loadReponsesFromFile(manager, learnedResponsesPath)

        // entities.loadEntitiesFromFile(manager, defaultEntitiesPath)
        // entities.loadEntitiesFromFile(manager, learnedEntitiesPath)


        await manager.train()
        await manager.save(modelPath)
        console.log(`${strings.bot_brain_string} Model trained and saved sucessfully.`)
    } catch(e){
        console.log(`${strings.bot_brain_error_string} ${e}}`)
    }
    
}

async function initializeModel(manager, modelPath) {
    try{
        console.log(`${strings.bot_brain_string} Initializing model...`)
        await trainAndSave(manager, modelPath)
        
    } catch(e){
        console.log(`${strings.bot_brain_error_string} ${e}}`)
    }
    
    
}

async function processText(manager, text) {
    try{
        response = await manager.process('pt', text)
        if(response.intent === 'None' || !response.answer){
            response = await manager.process('pt', 'desentender')
        } 
        
        return response.answer
        
    } catch(e){
        return "Perai que meu codigo ta td bugado, vou ajeitar"
    }
    
}
module.exports = {
    setupNlpManager,
    processText,
    initializeModel
}