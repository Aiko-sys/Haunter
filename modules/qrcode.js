const qrcode = require('qrcode-terminal')
const { strings } = require("../config/config.js")

function generate_QRcode(client) {
    let qrGenerated = false;
    let qrTimer;

    client.on('qr', (qr) => {
        if (!qrGenerated) {
            console.log(`${strings.bot_system_string} Scan QRcode to authenticate!`);
            qrcode.generate(qr, { small: true });
            qrGenerated = true;

            qrTimer = setTimeout(() => {
                qrGenerated = false;
            }, 3600000);
        } else {
            console.log(`${strings.bot_system_string} Loading new QRcode.....`);
        }
    });

    client.on('ready', () => {
        clearTimeout(qrTimer);
    });

    client.on('authenticated', () => {
        console.log(`${strings.bot_system_string} Authenticated successfully!`);
        clearTimeout(qrTimer);
    });

    client.on('auth_failure', () => {
        console.log(`${strings.bot_system_string} Authentication failure, regenerating QRcode....`);
        qrGenerated = false;
        clearTimeout(qrTimer);
    });
}

module.exports = generate_QRcode