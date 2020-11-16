var express = require('express');

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

// routes
router.get("/", async function(req, res) {
  let data;
  try {
    burgers = await burger.all();
  }
  catch (e) {
    console.log(e);
    error = { error : { message: "Error While Fetching the data" }};
    burgers = error;
  }

  res.render('index', {burgers});
});

router.post("/api/burger", async function(req, res) {
    let { burgerName, devoured} = req.body;

    let status = await burger.insertOne(burgerName, devoured);

    if(status){
        res.json( { burgerName: burgerName, devoured: devoured, success: true});
    }
    // Send back the ID of the new quote
    res.json(false);
  
});

router.put("/api/burger/:id", async function(req, res) {
  let { id } = req.params.id;
  let { burgerName, devoured } = req.body;

  let status = await burger.updateOne(burgerName, devoured, id);

  // success
  if(status) {
      res.json({ burgerName: burgerName, devoured: devoured, success: true });
  }

  // failed
  res.json(false);
});

// Export routes for server.js to use.
module.exports = router;

