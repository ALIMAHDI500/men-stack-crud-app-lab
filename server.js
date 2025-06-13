
const express = require('express');
const dotenv=require("dotenv")
 const morgan = require("morgan");
 const path = require("path");
const methodOverrride=require("method-override")
dotenv.config();


const mongoose=require("mongoose")

const app = express();
PORT=3000

 app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(methodOverrride("_method"))
 app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs')
 // new code below this line

 



//Database Connction

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", ()=>{


    console.log(`Connected to the Database: ${mongoose.connection.name}`);
    
})



//  //new page
// app.get("/cars/new",async (req, res) => {
//   res.render("cars/new");
// });



app.post("/cars", async (req, res) => {

  await Car.create(req.body);
  res.redirect("/cars/new");
});




//  new code above this line
 

 app.get("/", async (req, res) => {
   res.render("index");
 })



//Require Controller
 const carCtrl=require('./controllers/cars');
 const Car = require('./modles/car.js');
app.use("/",carCtrl)



//first page





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});