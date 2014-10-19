var userRepository = require("../repository/UserRepository.js")
var express = require('express');
var router = express.Router();
userRepository.connect(function (xx) {
    console.log(xx);
})
/* GET home page. */
router.get('/', function (req, res) {
    res.render('login');
});
router.post('/login', function (req, res) {
    userRepository.checkExit(req.body.userName, req.body.password, function (err, result) {
        console.log(result);
        if (result.length > 0) {
            res.json({success: true});
        } else {
            res.json({success: false, errorMessage: "User name or password is not current!"});
        }
    })
});
router.get('/register', function (req, res) {
    res.render('register');
});

router.post('/register', function (req, res) {
    userRepository.add(req.body.userName, req.body.password);
    res.json({success: true});
});

router.get('/user/all', function (req, res) {
    userRepository.getAll(function (err, data) {
        console.log(data);
        res.render("user", {users: data});
    });
});
router.get('/user/delete', function (req, res) {
    userRepository.delete(req.query.id,function (err, data) {
        res.json({success:true});
    });
});
router.post('/user/update', function (req, res) {
    userRepository.update(req.body,function (err, data) {
        res.json({success:true});
    });
});
module.exports = router;
