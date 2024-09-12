const express = require('express');
const path = require('path');

const app = express();

const PORT = 4030;

 
// Set EJS as the view engine
app.set('view engine', 'ejs');
 
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// GET method route
app.get("/", (req, res) => {
    res.render('home.ejs');
});
app.get("/rst", (req, res) => {
    res.render('rst.ejs');
});
app.get("/multi-housing-training", (req, res) => {
    res.render('Multi-Housing-Training.ejs');
});
app.get("/give", (req, res) => {
    res.render('give.ejs');
});
app.get("/partner", (req, res) => {
    res.render('partner.ejs');
});





app.listen(PORT, () =>{
    console.log('Server Listening on port ' + PORT);
})
