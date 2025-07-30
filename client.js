const { Client, LocalAuth } = require("whatsapp-web.js")

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-zygote',
      '--disable-gpu',
      '--disable-features=VizDisplayCompositor',
      '--disable-software-rasterizer',
      '--disable-breakpad',
      '--disable-client-side-phishing-detection',
      '--disable-crash-reporter',
      '--disable-in-process-stack-traces',
      '--disable-logging',
      '--disable-notifications',
      '--disable-permissions-api',
      '--disable-popup-blocking',
      '--mute-audio',
      '--no-first-run',
      '--no-default-browser-check',
      '--single-process',
    ]
  },
  webVersionCache: {
    type: 'remote',
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html'
  }
});

module.exports = client;
