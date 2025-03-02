const qrcode = require('qrcode-terminal');

function generate_QRcode(client) {
    let qrGenerated = false;
    let qrTimer;

    client.on('qr', (qr) => {
        if (!qrGenerated) {
            console.log('Escaneie o QR Code abaixo para autenticar:');
            qrcode.generate(qr, { small: true });
            qrGenerated = true;

            // Define um temporizador para permitir a regeneração do QR Code após 60 segundos
            qrTimer = setTimeout(() => {
                qrGenerated = false;
            }, 3600000); // 60000 ms = 60 segundos
        } else {
            console.log('Aguardando antes de gerar um novo QR Code...');
        }
    });

    client.on('ready', () => {
        console.log('Cliente está pronto!');
        // Limpa o temporizador quando o cliente estiver pronto
        clearTimeout(qrTimer);
    });

    client.on('authenticated', () => {
        console.log('Autenticado com sucesso!');
        // Limpa o temporizador após a autenticação
        clearTimeout(qrTimer);
    });

    client.on('auth_failure', () => {
        console.log('Falha na autenticação, regenerando QR Code...');
        qrGenerated = false;
        clearTimeout(qrTimer);
    });
}

module.exports = generate_QRcode