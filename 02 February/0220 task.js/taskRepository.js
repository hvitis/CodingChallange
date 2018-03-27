var repo = function () {
    var db = {};
    var get = function(id) {
        console.log("Getting task " + id);
        return {
            name: "new task from db"
        }
    };
    var save = function(task) {
        console.log("saving to db" + task.name);
    }

    return {
        get: get,
        save: save
    }
}

module.exports = repo();





/*
var repo = function () {
    var db = {};


    return {
        get: function(id) {
            console.log("Getting task " + id);
            return {
                name: "new task from db"
            }
        },
        save: function(task) {
            console.log("saving to db" + task.name);
        }
    }
}

module.exports = repo();
*/