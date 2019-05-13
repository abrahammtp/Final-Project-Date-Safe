var db = require("../models");

// Defining methods for ContactControllers
module.exports = {
    // Find a contact
    find: function(req, res) {
        db.Contact.find({ _nameId: req.params.id }).then(function(dbContact) {
            res.json(dbContact);
        });
    },
    // Create a new contact
    create: function(req, res) {
        db.Contact.create(req.body).then(function(dbContact) {
            res.json(dbContact);
        });
    },
    update: function (req, res) {
        db.Contact.findOneAndUpdate({ _id: req.params.id }, req, body)
            .then(dbContact => res.json(dbContact))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Contact.remove({ _id: req.params.id }).then(function(dbContact) {
            res.json(dbContact);
        });
    }
};