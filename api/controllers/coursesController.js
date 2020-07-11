'use strict';

var mongoose = require('mongoose'),
  Course = mongoose.model('Courses');

exports.list_all_Courses = function(req, res) {
  Course.find({}, function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};


exports.create_a_Courses = function(req, res) {
  var new_task = new Course(req.body);
  console.log(req.body);
  new_task.save(function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};


exports.read_a_Courses = function(req, res) {
  Course.findById(req.params.Id, function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};

exports.update_a_Courses = function(req, res) {
  Course.findOneAndUpdate({_id: req.params.Id}, req.body, {new: true}, function(err, course) {
    if (err)
      res.send(err);
    res.json(course);
  });
};

exports.delete_a_Courses = function(req, res) {
  Course.remove({
    _id: req.params.taskId
  }, function(err, course) {
    if (err)
      res.send(err);
    res.json({ message: 'Course successfully deleted' });
  });
};Y


exports.getNextSequence = function(name) {
  var ret = Course.findAndModify(
         {
           query: { courseid : name },
           update: { $inc: { seq: 1 } },
           new: true,
           upsert: true
         }
  );

  return ret.seq;
}