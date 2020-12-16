const express = require('express');
const app = express();
const path = require('path');
const json = require('./wwwroot/sensordata.json')

app.use(express.static("wwwroot"));

app.get('/api/sensorer', (req, res) => {
        res.json(json);
    }
)

app.get('/api/sensorer/:id', (req, res) => {
        for (x in json) {
            console.log(json[x])
            console.log(req.params)

            if (json[x].id == req.params.id) {
                res.send(json[x])
            }
        }
    }
)

app.listen(3000);