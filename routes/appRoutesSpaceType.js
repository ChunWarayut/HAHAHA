var MySpaceType = require('../model/SpaceTypeModel');

module.exports = function (app) {

    app.post('/space_type/views', function (req, res) {    //  Not Controller
        MySpaceType.getSpaceTypeBy(req.body, function (err, MySpaceType) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MySpaceType);
            res.send(MySpaceType);
        });
    })
    app.post('/space_type/get', function (req, res) {    //  Not Controller
        
        MySpaceType.getSpaceTypeByCode(req.body, function (err, MySpaceType) {
            
            if (err)
                res.send(err);
            console.log('res', MySpaceType);
            res.send(MySpaceType);
        });
    })
    app.post('/space_type/insert', function (req, res) {    //  Not Controller
        console.log(req.body.space_type_code);
        
        MySpaceType.insertSpaceTypeBy(req.body, function (err, MySpaceType) {
            
            if (err)
                res.send(err);
            console.log('res', MySpaceType);
            res.send(MySpaceType);
        });
    })
    app.post('/space_type/update', function (req, res) {    //  Not Controller
        MySpaceType.updateSpaceTypeBy(req.body, function (err, MySpaceType) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MySpaceType);
            res.send(MySpaceType);
        });
    })
    app.post('/space_type/update/latest', function (req, res) {    //  Not Controller
        MySpaceType.latestSpaceTypeBy(req.body, function (err, MySpaceType) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MySpaceType);
            res.send(MySpaceType);
        });
    })
    app.post('/space_type/delete', function (req, res) {    //  Not Controller
        MySpaceType.deleteSpaceTypeBy(req.body, function (err, MySpaceType) {
            if (err)
                res.send(err);
            console.log('res', MySpaceType);
            res.send(MySpaceType);
        });
    })
    app.post('/space_type/code', function (req, res) {    //  Not Controller
        MySpaceType.getSpaceTypeByMaxCode(req.body, function (err, MySpaceType) {
            if (err)
                res.send(err);
            res.send(MySpaceType);
        });
    })

};



