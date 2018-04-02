const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const conf = !dev && { distDir: 'next' };
const app = next({
  dev,
  dir: dev ? 'src/app' : '.',
  conf,
});
const handle = app.getRequestHandler();
const server = express();

app.prepare()
  .then(() => {
    server.get('/projects/:id', (req, res) => {
      const actualPage = '/project';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    if (dev) {
      server.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
      });
    }
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

module.exports = server;
