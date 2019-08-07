var MyAlbumEvents = require('../model/AlbumEventsModel');



module.exports = function (app) {

    app.post('/album_events/views', function (req, res) {    //  Not Controller
        MyAlbumEvents.getAlbumEventsBy(req.body, function (err, MyAlbumEvents) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyAlbumEvents);
            res.send(MyAlbumEvents);
        });
    })
    app.post('/album_events/code', function (req, res) {    //  Not Controller
        
        MyAlbumEvents.getAlbumEventsByCode(req.body, function (err, MyAlbumEvents) {
            if (err)
                res.send(err);
            console.log('res', MyAlbumEvents);

            res.send(MyAlbumEvents);
        });
    })
    app.post('/album_events/list', function (req, res) {    //  Not Controller
        
        MyAlbumEvents.getAlbumEventsByList(req.body, function (err, MyAlbumEvents) {
            if (err)
                res.send(err);
            res.send(MyAlbumEvents);
        });
    })
    app.post('/album_events/insert', function (req, res) {    //  Not Controller
        console.log("asdsad",req);
        
        MyAlbumEvents.insertAlbumEventsBy(req.body, function (err, MyAlbumEvents) {
            
            if (err)
                res.send(err);
            console.log('res', MyAlbumEvents);
            res.send(MyAlbumEvents);
        });
    })
    app.post('/album_events/update', function (req, res) {    //  Not Controller
        MyAlbumEvents.updateAlbumEventsBy(req.body, function (err, MyAlbumEvents) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyAlbumEvents);
            res.send(MyAlbumEvents);
        });
    })
    app.post('/album_events/delete', function (req, res) {    //  Not Controller
        MyAlbumEvents.deleteAlbumEventsBy(req.body, function (err, MyAlbumEvents) {
            if (err)
                res.send(err);
            res.send(MyAlbumEvents);
        });
    })
    app.post('/album_events/code', function (req, res) {    //  Not Controller
        MyAlbumEvents.getAlbumEventsByMaxCode(req.body, function (err, MyAlbumEvents) {
            if (err)
                res.send(err);
            res.send(MyAlbumEvents);
        });
    })
};



