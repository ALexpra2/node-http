const {data} = require('./data.js');
const http = require('node:http');

const server = http.createServer((req, res) => {
  res.end (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi propio http</title>
    </head>
    <body>
        <header>
            <H1>${data.titulo}</H1>
            <h2>${data.subtitulo}</h2>
        </header>
        <main>
            <article>
                <p>
                ${data.descripcion}              
                </p>
            </article>
            <section>
                <p>
                  ${data.seccion}
                </p>
            </section>
        </main>
    </body>
    </html>`);
});

server.listen(0, () => {
    console.log( `server listening on port http://localhost:${server.address().port}`);      
});
