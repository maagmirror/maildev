// start-maildev.js
const MailDev = require('maildev');

const smtpPort = 1025; // Puerto SMTP para recibir emails
const webPort = 1080; // Puerto para la interfaz web

const maildev = new MailDev({
  smtp: smtpPort,
  web: webPort,
});

maildev.listen();

maildev.on('new', (email) => {
  console.log('¡Nuevo email recibido!', email.subject);
});

console.log(`MailDev iniciado.
Enviá tus emails de prueba a:
  host: localhost
  puerto: ${smtpPort}

Abrí la interfaz web para ver los emails en:
  http://localhost:${webPort}
`);
