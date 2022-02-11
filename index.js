require('dotenv').config();

const express = require('express');

const router = require('./src/routes');

const app = express();

const port = process.env.PORT || 5000;
const db = require('../database/connection');

app.use(express.json());

app.use('/fundamental/api/v1/', router);

app.get('/', async (req, res) => {
  try {
    await db.authenticate();
    console.log(
      '-------------------------------------------------Connection has been established successfully.'
    );
    res.send({
      message: 'Connection has been established successfully.',
    });
  } catch (error) {
    console.error(
      '-------------------------------------------------Unable to connect to the database:',
      error
    );
  }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
