const { Client, LocalAuth } = require("whatsapp-web.js")

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      headless: true,
      args: [ '--no-sandbox', '--disable-gpu', ],
  },
  webVersionCache: { type: 'remote', remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html', }

  });

module.exports = client
