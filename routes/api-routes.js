var db = require("../models");

module.exports = function(app) {

    // Home Page.  Get all burgers
    app.get("/", function(req, res) {
        db.Burger.findall({}).then(function(data) {
            res.render("index", { burgers: data });
        });
    });

    // Submit New Burger on POST

    app.post("/", function(req, res) {
        db.Burger.create({
            name: req.body.name,
            devoured: req.body.devoured
        });
    });

    app.put("/:id", function(req, res) {
        db.Burger.update({
            devoured: req.body.devoured
        }, {
            where: { id: req.params.id }
        });
    });

};