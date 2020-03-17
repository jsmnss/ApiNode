'use strict';

var mongoose = require('mongose'),
    tasks = mongoose.model('Tasks');
exports.listTasks = (req, res) => {
  tasks.find({}, (err,task) =>{
      if(err){
          res.send(err);
      }
      res.json(task);
  });
};

exports.createTask =  (req, res) => {
    var newTask = new tasks(req.body);
    newTask.save((err,task) =>{
        if (err){
            res.send(err);
        }
        res.json(task);
    })
};

exports.readTask = (req,res)=>{
    tasks.findById(req.params.taskId, (err, task) =>{
       if(err){
           res.send(err);
       }
       res.json(task);
    });
};

exports.updateTask = (req, res) =>{
    tasks.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) =>{
        if(err){
            res.send(err);
        }
        res.json(task);
    });
};

exports.deleteTask = (req, res) => {
    tasks.remove({_id: req.params.taskId}, (err, task) => {
       if(err){
           res.send(err);
       }
       res.jsonp({message: 'Task deleted successfully'});
    });
};