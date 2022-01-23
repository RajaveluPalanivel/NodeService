var express = require('express');  
var app = express();  
const { Pool, Client } = require("pg");

let port=process.env.PORT || 8080
  


const pool = new Pool({
  user: "wdtbriosumbzdw",
  host: "ec2-3-212-143-188.compute-1.amazonaws.com",
  database: "dldbbq36aick2",
  password: "2af39b6f55c05ca135d5ae63c709d6e3718b554e9ce4f37c7c8db6336f79b823",
  port: "5432"
});



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
   
   pool.query(
    "CREATE TABLE LoginDetails (user_id serial PRIMARY KEY, username VARCHAR ( 50 )  NOT NULL,password VARCHAR ( 50 ) NOT NULL);",
    (err, res) => {
      console.log(err, res);
      pool.end();
    }
  );

   console.log(response);  
   res.end(JSON.stringify(response));  
})  
app.listen(port,()=>{
console.log('Example port app is listening on port http://localhost:'+port );
});