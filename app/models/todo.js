var mongoose = require('mongoose');
var todoSchema = {
  text: {
      type: String,
      default: ''
  },
  date: {
      type: String,
      default: ''
  },
  isDone: {
      type: Boolean,
      default: false
  }
}
module.exports = mongoose.model('Todo', todoSchema);
