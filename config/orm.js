const con = require('./connection');

const orm = {

    selectAll: function() {
        return new Promise(function(resolve, reject) {
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

        let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${burgerName}', ${devoured})`;
        return new Promise(function(resolve, reject) {
            con.query(queryString, function(err, result){
                if(err) {
                    console.log("Err while inserting data into table");
                    reject(err);
                }

                // success
                resolve(result);
            });
        });
    },

    updateOne: function(burgerName, devoured, id) {
        if(!this.findOne('id', id)){
            console.log("Burger NOT found!");
            return {status: false, message: "No such burger"};
        }
        let queryString = `UPDATE burgers SET burger_name='${burgerName}', devoured=${devoured} WHERE id=${id}`;
        return new Promise(function(resolve, reject) {
            con.query(queryString, function(err, result){
                if(err) {
                    console.log("Error while updating burger info!", err);
                    reject(err);
                }
    
                // success
                console.log("Successfully Updated Record");
                resolve(result);
            });
            
        });
    },

    findOne: function(col, value) {
        let queryString = "SELECT * FROM burgers WHERE ?? = ?";
        return new Promise(function(resolve, reject) {
            con.query(queryString, [col, value], function(err, result) {
                if(err) {
                    reject(false);
                }
                if(result) {
                  reject(true);
                }
                // success
                resolve(false);
            });
        });
    }

};

module.exports = orm;