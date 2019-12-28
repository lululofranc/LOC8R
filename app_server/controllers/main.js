var testPage_Controller = function (req, res, err) {
    res.render('index', {
        title: 'Test Title Heroku with Github 2 with function'
    }) // index => ..app_server/views/index.jade = template 
};


var homePage_Controller = function (req, res, err) {
    res.render('index', {
        title: "My Controled on Github 2 Heroku - Home Page "
    })
};

module.exports = {
    testPage_Controller,
    homePage_Controller
};