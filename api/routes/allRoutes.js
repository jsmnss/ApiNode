'use strict';
module.exports = (app) => {
  const allFunctions = require('../controllers/allController');

  app.route('/tasks')
      .get(allFunctions.listTasks)
      .post(allFunctions.createTask);

  app.route('/tasks/:taskId')
      .get(allFunctions.readTask)
      .put(allFunctions.updateTask)
      .delete(allFunctions.deleteTask);
};