'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CoursesSchema = new Schema({
 courseid:{
     type:String
 },
 code: {
    type: String,
    required: 'Kindly enter the name of the course'
  },
  content1:{
      type:String
  },
  content2:{
    type:String
  },
  creditFee:{
    type:Number  
  },
  endDate:{
    type:Date,
    default: Date.now
  },
  featuredImage:{
    type:String
  },
  fees:{
    type:String
  },
  level:{
    type:String
  },
  registrationFee:{
    type:Number
  },
  requirements:{
    type:String
  },
  slug:{
    type:String
  },
  startDate:{
    type:Date,
    default:Date.now
  },  
  subjects:{
      type:[{type:String}]
  },
  title:{
    type:String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }, 
  status: {
    type: [{
      type: String,
      enum: ['pending', 'active', 'completed']
    }],
    default: ['active']
  }
});

module.exports = mongoose.model('Courses', CoursesSchema);