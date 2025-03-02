const qrcode = require('qrcode-terminal');

function generate_QRcode(client){
    client.on('qr', qr => {
        qrcode.generate(qr, {small: true});
    });

    client.on('qr', (qr) => {
        console.log('QR RECEIVED', qr);
    });
}
module.exports = generate_QRcode