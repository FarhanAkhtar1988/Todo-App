const Task = require("../models/list");

// controller for creating task 
module.exports.createTask = function(req, res) {
   Task.create(req.body, function(err){
    if(err){
        console.log("Error in creating a task");
        return;
    }
    return res.redirect("back");
   });
}

// controller for deleteing the task 
module.exports.deleteTask = function(req, res) {
    const id = req.query;
    const deleteCount = Object.keys(id).length;
    for (let i = 0; i < deleteCount; i++) {
        Task.findByIdAndDelete(Object.keys(id)[i], function(err){
            if(err){
                console.log("Error in deleting the task");
                return;
            }
        })
    }
    return res.redirect('back');
}