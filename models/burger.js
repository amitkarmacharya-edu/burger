const orm = require('../config/orm');

var burger = {
    all: async function() {
        return await orm.selectAll();
    },
    updateBurger: async function(burgerName, devoured, id) {
       return await orm.updateOne(burgerName, devoured, id);
    },
    insertBurger: async function(burgerName, devoured) {
        return await orm.insertOne(burgerName, devoured);
    }
};

module.exports = burger;

