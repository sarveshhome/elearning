'use strict';
module.exports = function(app) {
  var Courses = require('../controllers/coursesController');

  // todoList Routes
  app.route('/course')
    .get(Courses.list_all_Courses)
    .post(Courses.create_a_Courses);


  app.route('/course/:Id')
    .get(Courses.read_a_Courses)
    .put(Courses.update_a_Courses)
    .delete(Courses.delete_a_Courses);
};
