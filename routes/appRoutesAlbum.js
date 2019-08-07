var MyAlbum = require('../model/AlbumModel');



module.exports = function (app) {

    app.post('/album/views', function (req, res) {    //  Not Controller
        MyAlbum.getAlbumBy(req.body, function (err, MyAlbum) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyAlbum);
            res.send(MyAlbum);
        });
    })
    app.post('/album/get/views', function (req, res) {    //  Not Controller
        console.log("req",req);
        
        MyAlbum.getAlbumByCode(req.body, function (err, MyAlbum) {
            console.log('req',req)
            if (err)
                res.send(err);
            console.log('res', MyAlbum);
            res.send(MyAlbum);
        });
    })
    app.post('/album/insert', function (req, res) {    //  Not Controller
        console.log("asdsad",req);
        
        MyAlbum.insertAlbumBy(req.body, function (err, MyAlbum) {
            
            if (err)
                res.send(err);
            console.log('res', MyAlbum);
            res.send(MyAlbum);
        });
    })
    app.post('/album/update', function (req, res) {    //  Not Controller
        MyAlbum.updateAlbumBy(req.body, function (err, MyAlbum) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyAlbum);
            res.send(MyAlbum);
        });
    })
    app.post('/album/update/latest', function (req, res) {    //  Not Controller
        MyAlbum.latestAlbumBy(req.body, function (err, MyAlbum) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyAlbum);
            res.send(MyAlbum);
        });
    })
    app.post('/album/delete', function (req, res) {    //  Not Controller
        MyAlbum.deleteAlbumBy(req.body, function (err, MyAlbum) {
            if (err)
                res.send(err);
            console.log('res', MyAlbum);
            res.send(MyAlbum);
        });
    })
    app.post('/album/code', function (req, res) {    //  Not Controller
        MyAlbum.getAlbumByMaxCode(req.body, function (err, MyAlbum) {
            if (err)
                res.send(err);
            res.send(MyAlbum);
        });
    })
    

};



