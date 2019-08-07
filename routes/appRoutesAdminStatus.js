var MyAdminStatus = require('../model/AdminStatusModel');



module.exports = function (app) {

    app.post('/status_admin/views', function (req, res) {    //  Not Controller
        MyAdminStatus.getAdminStatusBy(req.body, function (err, MyAdminStatus) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyAdminStatus);
            res.send(MyAdminStatus);
        });
    })
    app.post('/status_admin/get', function (req, res) {    //  Not Controller
        
        MyAdminStatus.getAdminStatusByCode(req.body, function (err, MyAdminStatus) {
            
            if (err)
                res.send(err);
            console.log('res', MyAdminStatus);
            res.send(MyAdminStatus);
        });
    })
    app.post('/status_admin/insert', function (req, res) {    //  Not Controller
        console.log(req.body.status_admin_code);
        
        MyAdminStatus.insertAdminStatusBy(req.body, function (err, MyAdminStatus) {
            
            if (err)
                res.send(err);
            console.log('res', MyAdminStatus);
            res.send(MyAdminStatus);
        });
    })
    app.post('/status_admin/update', function (req, res) {    //  Not Controller
        MyAdminStatus.updateAdminStatusBy(req.body, function (err, MyAdminStatus) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyAdminStatus);
            res.send(MyAdminStatus);
        });
    })
    app.post('/status_admin/delete', function (req, res) {    //  Not Controller
        MyAdminStatus.deleteAdminStatusBy(req.body, function (err, MyAdminStatus) {
            if (err)
                res.send(err);
            console.log('res', MyAdminStatus);
            res.send(MyAdminStatus);
        });
    })
    app.post('/status_admin/code', function (req, res) {    //  Not Controller
        MyAdminStatus.getAdminStatusByMaxCode(req.body, function (err, MyAdminStatus) {
            if (err)
                res.send(err);
            console.log('res', MyAdminStatus);
            res.send(MyAdminStatus);
        });
    })
    

};



