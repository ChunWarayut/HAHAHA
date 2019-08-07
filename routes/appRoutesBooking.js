var MyBooking = require('../model/BookingModel');



module.exports = function (app) {

    app.post('/booking/views', function (req, res) {    //  Not Controller
        MyBooking.getBookingBy(req.body, function (err, MyBooking) {
            console.log('controller');
            if (err)
                res.send(err);
            
            res.send(MyBooking);
        });
    })
    app.post('/booking/get', function (req, res) {    //  Not Controller
        
        MyBooking.getBookingByCode(req.body, function (err, MyBooking) {
            
            if (err)
                res.send(err);
            
            res.send(MyBooking);
        });
    })
    app.post('/booking/insert', function (req, res) {    //  Not Controller
        console.log(req.body.booking_code);
        
        MyBooking.insertBookingBy(req.body, function (err, MyBooking) {
            
            if (err)
                res.send(err);
            
            res.send(MyBooking);
        });
    })
    app.post('/booking/update', function (req, res) {    //  Not Controller
        MyBooking.updateBookingBy(req.body, function (err, MyBooking) {
            console.log('controller')
            if (err)
                res.send(err);
            
            res.send(MyBooking);
        });
    })
    app.post('/booking/update/latest', function (req, res) {    //  Not Controller
        // console.log(req);
        // console.log(res);

        
        MyBooking.latestBookingBy(req.body, function (err, MyBooking) {
            console.log('controller')
            if (err)
                res.send(err);
            res.send(MyBooking);
        });
    })
    app.post('/booking/delete', function (req, res) {    //  Not Controller
        MyBooking.deleteBookingBy(req.body, function (err, MyBooking) {
            if (err)
                res.send(err);
            res.send(MyBooking);
        });
    })
    app.post('/booking/code', function (req, res) {    //  Not Controller
        MyBooking.getBookingByMaxCode(req.body, function (err, MyBooking) {
            if (err)
                res.send(err);
            res.send(MyBooking);
        });
    })

};



