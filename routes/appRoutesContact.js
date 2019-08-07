var MyContact = require('../model/ContactModel');



module.exports = function (app) {

    app.post('/contact/views', function (req, res) {    //  Not Controller
        MyContact.getContactBy(req.body, function (err, MyContact) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyContact);
            res.send(MyContact);
        });
    })
    app.post('/contact/get', function (req, res) {    //  Not Controller
        
        MyContact.getContactByCode(req.body, function (err, MyContact) {
            
            if (err)
                res.send(err);
            console.log('res', MyContact);
            res.send(MyContact);
        });
    })
    app.post('/contact/insert', function (req, res) {    //  Not Controller
        console.log(req.body.contact_code);
        
        MyContact.insertContactBy(req.body, function (err, MyContact) {
            
            if (err)
                res.send(err);
            console.log('res', MyContact);
            res.send(MyContact);
        });
    })
    app.post('/contact/update', function (req, res) {    //  Not Controller
        MyContact.updateContactBy(req.body, function (err, MyContact) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyContact);
            res.send(MyContact);
        });
    })
    app.post('/contact/update/latest', function (req, res) {    //  Not Controller
        MyContact.latestContactBy(req.body, function (err, MyContact) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyContact);
            res.send(MyContact);
        });
    })
    app.post('/contact/delete', function (req, res) {    //  Not Controller
        MyContact.deleteContactBy(req.body, function (err, MyContact) {
            if (err)
                res.send(err);
            console.log('res', MyContact);
            res.send(MyContact);
        });
    })
    app.post('/contact/code', function (req, res) {    //  Not Controller
        MyContact.getContactByMaxCode(req.body, function (err, MyContact) {
            if (err)
                res.send(err);
            res.send(MyContact);
        });
    })

};



