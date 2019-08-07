var MyAdmin = require('../model/AdminModel');

module.exports = function (app) {

    app.post('/admin/views', function (req, res) {    //  Not Controller
        MyAdmin.getAdminBy(req.body, function (err, MyAdmin) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyAdmin);
            res.send(MyAdmin);
        });
    })
    app.post('/admin/get', function (req, res) {    //  Not Controller
        
        MyAdmin.getAdminByCode(req.body, function (err, MyAdmin) {
            
            if (err)
                res.send(err);
            console.log('res', MyAdmin);
            res.send(MyAdmin);
        });
    })
    app.post('/admin/insert', function (req, res) {    //  Not Controller
        console.log(req.body.admin_code);
        
        MyAdmin.insertAdminBy(req.body, function (err, MyAdmin) {
            
            if (err)
                res.send(err);
            console.log('res', MyAdmin);
            res.send(MyAdmin);
        });
    })
    app.post('/admin/update', function (req, res) {    //  Not Controller
        MyAdmin.updateAdminBy(req.body, function (err, MyAdmin) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyAdmin);
            res.send(MyAdmin);
        });
    })
    app.post('/admin/checklogin', function (req, res) {    //  Not Controller
        MyAdmin.getAdminByCheckLogin(req.body, function (err, MyAdmin) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyAdmin);
            res.send(MyAdmin);
        });
    })
    app.post('/admin/delete', function (req, res) {    //  Not Controller
        MyAdmin.deleteAdminBy(req.body, function (err, MyAdmin) {
            if (err)
                res.send(err);
            console.log('res', MyAdmin);
            res.send(MyAdmin);
        });
    })
    app.post('/admin/code', function (req, res) {    //  Not Controller
        MyAdmin.getAdminByMaxCode(req.body, function (err, MyAdmin) {
            if (err)
                res.send(err);
            res.send(MyAdmin);
        });
    })
    

};



