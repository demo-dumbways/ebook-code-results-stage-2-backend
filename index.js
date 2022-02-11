require('dotenv').config();

const express = require('express');

const router = require('./src/routes');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/fundamental/api/v1/', router);

app.get('/', (req, res) => {
  const connectionString = `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`;
  res.send({
    connectionString,
    db: process.env.DB || 'course-express',
    user: process.env.USER || 'root',
    pw: process.env.PASSWORD || 'root',
    objt: {
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || '8889',
      dialect: 'mysql',
      logging: console.log,
      freezeTableName: true,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
