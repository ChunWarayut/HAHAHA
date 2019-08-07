var MyMarketType = require('../model/MarketTypeModel');

module.exports = function (app) {

    app.post('/market_type/views', function (req, res) {    //  Not Controller
        MyMarketType.getMarketTypeBy(req.body, function (err, MyMarketType) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyMarketType);
            res.send(MyMarketType);
        });
    })
    app.post('/market_type/get', function (req, res) {    //  Not Controller
        
        MyMarketType.getMarketTypeByCode(req.body, function (err, MyMarketType) {
            
            if (err)
                res.send(err);
            console.log('res', MyMarketType);
            res.send(MyMarketType);
        });
    })
    app.post('/market_type/insert', function (req, res) {    //  Not Controller
        console.log(req.body.market_type_code);
        
        MyMarketType.insertMarketTypeBy(req.body, function (err, MyMarketType) {
            
            if (err)
                res.send(err);
            console.log('res', MyMarketType);
            res.send(MyMarketType);
        });
    })
    app.post('/market_type/update', function (req, res) {    //  Not Controller
        MyMarketType.updateMarketTypeBy(req.body, function (err, MyMarketType) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyMarketType);
            res.send(MyMarketType);
        });
    })
    app.post('/market_type/update/latest', function (req, res) {    //  Not Controller
        MyMarketType.latestMarketTypeBy(req.body, function (err, MyMarketType) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyMarketType);
            res.send(MyMarketType);
        });
    })
    app.post('/market_type/delete', function (req, res) {    //  Not Controller
        MyMarketType.deleteMarketTypeBy(req.body, function (err, MyMarketType) {
            if (err)
                res.send(err);
            console.log('res', MyMarketType);
            res.send(MyMarketType);
        });
    })
    app.post('/market_type/code', function (req, res) {    //  Not Controller
        MyMarketType.getMarketTypeByMaxCode(req.body, function (err, MyMarketType) {
            if (err)
                res.send(err);
            res.send(MyMarketType);
        });
    })

};



