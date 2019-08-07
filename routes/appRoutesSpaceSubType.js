var MySpaceSubType = require('../model/SpaceSubTypeModel');

module.exports = function (app) {

    app.post('/space_subtype/views', function (req, res) {    //  Not Controller
        MySpaceSubType.getSpaceSubTypeBy(req.body, function (err, MySpaceSubType) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MySpaceSubType);
            res.send(MySpaceSubType);
        });
    })
    app.post('/space_subtype/get', function (req, res) {    //  Not Controller
        
        MySpaceSubType.getSpaceSubTypeByCode(req.body, function (err, MySpaceSubType) {
            
            if (err)
                res.send(err);
            console.log('res', MySpaceSubType);
            res.send(MySpaceSubType);
        });
    })
    app.post('/space_subtype/insert', function (req, res) {    //  Not Controller
        console.log(req.body.space_subtype_code);
        
        MySpaceSubType.insertSpaceSubTypeBy(req.body, function (err, MySpaceSubType) {
            
            if (err)
                res.send(err);
            console.log('res', MySpaceSubType);
            res.send(MySpaceSubType);
        });
    })
    app.post('/space_subtype/update', function (req, res) {    //  Not Controller
        MySpaceSubType.updateSpaceSubTypeBy(req.body, function (err, MySpaceSubType) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MySpaceSubType);
            res.send(MySpaceSubType);
        });
    })
    app.post('/space_subtype/update/latest', function (req, res) {    //  Not Controller
        MySpaceSubType.latestSpaceSubTypeBy(req.body, function (err, MySpaceSubType) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MySpaceSubType);
            res.send(MySpaceSubType);
        });
    })
    app.post('/space_subtype/delete', function (req, res) {    //  Not Controller
        MySpaceSubType.deleteSpaceSubTypeBy(req.body, function (err, MySpaceSubType) {
            if (err)
                res.send(err);
            console.log('res', MySpaceSubType);
            res.send(MySpaceSubType);
        });
    })
    app.post('/space_subtype/get_type', function (req, res) {    //  Not Controller
        
        MySpaceSubType.getSpaceSubTypeByType(req.body, function (err, MySpaceSubType) {
            
            if (err)
                res.send(err);
            console.log('res', MySpaceSubType);
            res.send(MySpaceSubType);
        });
    })
    app.post('/space_subtype/code', function (req, res) {    //  Not Controller
        MySpaceSubType.getSpaceSubTypeByMaxCode(req.body, function (err, MySpaceSubType) {
            if (err)
                res.send(err);
            res.send(MySpaceSubType);
        });
    })
};



