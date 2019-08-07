var MyAlbumMarket = require('../model/AlbumMarketModel');



module.exports = function (app) {

    app.post('/album_market/views', function (req, res) {    //  Not Controller
        MyAlbumMarket.getAlbumMarketBy(req.body, function (err, MyAlbumMarket) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyAlbumMarket);
            res.send(MyAlbumMarket);
        });
    })
    app.post('/album_market/list', function (req, res) {    //  Not Controller
        
        MyAlbumMarket.getAlbumMarketByList(req.body, function (err, MyAlbumMarket) {
            if (err)
                res.send(err);
            res.send(MyAlbumMarket);
        });
    })
    app.post('/album_market/code', function (req, res) {    //  Not Controller
        
        MyAlbumMarket.getAlbumMarketByCode(req.body, function (err, MyAlbumMarket) {
            if (err)
                res.send(err);
            console.log('res', MyAlbumMarket);

            res.send(MyAlbumMarket);
        });
    })
    app.post('/album_market/insert', function (req, res) {    //  Not Controller
        console.log("asdsad",req);
        
        MyAlbumMarket.insertAlbumMarketBy(req.body, function (err, MyAlbumMarket) {
            
            if (err)
                res.send(err);
            console.log('res', MyAlbumMarket);
            res.send(MyAlbumMarket);
        });
    })
    app.post('/album_market/update', function (req, res) {    //  Not Controller
        MyAlbumMarket.updateAlbumMarketBy(req.body, function (err, MyAlbumMarket) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyAlbumMarket);
            res.send(MyAlbumMarket);
        });
    })
    app.post('/album_market/delete', function (req, res) {    //  Not Controller
        MyAlbumMarket.deleteAlbumMarketBy(req.body, function (err, MyAlbumMarket) {
            if (err)
                res.send(err);
            res.send(MyAlbumMarket);
        });
    })
    app.post('/album_market/code', function (req, res) {    //  Not Controller
        MyAlbumMarket.getAlbumMarketByMaxCode(req.body, function (err, MyAlbumMarket) {
            if (err)
                res.send(err);
            res.send(MyAlbumMarket);
        });
    })
};



