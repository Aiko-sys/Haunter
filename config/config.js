const config = require("./config.json")

const strings = {
    bot_system_string : "\x1b[35m[\x1b[33mBOT SYSTEM\x1b[35m]\x1b[0m:",
    bot_brain_string : "\x1b[35m[\x1b[33m BOT BRAIN \x1b[35m]\x1b[0m:",
    bot_brain_error_string : "\x1b[31m[\x1b[33m BRAIN ERROR \x1b[31m]\x1b[0m:",
    haunter_initialization_string : `
\x1b[35m╔══════════════════════════════════════════════╗
║         \x1b[33m[+] Haunter WhatsApp Bot             \x1b[35m║
║\x1b[37m     Summoning the digital spirit...          \x1b[35m║
\x1b[35m║\x1b[37m     Haunter is phasing into the network...   \x1b[35m║
\x1b[35m║\x1b[37m     Binding to WhatsApp Web interface...     \x1b[35m║
║\x1b[35m                                              ║
║     \x1b[37mStatus: <> Haunter is now online.        \x1b[35m║
╚══════════════════════════════════════════════╝\x1b[0m
`
}

// TO DO: CRIAR CONFIGURAÇÃO DE ADMIN

module.exports = { 
    strings,
}