var express = require("express");

var router = express.Router();

// Import model for database functions
var burger = require("../models/burger.js");

//Routes
//Home page
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

//Submit New Burger on POST
router.post("/", function(req, res) {
    burger.insertOne(req.body.name, function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne(condition, function() {
        res.redirect("/");
    });
});

module.exports = router;