var MyTitle_Title = require('../model/TitleModel');



module.exports = function (app) {

    app.post('/title/views', function (req, res) {    //  Not Controller
        MyTitle_Title.getTitleBy(req.body, function (err, MyTitle) {
            console.log('controller');
            if (err)
                res.send(err);
            console.log('res', MyTitle);
            res.send(MyTitle);
        });
    })
    app.post('/title/get', function (req, res) {    //  Not Controller
        
        MyTitle_Title.getTitleByCode(req.body, function (err, MyTitle) {
            
            if (err)
                res.send(err);
            console.log('res', MyTitle);
            res.send(MyTitle);
        });
    })
    app.post('/title/insert', function (req, res) {    //  Not Controller
        console.log(req.body.title_code);
        
        MyTitle_Title.insertTitleBy(req.body, function (err, MyTitle) {
            
            if (err)
                res.send(err);
            console.log('res', MyTitle);
            res.send(MyTitle);
        });
    })
    app.post('/title/update', function (req, res) {    //  Not Controller
        MyTitle_Title.updateTitleBy(req.body, function (err, MyTitle) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyTitle);
            res.send(MyTitle);
        });
    })
    app.post('/title/update/latest', function (req, res) {    //  Not Controller
        MyTitle_Title.latestTitleBy(req.body, function (err, MyTitle) {
            console.log('controller')
            if (err)
                res.send(err);
            console.log('res', MyTitle);
            res.send(MyTitle);
        });
    })
    app.post('/title/delete', function (req, res) {    //  Not Controller
        MyTitle_Title.deleteTitleBy(req.body, function (err, MyTitle) {
            if (err)
                res.send(err);
            console.log('res', MyTitle);
            res.send(MyTitle);
        });
    })
    

};



