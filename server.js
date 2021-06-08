const express = require('express');
const app = express();
const PORT = 3000;
const Pokemon = require('./models/pokemon.js');


// // INDEX
// app.get('/', (req, res) => {
// res.render('index.ejs', { data: Pokemon });
// });


// // SHOW
// app.get('/:id', (req, res) => {
// res.render('show.ejs', { data: Pokemon[req.params.id] });
// });

// // New
// app.get('/pokemon/new', (req, res) => {
//     res.send('new.ejs', {data: Pokemon[req.params.id ]});
// });

// // Edit
// app.get('/pokemon/:id/edit', (req, res) => {
    
// });

// // Create
// app.post('pokemon', (req, res) =>{

// });
// // Update
// app.put('/pokemon/:id', (req, res) => {

// });
// // Delete
// app.delete('/pokemon/:id', (req, res) => {

// });

// Listener/Server
app.listen(PORT, ()=>{
    console.log(`express is listening on port ${PORT}`)
});