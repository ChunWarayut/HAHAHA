var MySetting = require('../model/SettingModel');



module.exports = function (app) {

    app.post('/setting/views', function (req, res) {    //  Not Controller
        MySetting.getSettingBy(req.body, function (err, MySetting) {
            console.log('controller');
            if (err)
                res.send(err);
            //console.log('res', MySetting);
            res.send(MySetting);
        });
    })
    app.post('/setting/get', function (req, res) {    //  Not Controller
        MySetting.getSettingByCode(req.body, function (err, MySetting) {
            
            if (err)
                res.send(err);
            //console.log('res', MySetting);
            res.send(MySetting);
        });
    })
    app.post('/setting/insert', function (req, res) {    //  Not Controller
        console.log(req.body.setting_code);
        
        MySetting.insertSettingBy(req.body, function (err, MySetting) {
            
            if (err)
                res.send(err);
            //console.log('res', MySetting);
            res.send(MySetting);
        });
    })
    app.post('/setting/update', function (req, res) {    //  Not Controller
        MySetting.updateSettingBy(req.body, function (err, MySetting) {
            console.log('controller')
            if (err)
                res.send(err);
            //console.log('res', MySetting);
            res.send(MySetting);
        });
    })
    app.post('/setting/update/latest', function (req, res) {    //  Not Controller
        MySetting.latestSettingBy(req.body, function (err, MySetting) {
            console.log('controller')
            if (err)
                res.send(err);
            //console.log('res', MySetting);
            res.send(MySetting);
        });
    })
    app.post('/setting/delete', function (req, res) {    //  Not Controller
        MySetting.deleteSettingBy(req.body, function (err, MySetting) {
            if (err)
                res.send(err);
            //console.log('res', MySetting);
            res.send(MySetting);
        });
    })
    

};



