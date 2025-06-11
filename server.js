const { render } = require('ejs');
const express = require('express');
const app = express();

PORT=3005

// app.set('view engine', 'ejs');


app.get('/', (req, res) => {
   

  res.send('Hello There!');
});


app.get('/home', (req, res) => {

    res.render('home',{RESTAURANT})
  
});



app.get('/', (req, res) => {
   
 res.render()

});



app.get('/menu/:category', (req, res) => {
   



});






app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});