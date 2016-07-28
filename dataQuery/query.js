var mongoose = require('mongoose');
var schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/waw');

var preModel = new schema({
  nama: String
})

var model = mongoose.model('test', preModel, 'test');

module.exports = (data, callback) => {
  console.log(data);
  var da = new model({
    nama: data
  })
  model.find((err, data) => {

    return callback(err, data)
  })
}