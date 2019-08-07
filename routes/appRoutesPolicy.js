var MyPolicy = require('../model/PolicyModel');

module.exports = function (app) {

    app.post('/policy/views', function (req, res) {    //  Not Controller
        MyPolicy.getPolicyBy(req.body, function (err, MyPolicy) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyPolicy);
            res.send(MyPolicy);
        });
    })
  
    app.post('/policy/get', function (req, res) {    //  Not Controller
        MyPolicy.getPolicyByCode(req.body, function (err, MyPolicy) {
            if (err)
                res.send(err);
            console.log('res', MyPolicy);
            res.send(MyPolicy);
        });
    })
    app.post('/policy/insert', function (req, res) {    //  Not Controller
        MyPolicy.insertPolicyBy(req.body, function (err, MyPolicy) {
            
            if (err)
                res.send(err);
            console.log('res', MyPolicy);
            res.send(MyPolicy);
        });
    })
    app.post('/policy/update', function (req, res) {    //  Not Controller
        MyPolicy.updatePolicyBy(req.body, function (err, MyPolicy) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyPolicy);
            res.send(MyPolicy);
        });
    })
    app.post('/policy/update/latest', function (req, res) {    //  Not Controller
        MyPolicy.latestPolicyBy(req.body, function (err, MyPolicy) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyPolicy);
            res.send(MyPolicy);
        });
    })
    app.post('/policy/delete', function (req, res) {    //  Not Controller
        MyPolicy.deletePolicyBy(req.body, function (err, MyPolicy) {
            if (err)
                res.send(err);
            console.log('res', MyPolicy);
            res.send(MyPolicy);
        });
    })
    app.post('/policy/code', function (req, res) {    //  Not Controller
        MyPolicy.getPolicyByMaxCode(req.body, function (err, MyPolicy) {
            if (err)
                res.send(err);
            res.send(MyPolicy);
        });
    })
    

};



