const Car=require("../modles/car.js")
// We begin by loading Express

const router=require("express").Router();

router.get("/cars/new",async(req,res)=>{
    res.render("cars/new")
})


router.post("/cars", async (req, res) => {

  await Car.create(req.body);
  res.redirect("/cars");
});


//Read All index
router.get("/cars",async(req,res)=>{
    const cars=await Car.find();
    res.render("cars/index.ejs",{cars})
})



// router.post("/cars", async (req, res) => {

//   await Car.create(req.body);
//   res.redirect("/cars/index");
// });


//Read one show
router.get("/cars/:carId",async(req,res)=>{
    const car=await Car.findById(req.params.carId)
    res.render("cars/show.ejs",{car})
})

//EDIT -GET  
router.get("/cars/:carId/edit",async(req,res)=>{
    const car=await Car.findById(req.params.carId)
    res.render("cars/edit.ejs",{car})
})

router.put("/cars/:carId",async(req,res)=>{
  
    await Car.findByIdAndUpdate(req.params.carId,req.body)
    res.redirect(`/cars/${req.params.carId}`)
})

router.delete("/cars/:carId",async(req,res)=>{

    await Car.findByIdAndDelete(req.params.carId)
    res.redirect(`/cars`);
})

module.exports=router;