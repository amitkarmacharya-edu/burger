var express = require('express');

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", async function(req, res) {
  let burgers;
  try {
    burgers = await burger.all();
  }
  catch (e) {
    console.log(e);
    error = { error : { message: "Error While Fetching the data" }};
    burgers = error;
  }

  res.render("index", {burgers});
});

router.post("/create/burger", async function(req, res) {
    let { burgerName, devoured } = req.body;

    try {
      let status = await burger.insertBurger(burgerName, devoured);
      console.log(status);
      res.status(200).end();
    }
    catch (e) {
      console.log(e);
      res.status(400).end();
    }
    
});

router.put("/update/burger", async function(req, res) {

  let { burgerName, devoured, id } = req.body;

  // success
  try {
    let status = await burger.updateBurger(burgerName, devoured, id);
    console.log(status)
    res.status(200).end();
  }
  catch (e) {
    // failed
    console.log(e);
    res.status(400).end();
  }
  
});

// Export routes for server.js to use.
module.exports = router;

