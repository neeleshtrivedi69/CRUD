var mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
  name: String,
  address: String,
  position: String,
  salary: { type: Number,
            validate(value){
              if (value<0){
                throw new Error ('salary must be a positive no.')
              }
            }
          },
  mail: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
