var db = require("../models");
var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

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
        db.Contact.create(req.body)
            .then(dbContacts => res.json(dbContacts))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.body.contacts.userId }, req.body)
            .then(dbUsers => res.json(dbUsers))
            .catch(err => res.status(422).json(err));
            console.log(req.body);
    },
    remove: function(req, res) {
        db.Contact.remove({ _id: req.params.id }).then(function(dbContact) {
            res.json(dbContact);
        });
    }
};