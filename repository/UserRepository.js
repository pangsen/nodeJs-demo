/**
 * Created by hp5 on 10/18/2014.
 */
var mongoose =require("mongoose")
exports.connect = function(callback) {
    mongoose.connect("mongodb://localhost/local");
}
var Schema=mongoose.Schema;
var UserSchema=new Schema({
    userName:String,
    password:String,
    age:Number
})
mongoose.model("User",UserSchema);
var User = mongoose.model('User');
exports.add=function(name,password){
    var user=new User();
    user.userName=name;
    user.password=password;
    user.save(function(err){
        if(err){
            console.log("Add user error");
        }else{
            console.log("Add user success");
        }
    })
}
exports.getAll=function(callback){
    User.find({},callback);
}
exports.checkExit=function(name,password,callback){
    User.find({userName:name,password:password},callback);
}

