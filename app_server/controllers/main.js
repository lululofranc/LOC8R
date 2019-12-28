var testPage_Controller = function (req, res, err) {
    res.render('index', {
        title: 'Test Title
    }) // index => ..app_server/views/index.jade = template 
};


var homePage_Controller = function (req, res, err) {
    res.render('index', {
        title: "My Home Page "
    })
};

module.exports = {
    testPage_Controller,
    homePage_Controller
};