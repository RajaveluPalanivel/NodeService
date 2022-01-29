var express = require('express');
var app = express();
const Request = require('request');

app.use(express.json());

let port = process.env.PORT || 8080


app.get('/GetName', function (req, res) {
    response = {
        first_name: 'Rajavelu',
    };

    console.log(response);
    res.end(JSON.stringify(response));
})

app.get('/', (req, res) => {
    res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});


app.get('/GetFullName', function (req, res) {
    response = {
        first_name: 'Rajavelu',
        last_name: 'Palanivel'
    };

    console.log(response);
    res.end(JSON.stringify(response));
})
app.listen(port, () => {
    console.log('Example port app is listening on port http://localhost:' + port);
});

app.post('/api', function (req,res){

console.log("BODY:"+req.body);

res.status(201).json(req.body);

});


app.post('/api/channels', async function (req, resOut) {

    console.log("Body:" + JSON.stringify(req.body));
    Request.post({
        "headers": {
            "Content-Type": "application/json",
            "api-key": "WXNDC2OfhluWCsmpjsjrX5uA7nA16PPIy3h5ty7X83B4SFutHpHjTVLjNw21SkU8"
        },
        "url": "https://data.mongodb-api.com/app/data-mlytw/endpoint/data/beta/action/insertOne",
        "body": JSON.stringify(req.body)
    }, (error, response, body) => {
        if (error) { console.log("Error message is: " + error) }
        else {
            console.log("The Response is: " + JSON.stringify(body));
            resOut.status(201).json(body);
        }
    });

    resOut.status(201).json(req.body);
});
