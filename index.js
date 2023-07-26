
const express = require('express');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser())
app.get('/welcome',(req, res) => {
    res.setHeader('Content-type','application/json');
    res.status(200).send("Welcome to Dominos!")
});

app.get('/contact',(req,res)=> {
    res.setHeader('Content-type','text/json')
    res.status(200).send(JSON.stringify({
         
            phone: '18602100000', 
                 email: 'guestcaredominos@jublfood.com'       
    }))
})
app.get("*",(req,res)=>{
    res.status(404).send(JSON.stringify({
        status:"page not found"
    }));
})
app.listen(8081, () => console.log("Server running on port number 8081"));