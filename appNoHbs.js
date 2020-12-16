const express = require('express');
const app = express();
const path = require('path');
const json = require('./wwwroot/sensordata.json')
const httprequest = require('./wwwroot/httprequest')
const Building = require('./model/bygninger');

app.use(express.static("wwwroot"));

const data = {
    'navn': 'hovedbygning',
    'adresse': 'jernbanevej 2',
    'lokaler': [{
        'nummer': 2,
        'navn': "auditoriet",
        'sensor': [{
            '_id': 2,
            'temperatur': 20,
            'luftfugtighed': 40,
            'co2': 212,
            'luftkvalitet': 4,
            'lysniveau': 4000,
            'lysfarve': 300,
        }]
    }]
}



app.get('/api/sensorer', async (req, res) => {

    // let building = new Building;
    // building.body = data;
    // console.log(building.body)
    // await building.save();
    res.json(json);
});

app.get('/api/sensorer/:id', (req, res) => {
    for (x in json) {
        console.log(json[x])
        console.log(req.params)

        if (json[x].id == req.params.id) {
            res.send(json[x])
        }
    }
});


app.post("/api/sensorer", (req, res) => {
    json.id = req.body.id;

    sensor.add(json);
});

app.listen(3000);


