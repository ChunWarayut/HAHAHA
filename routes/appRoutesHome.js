var MyHome = require('../model/HomeModel');

module.exports = function (app) {

    app.post('/home/views', function (req, res) {    //  Not Controller
        MyHome.getHomeBy(req.body, function (err, MyHome) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyHome);
            res.send(MyHome);
        });
    })
    app.post('/home/get', function (req, res) {    //  Not Controller
        
        MyHome.getHomeByCode(req.body, function (err, MyHome) {
            
            if (err)
                res.send(err);
            console.log('res', MyHome);
            res.send(MyHome);
        });
    })
    app.post('/home/insert', function (req, res) {    //  Not Controller
        console.log(req.body.home_code);
        
        MyHome.insertHomeBy(req.body, function (err, MyHome) {
            
            if (err)
                res.send(err);
            console.log('res', MyHome);
            res.send(MyHome);
        });
    })
    app.post('/home/update', function (req, res) {    //  Not Controller
        MyHome.updateHomeBy(req.body, function (err, MyHome) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyHome);
            res.send(MyHome);
        });
    })
    app.post('/home/update/latest', function (req, res) {    //  Not Controller
        MyHome.latestHomeBy(req.body, function (err, MyHome) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyHome);
            res.send(MyHome);
        });
    })
    app.post('/home/delete', function (req, res) {    //  Not Controller
        MyHome.deleteHomeBy(req.body, function (err, MyHome) {
            if (err)
                res.send(err);
            console.log('res', MyHome);
            res.send(MyHome);
        });
    })
    

};



