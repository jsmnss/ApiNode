'use strict';
var mongoose = require('mongose');
var schema = mongoose.Schema;

var taskSchema = new schema({
   name: {
       type: String,
       Required: 'A task name ins required'
   },
    create: {
       type: Date,
        default: Date.now()
    },
    status:{
       type: [{
           type: String,
           enum: ['not started', 'in-progress', 'completed']
       }],
        default: ['not started']
    }
});