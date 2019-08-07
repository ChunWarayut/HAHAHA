var MyAlbumSpace = require('../model/AlbumSpaceModel');



module.exports = function (app) {

    app.post('/album_space/views', function (req, res) {    //  Not Controller
        MyAlbumSpace.getAlbumSpaceBy(req.body, function (err, MyAlbumSpace) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyAlbumSpace);
            res.send(MyAlbumSpace);
        });
    })
    app.post('/album_space/code', function (req, res) {    //  Not Controller
        
        MyAlbumSpace.getAlbumSpaceByCode(req.body, function (err, MyAlbumSpace) {
            if (err)
                res.send(err);
            console.log('res', MyAlbumSpace);

            res.send(MyAlbumSpace);
        });
    })
    app.post('/album_space/list', function (req, res) {    //  Not Controller
        console.log("req",req);
        
        MyAlbumSpace.getAlbumSpaceByList(req.body, function (err, MyAlbumSpace) {
            console.log('req',req)
            if (err)
                res.send(err);
            console.log('res', MyAlbumSpace);
            res.send(MyAlbumSpace);
        });
    })
    app.post('/album_space/insert', function (req, res) {    //  Not Controller
        console.log("asdsad",req);
        
        MyAlbumSpace.insertAlbumSpaceBy(req.body, function (err, MyAlbumSpace) {
            
            if (err)
                res.send(err);
            console.log('res', MyAlbumSpace);
            res.send(MyAlbumSpace);
        });
    })
    app.post('/album_space/update', function (req, res) {    //  Not Controller
        MyAlbumSpace.updateAlbumSpaceBy(req.body, function (err, MyAlbumSpace) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyAlbumSpace);
            res.send(MyAlbumSpace);
        });
    })
    app.post('/album_space/delete', function (req, res) {    //  Not Controller
        MyAlbumSpace.deleteAlbumSpaceBy(req.body, function (err, MyAlbumSpace) {
            if (err)
                res.send(err);
            res.send(MyAlbumSpace);
        });
    })
    app.post('/album_space/code', function (req, res) {    //  Not Controller
        MyAlbumSpace.getAlbumSpaceByMaxCode(req.body, function (err, MyAlbumSpace) {
            if (err)
                res.send(err);
            res.send(MyAlbumSpace);
        });
    })
};



