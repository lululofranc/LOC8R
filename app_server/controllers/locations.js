var homeList = function (req,res,err) {
    res.render('index', {
        title: "Home List"
    })
};

var locationInfo = function (req,res,err) {
    res.render('index', {
        title: "Location Info"
    })
};

var addReview = function (req,res,err) {
    res.render('index', {
        title: "Add review about locations ..."
    })
};




module.exports = {
    locationInfo,
    homeList,
    addReview
}