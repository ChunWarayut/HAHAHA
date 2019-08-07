var MySpace = require('../model/SpaceModel');

module.exports = function (app) {

    app.post('/space/views', function (req, res) {    //  Not Controller
        MySpace.getSpaceBy(req.body, function (err, MySpace) {
            ;
            if (err)
                res.send(err);
            
            res.send(MySpace);
        });
    })
    app.post('/space/getCode', function (req, res) {    //  Not Controller
        
        MySpace.getSpaceByCode(req.body, function (err, MySpace) {
            
            if (err)
                res.send(err);
            res.send(MySpace);
        });
    })
    app.post('/space/search', function (req, res) {    //  Not Controller
        MySpace.getSpaceBySearch(req.body, function (err, MySpace) {
            
            if (err)
                res.send(err);
            
            res.send(MySpace);
        });
    })
    app.post('/space/get/Latest', function (req, res) {    //  Not Controller
        
        MySpace.getSpaceByLatest(req.body, function (err, MySpace) {
            
            if (err)
                res.send(err);
            
            res.send(MySpace);
        });
    })
    app.post('/space/get/sport', function (req, res) {    //  Not Controller
        
        MySpace.getSpaceBySport(req.body, function (err, MySpace) {
            
            if (err)
                res.send(err);
            
            res.send(MySpace);
        });
    })
    app.post('/space/get/activity', function (req, res) {    //  Not Controller
        
        MySpace.getSpaceByActivity(req.body, function (err, MySpace) {
            
            if (err)
                res.send(err);
            
            res.send(MySpace);
        });
    })
    app.post('/space/get/business', function (req, res) {    //  Not Controller
        
        MySpace.getSpaceByBusiness(req.body, function (err, MySpace) {
            
            if (err)
                res.send(err);
            
            res.send(MySpace);
        });
    })
    app.post('/space/insert', function (req, res) {    //  Not Controller
        
        MySpace.insertSpaceBy(req.body, function (err, MySpace) {
            
            if (err)
                res.send(err);
            res.send(MySpace);
        });
    })
    app.post('/space/update', function (req, res) {    //  Not Controller
        MySpace.updateSpaceBy(req.body, function (err, MySpace) {
            
            if (err)
                res.send(err);
            res.send(MySpace);
        });
    })
    app.post('/space/update/latest', function (req, res) {    //  Not Controller
        MySpace.latestSpaceBy(req.body, function (err, MySpace) {
            
            if (err)
                res.send(err);
            res.send(MySpace);
        });
    })
    app.post('/space/delete', function (req, res) {    //  Not Controller
        MySpace.deleteSpaceBy(req.body, function (err, MySpace) {
            if (err)
                res.send(err);
            res.send(MySpace);
        });
    })
    app.post('/space/code', function (req, res) {    //  Not Controller
        MySpace.getSpaceByMaxCode(req.body, function (err, MySpace) {
            if (err)
                res.send(err);
            res.send(MySpace);
        });
    })
    

};



