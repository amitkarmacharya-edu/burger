const orm = require('../config/orm');

var burger = {
    all: async function() {
        let burgers = await orm.selectAll();
        return burgers;
    },
    updateBurder: async function(burgerName, devoured, id) {
        let updatedBurger = await orm.updateOne(burgerName, devoured, id);
        return updatedBurger;
    },
    insertOne: async function(burgerName, devoured) {
        let inserted = await orm.insertOne(burgerName, devoured);
        return inserted;
    }
};

module.exports = burger;

