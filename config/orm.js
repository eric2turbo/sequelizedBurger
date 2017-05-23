var connection = require("../config/connection.js");

var orm = {
    // Gets all table data.  Used to display burgers.
    selectAll: function(table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // Inserts new row.  Used to add a burger.
    insertOne: function(table, col, val, cb) {
        var query = "INSERT INTO " + table;
        query += " (" + col + ") VALUES ";
        query += "('" + val + "');";
        // console.log(query);
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Updates condition.  Used to change devoured status based on id.
    // condition takes in condition 'id = num'
    updateOne: function(table, column, value, condition, cb) {
        var query = "UPDATE " + table;
        query += " SET " + column + " = ";
        query += value + " WHERE " + condition + ";";
        // console.log(query);
        connection.query(query, function(err, result) {
            if (err) throw err;

            cb(result);
        });
    }
};

module.exports = orm;