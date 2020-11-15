const con = require('./connection');

const orm = {

    selectAll: function() {
        return new Promise(function(reject, resolve) {
            con.query("SELECT * FROM burgers;", function(err, result) {
                if(err) {
                    console.log("Error while fetching data from burgers table");
                    reject(err);
                } 
                // success
                console.log("Received data from datablase, all rows");
                resolve(result);
            });
        });
    },

    insertOne: function(burgerName, devoured) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??,??)";
        return new Promise(function(reject, resolve) {
            con.query(queryString, [burgerName, devoured], function(err, result){
                if(err) {
                    console.log("Err while inserting data into table");
                    reject(false);
                }

                // success
                resolve(true);
            });
        });
    },

    updateOne: function(burgerName, devoured, id) {
        if(!this.findOne(burgerName, id)){
            console.log("Burger NOT found!");
            return false;
        }
        let queryString = "UPDATE burgers SET burger_name=??, devoured=?? WHERE id=??";
        return new Promise(function(reject, resolve) {
            con.query(queryString, [burgername, devoured, id], function(err, result){
                if(err) {
                    console.log("Erro while updating burger info!", err);
                    reject(false);
                }
    
                // success
                console.log("Successfully Updated Record");
                resolve(true);
            });
            
        });
    },

    findOne: function(burgerName, id) {
        let queryString = "SELECT * FROM burgers WHERE burger_name = ?? AND id = ??";
        return new Promise(function(reject, resolve) {
            con.query(queryString, [burgerName, id], function(err, result) {
                if(err) {
                    reject(false);
                }
                // success
                resolve(true);
            });
        });
    }

};

module.exports = orm;