const express = require('express');
const helmet = require('helmet');
const next = require('next');

const port = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    /* Middleware */
    // server.use(helmet());
    server.use(express.urlencoded({ extended: false }));
    server.use(express.json());

    /* Main routes */
    server.get('/', (req, res, next) => {
      return app.render(req, res, '/');
    });

    server.get('/about', (req, res, next) => {
      return app.render(req, res, '/about');
    });

    server.get('/book', (req, res, next) => {
      return app.render(req, res, '/book');
    });

    server.get('/contact', (req, res, next) => {
      return app.render(req, res, '/contact');
    });

    /* Function based route */
    const mailerRoute = require('./routes/mailerRoutes');
    server.use('/mailer', mailerRoute);

    /* Wildcard Route */
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, () => console.log(`Server running on port ${port}.`));
  })
  .catch((err) => {
    console.error(err.message);
  });
