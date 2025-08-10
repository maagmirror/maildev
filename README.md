# Proyecto MailDev

Este proyecto utiliza [MailDev](https://www.npmjs.com/package/maildev) para capturar y visualizar emails de prueba durante el desarrollo.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

Para iniciar MailDev ejecuta:

```bash
npm run maildev
```

Esto levantará dos servicios:

- **SMTP** en el puerto `1025` (para que tus aplicaciones envíen emails de prueba)
- **Web GUI** en el puerto `1080` (para ver los emails recibidos)

### Configuración para pruebas

Configura tu aplicación para enviar emails a:

- **host para docker:** `host.docker.internal`
- **host:** `localhost`
- **puerto SMTP:** `1025`

Luego abre en tu navegador:

- [http://localhost:1080](http://localhost:1080)

Cada vez que se reciba un email, verás el asunto en la consola y el mensaje en la interfaz web.

## Ejemplo de envío de email (Node.js)

```js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 1025,
  secure: false,
});

transporter.sendMail(
  {
    from: 'prueba@ejemplo.com',
    to: 'destino@ejemplo.com',
    subject: 'Hola MailDev',
    text: '¡Este es un email de prueba!',
  },
  (err, info) => {
    if (err) return console.error(err);
    console.log('Email enviado:', info.response);
  }
);
```

## Scripts disponibles

- `npm run maildev`: Inicia MailDev

## Créditos

- [MailDev en npm](https://www.npmjs.com/package/maildev)
