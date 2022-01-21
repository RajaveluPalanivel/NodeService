var express = require('express');  
var app = express();  
  
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
app.listen(process.env.port,()=>{
console.log('Example port app is listening on port http://localhost:'+process.env.port );
});