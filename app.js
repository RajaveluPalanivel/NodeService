var express = require('express');  
var app = express();  
app.use(express. static('public'));
  
app.get('/GetName', function (req, res) {  
    response = {  
        first_name:'Rajavelu',  
    };  
 
    console.log(response);  
    res.end(JSON.stringify(response));  
})  

app.get('/', (req, res) => {
    res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
    });


app.get('/GetFullName', function (req, res) {  
response = {  
       first_name:'Rajavelu',  
       last_name:'Palanivel'  
   };  

   console.log(response);  
   res.end(JSON.stringify(response));  
})  

var server = app.listen(8000, function () {  
  
    var host = server.address().address
    var port = server.address().port  
    console.log("Example app listening at http:localhost:8000", host, port)  
    
  })  