module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
    return Burger;
}

// var orm = require("../config/orm.js");

// var burger = {
//     selectAll: function(cb) {
//         orm.selectAll("burgers", function(res) {
//             cb(res);
//         });
//     },

//     insertOne: function(val, cb) {
//         orm.insertOne("burgers", "name", val, function(res) {
//             cb(res);
//         });
//     },

//     updateOne: function(condition, cb) {
//         orm.updateOne("burgers", "devoured", 1, condition, function(res) {
//             cb(res);
//         });
//     }

// };