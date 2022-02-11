const express = require('express');

const router = require('./src/routes');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/fundamental/api/v1/', router);

app.listen(port, () => console.log(`Listening on port ${port}!`));
