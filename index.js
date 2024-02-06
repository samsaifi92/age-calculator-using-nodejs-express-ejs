const express = require('express')
const bodyParser = require('body-parser');
const ejs = require('ejs');
const date = require('./date.js');


const app = express()

app.set('view engine', 'ejs');
let BirthYear = [];

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    let Day = date.getDay();
    res.render('home', { Day: Day });
});

app.post('/', (req, res) => {
    let Day = date.getDay();
    let currentYear = date.getYear();
    let err = 'box cant be empty';
    let age = req.body.currentAge;
    let YourYear = currentYear - age;
    if (age !== "") {
        BirthYear.push(YourYear);
        err = "";
    }
    res.render('home', { Day: Day, BirthYear: BirthYear, err: err });
})

app.listen(3000, () => console.log("Server started on port http//:localhost:3000"));