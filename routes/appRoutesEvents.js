var MyEvents = require('../model/EventsModel');

module.exports = function (app) {

    app.post('/events/views', function (req, res) {    //  Not Controller
        MyEvents.getEventsBy(req.body, function (err, MyEvents) {
            console.log('controller');
            if (err)
                res.send(err);
            // console.log('res', MyEvents);
            res.send(MyEvents);
        });
    })

    app.post('/events/date', function (req, res) {    //  Not Controller
        MyEvents.getEventsByDate(req.body, function (err, MyEvents) {
            // console.log('controller');
            if (err)
                res.send(err);
            // console.log('res', MyEvents);
            res.send(MyEvents);
        });
    })

    app.post('/events/seven', function (req, res) {    //  Not Controller
        MyEvents.getEventsByDateNew(req.body, function (err, MyEvents) {
            // console.log('controller');
            if (err)
                res.send(err);
            // console.log('res', MyEvents);
            res.send(MyEvents);
        });
    })

    app.post('/events/get', function (req, res) {    //  Not Controller
        
        MyEvents.getEventsByCode(req.body, function (err, MyEvents) {
            
            if (err)
                res.send(err);
            console.log('res', MyEvents);
            res.send(MyEvents);
        });
    })
    app.post('/events/list', function (req, res) {    //  Not Controller
        
        MyEvents.getEventsByList(req.body, function (err, MyEvents) {
            
            if (err)
                res.send(err);
            res.send(MyEvents);
        });
    })
    app.post('/events/insert', function (req, res) {    //  Not Controller
        console.log(req.body.events_code);
        
        MyEvents.insertEventsBy(req.body, function (err, MyEvents) {
            
            if (err)
                res.send(err);
            console.log('res', MyEvents);
            res.send(MyEvents);
        });
    })
    app.post('/events/update', function (req, res) {    //  Not Controller
        MyEvents.updateEventsBy(req.body, function (err, MyEvents) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyEvents);
            res.send(MyEvents);
        });
    })
    app.post('/events/update/latest', function (req, res) {    //  Not Controller
        MyEvents.latestEventsBy(req.body, function (err, MyEvents) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyEvents);
            res.send(MyEvents);
        });
    })
    app.post('/events/delete', function (req, res) {    //  Not Controller
        MyEvents.deleteEventsBy(req.body, function (err, MyEvents) {
            if (err)
                res.send(err);
            console.log('res', MyEvents);
            res.send(MyEvents);
        });
    })
    app.post('/events/code', function (req, res) {    //  Not Controller
        MyEvents.getEventsByMaxCode(req.body, function (err, MyEvents) {
            if (err)
                res.send(err);
            res.send(MyEvents);
        });
    })
    

};



