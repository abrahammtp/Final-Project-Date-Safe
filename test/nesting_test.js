const assert = require('assert');
const mongoose = require('mongoose');
const User = require("../models/User");
const Dates = require("../models/User");
const Contacts = require("../models/User");

// Describe our tests
describe('Nesting records', function(){

    // Create tests
    it('Creates a new user with sub-documents like a date and emergency contact', function(done){

        var rodrigo = new User({
            name: 'Rodrigo Torres Pinto',
            email: 'rodrigo@gmail.com',
            password: '1234567',
            address: '444 Los Altos Way',
            number: '407-784-0099',
            gender: 'male',
            dates: [{
                name: 'Michelle Lewis',
                number: '321-345-4567',
                metThrough: 'Tinder',
                dateDescription: 'She is white, 23 years old and lives in Maitland'
            }],
            contacts: [{
                name: 'Abraham Torres Pinto',
                number: '407-683-8804',
                relationship: 'Brother'
            }]
        });

        rodrigo.save().then(function(){
            User.findOne({name: 'Rodrigo Torres Pinto'}).then(function(record){
                assert(record.contacts.length === 1);
                done();
            });
        });
    });

    it('Adds a date and a contact to an user', function(done){

        var michelle = new Dates({
            // name: 'Rodrigo Torres Pinto',
            // email: 'rodrigo@gmail.com',
            // password: '1234567',
            // address: '444 Los Altos Way',
            // number: '407-784-0099',
            // gender: 'male',
            dates: [{
                name: 'Michelle Lewis',
                number: '321-345-4567',
                metThrough: 'Tinder',
                dateDescription: 'She is white, 23 years old and lives in Maitland'
            }],
            // contacts: [{
            //     name: 'Abraham Torres Pinto',
            //     number: '407-683-8804',
            //     relationship: 'Brother'
            // }]
        });

        michelle.save().then(function(){
            User.findOne({name: 'Rodrigo Torres Pinto'}).then(function(record){
                // Add an emergency contact or a date to their respective arrays
                record.dates.push({
                    name: 'Phoebe Jones',
                    number: '321-123-3214',
                    metThrough: 'Tinder',
                    dateDescription: 'She is white, 22 years old and lives in Winter Park'
                });
                record.save().then(function(){
                    User.findOne({name: 'Rodrigo Torres Pinto'}).then(function(result){
                        assert(result.dates.length === 2);
                        done();
                    });
                });
            });
        });
    });
});