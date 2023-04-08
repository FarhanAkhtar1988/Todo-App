const Task = require("../models/list");

// contoller for home page 
module.exports.home = function(req, res){
    Task.find({},function(err, taskList){
        if(err){
            console.log("Error in fetching the tasklist");
            return;
        }
        return res.render("home", {
            title: "TODO App",
            task_List: taskList
        })
    })
}