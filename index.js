require('dotenv').config();

const express = require('express');

const router = require('./src/routes');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/fundamental/api/v1/', router);

app.get('/', (req, res) => {
  res.send({
    message: 'hello',
    db: process.env.DB || 'course-express',
    user: process.env.USER || 'root',
    pw: process.env.PASSWORD || 'root',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '8889',
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
