const mongoose = require('mongoose')

const carsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  image: String,
  model:{type:Number, required:true}, 
  description:{type: String, required: false}
})

const Car = mongoose.model('Car', carsSchema)
module.exports = Car
