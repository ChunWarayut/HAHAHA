var MyMarket = require('../model/MarketModel');

module.exports = function (app) {

    app.post('/market/views', function (req, res) {    //  Not Controller
        MyMarket.getMarketBy(req.body, function (err, MyMarket) {
            console.log('controller');
            if (err)
                res.send(err);
            
            res.send(MyMarket);
        });
    })
    app.post('/market/get', function (req, res) {    //  Not Controller
        
        MyMarket.getMarketByCode(req.body, function (err, MyMarket) {
            
            if (err)
                res.send(err);
            res.send(MyMarket);
        });
    })
    app.post('/market/list', function (req, res) {    //  Not Controller
        
        MyMarket.getMarketByList(req.body, function (err, MyMarket) {
            
            if (err)
                res.send(err);
            res.send(MyMarket);
        });
    })
    app.post('/market/search', function (req, res) {    //  Not Controller
        
        MyMarket.getMarketBySearch(req.body, function (err, MyMarket) {
            
            if (err)
                res.send(err);
            
            res.send(MyMarket);
        });
    })
    app.post('/market/insert', function (req, res) {    //  Not Controller
        console.log(req.body.market_code);
        
        MyMarket.insertMarketBy(req.body, function (err, MyMarket) {
            
            if (err)
                res.send(err);
            
            res.send(MyMarket);
        });
    })
    app.post('/market/update', function (req, res) {    //  Not Controller
        MyMarket.updateMarketBy(req.body, function (err, MyMarket) {
            console.log('controller')
            if (err)
                res.send(err);
            
            res.send(MyMarket);
        });
    })
    app.post('/market/update/latest', function (req, res) {    //  Not Controller
        MyMarket.latestMarketBy(req.body, function (err, MyMarket) {
            console.log('controller')
            if (err)
                res.send(err);
            
            res.send(MyMarket);
        });
    })
    app.post('/market/delete', function (req, res) {    //  Not Controller
        MyMarket.deleteMarketBy(req.body, function (err, MyMarket) {
            console.log("19997",MyMarket);
            
            if (err)
                res.send(err);
            
            res.send(MyMarket);
        });
    })
    app.post('/market/code', function (req, res) {    //  Not Controller
        MyMarket.getMarketByMaxCode(req.body, function (err, MyMarket) {
            if (err)
                res.send(err);
            res.send(MyMarket);
        });
    })

};



