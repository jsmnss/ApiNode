'use strict';
module.exports = function (app) {
  var allFunctions = require('../controllers/allController');

  app.route('/tasks')
      .get(allFunctions.listTasks)
      .post(allFunctions.createTask);

  app.route('/tasks/:taskId')
      .get(allFunctions.readTask)
      .put(allFunctions.updateTask)
      .delete(allFunctions.deleteTask);
};