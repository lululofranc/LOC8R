var express = require('express');
var router = express.Router();

var ctrl = require('../controllers/main')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//router.get('/',homePage_controller);
router.get('/',ctrl.homePage_Controller);


// router.get('/test',(req,res,err)=>{
//   // res.send('Test');
//   //res.render('index',{title: 'Test Title'})
//   testPage_Controller(req,res)
// });

//router.get('/test',testPage_Controller);
router.get('/test',ctrl.testPage_Controller);


module.exports = router;
