require('dotenv').config();
const express = require('express');

const app = express();

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 5000;

// using express.Router
const rootRouter = require('./routes');

// custom middleware
const printRoutePath = (req, res, next) => {
  console.log(req.originalUrl);
  next();
};

// global middlewares
app.use(printRoutePath);
app.use(express.json());
// load routes using express.Router middleware
app.use(rootRouter);

// creating route
app.get('/test', (req, res) => {
  res.json('test page');
});

// route with custom middleware
const testMiddleware = (req, res, next) => {
  console.log('this is from test middleware');
  next();
};

app.get('/test-middleware', testMiddleware, (req, res) => {
  res.json('test middleware page');
});

app.listen(PORT, HOST, () => {
  console.log(`app berjalan di ${HOST}:${PORT}`);
});
