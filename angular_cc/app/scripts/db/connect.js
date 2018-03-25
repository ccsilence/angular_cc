var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/newDB');

var schema = new mongoose.Schema({
    email:String,
    password:number,
    confirmpassword:number
});

var model = mongoose.model('Users', schema);
console.log("测试");
console.log(model);



