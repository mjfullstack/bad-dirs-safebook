const db = require("../models");

// Methods for usersController
module.exports = {
    findAll: function (req, res) {
        // res.send("test")
        // console.log("test")
        db.Users
            .find(req.query)
            .sort({ last_name: "desc" })
            .then(dbModel => res.json(dbModel))
            // .then(res.send("test"))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Users
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}