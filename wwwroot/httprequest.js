const https = require('https');



function getNaestved() {
    https.get('https://vejr.eu/api.php?location=Roskilde&degree=C', (resp) => {
        let data = "";

        resp.on('data', (chunk) => {
            data += chunk;
            console.log(data);
        })

        // resp.on('end', () => {
        //     console.log(data);
        // })
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}


module.exports = { getNaestved };