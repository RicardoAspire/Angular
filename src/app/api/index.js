const express = require('express');
const app = express();
const request = require('request');
const router = express.Router();
const cors = require("cors");
const bodyParser = require('body-parser'); 
const jsonParser = bodyParser.json(); 
router.use(cors());

app.get('/api/user',(request, response)=>{
    response.json({
        data: {
            id: 2,
            email: 'andreaespinosa@gmail.com',
            first_name: 'Andrea',
            last_name: 'Espinosa',
            avatar: 'https://reqres.in/img/faces/12-image.jpg'
        }
    })
});

app.post('/api/addUser', jsonParser, function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    console.log("Name:",name);
    console.log("Email:",email);
    res.status(201).json({
        message: 'user was created',
        name: name,
        email: email
    });
});

app.listen('8010',()=>{
    console.log('Listening to port 8010');
});







