var mongoose = require('mongoose');
var wadul = require('faker/locale/id_ID');
var Schema = mongoose.Schema;

// mongoose.connect('mongodb://127.0.0.1/produk');
mongoose.connect('mongodb://dbrest:restdatabase@ds031965.mlab.com:31965/dbscript');

console.log(wadul.address.county());

var model = new Schema({
  nama: String,
  email: String,
  userName: String,
  alamat: {
    jalan: String,
    provinsi: String,
    kota: String,
    kodePos: Number
  },
  telepon: String
});


// for (var i = 15; i >= 0; i--) {

//   console.log(wadul.helpers.userCard());
// }

var comm = wadul.commerce;

var userModel = mongoose.model('user', model, 'user');

var name = wadul.name;
var address = wadul.address;
var phone = wadul.phone;
var inet = wadul.internet;
var phone = wadul.phone;

// userModel.find((err, data) => {
//   console.log(data);
// })

for (var i = 55; i >= 0; i--) {
  var newUserModel = new userModel({
    nama: name.findName(),
    email: inet.email(),
    userName: inet.userName(),
    alamat: {
      jalan: address.streetName(),
      provinsi: address.county(),
      kota: address.city(),
      kodePos: address.zipCode()
    },
    telepon: phone.phoneNumberFormat()
  })

  newUserModel.save((err) => {
    console.log(err);
  })
}