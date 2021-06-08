const express = require('express');
const app = express();
const PORT = 3000;
// const Pokemon = require('../models/pokemon.js');


// // INDEX
// app.get('/', (req, res) => {
// res.render('index.ejs', { data: Pokemon });
// });


// // SHOW
// app.get('/:id', (req, res) => {
// res.render('show.ejs', { data: Pokemon[req.params.id] });
// });

// Listener/Server
app.listen(PORT, ()=>{
    console.log(`express is listening on port ${PORT}`)
});