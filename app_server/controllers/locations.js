var homeList = function () {
    res.render('file', {
        title: ""
    })
};

var locationInfo = function () {
    res.render('file', {
        title: ""
    })
};

var addReview = function () {
    res.render('file.?', {
        title: "o valoare de titlu"
    })
};




module.exports = {
    locationInfo,
    homeList,
    addReview
}