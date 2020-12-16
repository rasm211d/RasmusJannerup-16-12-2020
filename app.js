const express = require('express');
const app = express();

app.use(express.static('wwwroot'));

app.listen(3000);