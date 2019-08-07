var MyAbout = require('../model/AboutModel');

module.exports = function (app) {

    app.post('/About/views', function (req, res) {    //  Not Controller
        MyAbout.getAboutBy(req.body, function (err, MyAbout) {
            console.log('controller');
            if (err)
                res.send(err);
            //console.log('res', MyAbout);
            res.send(MyAbout);
        });
    })
    app.post('/About/get', function (req, res) {    //  Not Controller
        
        MyAbout.getAboutByCode(req.body, function (err, MyAbout) {
            
            if (err)
                res.send(err);
            //console.log('res', MyAbout);
            res.send(MyAbout);
        });
    })
    app.post('/About/insert', function (req, res) {    //  Not Controller
        console.log(req.body.About_code);
        
        MyAbout.insertAboutBy(req.body, function (err, MyAbout) {
            
            if (err)
                res.send(err);
            //console.log('res', MyAbout);
            res.send(MyAbout);
        });
    })
    app.post('/About/update', function (req, res) {    //  Not Controller
        MyAbout.updateAboutBy(req.body, function (err, MyAbout) {
            console.log('controller')
            if (err)
                res.send(err);
            //console.log('res', MyAbout);
            res.send(MyAbout);
        });
    })
    app.post('/About/update/latest', function (req, res) {    //  Not Controller
        MyAbout.latestAboutBy(req.body, function (err, MyAbout) {
            console.log('controller')
            if (err)
                res.send(err);
            //console.log('res', MyAbout);
            res.send(MyAbout);
        });
    })
    app.post('/About/delete', function (req, res) {    //  Not Controller
        MyAbout.deleteAboutBy(req.body, function (err, MyAbout) {
            if (err)
                res.send(err);
            //console.log('res', MyAbout);
            res.send(MyAbout);
        });
    })
    

};



