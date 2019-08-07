var MyMarketSubType = require('../model/MarketSubTypeModel');

module.exports = function (app) {

    app.post('/market_subtype/views', function (req, res) {    //  Not Controller
        MyMarketSubType.getMarketSubTypeBy(req.body, function (err, MyMarketSubType) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyMarketSubType);
            res.send(MyMarketSubType);
        });
    })
    app.post('/market_subtype/get', function (req, res) {    //  Not Controller
        
        MyMarketSubType.getMarketSubTypeByCode(req.body, function (err, MyMarketSubType) {
            
            if (err)
                res.send(err);
            console.log('res', MyMarketSubType);
            res.send(MyMarketSubType);
        });
    })
    app.post('/market_subtype/insert', function (req, res) {    //  Not Controller
        console.log(req.body.market_subtype_code);
        
        MyMarketSubType.insertMarketSubTypeBy(req.body, function (err, MyMarketSubType) {
            
            if (err)
                res.send(err);
            console.log('res', MyMarketSubType);
            res.send(MyMarketSubType);
        });
    })
    app.post('/market_subtype/update', function (req, res) {    //  Not Controller
        MyMarketSubType.updateMarketSubTypeBy(req.body, function (err, MyMarketSubType) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyMarketSubType);
            res.send(MyMarketSubType);
        });
    })
    app.post('/market_subtype/update/latest', function (req, res) {    //  Not Controller
        MyMarketSubType.latestMarketSubTypeBy(req.body, function (err, MyMarketSubType) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyMarketSubType);
            res.send(MyMarketSubType);
        });
    })
    app.post('/market_subtype/delete', function (req, res) {    //  Not Controller
        MyMarketSubType.deleteMarketSubTypeBy(req.body, function (err, MyMarketSubType) {
            if (err)
                res.send(err);
            console.log('res', MyMarketSubType);
            res.send(MyMarketSubType);
        });
    })
    app.post('/market_subtype/get_type', function (req, res) {    //  Not Controller
        
        MyMarketSubType.getMarketSubTypeByType(req.body, function (err, MyMarketSubType) {
            
            if (err)
                res.send(err);
            console.log('res', MyMarketSubType);
            res.send(MyMarketSubType);
        });
    })
    app.post('/market_subtype/code', function (req, res) {    //  Not Controller
        MyMarketSubType.getMarketSubTypeByMaxCode(req.body, function (err, MyMarketSubType) {
            if (err)
                res.send(err);
            res.send(MyMarketSubType);
        });
    })
};



