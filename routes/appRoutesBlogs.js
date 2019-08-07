var MyBlogs = require('../model/BlogsModel');

module.exports = function (app) {

    app.post('/blogs/views', function (req, res) {    //  Not Controller
        MyBlogs.getBlogsBy(req.body, function (err, MyBlogs) {
            console.log('controller');
            if (err)
                res.send(err);
            // console.log('res', MyBlogs);
            res.send(MyBlogs);
        });
    })
    app.post('/blogs/views/admin', function (req, res) {    //  Not Controller
        MyBlogs.getBlogsByAdmin(req.body, function (err, MyBlogs) {
            if (err)
                res.send(err);
            // console.log('res Test', MyBlogs);
            res.send(MyBlogs);
        });
    })
    app.post('/blogs/get', function (req, res) {    //  Not Controller
        MyBlogs.getBlogsByCode(req.body, function (err, MyBlogs) {
            if (err)
                res.send(err);
            //console.log('res', MyBlogs);
            res.send(MyBlogs);
        });
    })
    app.post('/blogs/insert', function (req, res) {    //  Not Controller
        console.log(req.body.blogs_code);
        
        MyBlogs.insertBlogsBy(req.body, function (err, MyBlogs) {
            
            if (err)
                res.send(err);
            //console.log('res', MyBlogs);
            res.send(MyBlogs);
        });
    })
    app.post('/blogs/update', function (req, res) {    //  Not Controller
        MyBlogs.updateBlogsBy(req.body, function (err, MyBlogs) {
            console.log('controller')
            if (err)
                res.send(err);
            //console.log('res', MyBlogs);
            res.send(MyBlogs);
        });
    })
    app.post('/blogs/update/latest', function (req, res) {    //  Not Controller
        MyBlogs.latestBlogsBy(req.body, function (err, MyBlogs) {
            console.log('controller')
            if (err)
                res.send(err);
            //console.log('res', MyBlogs);
            res.send(MyBlogs);
        });
    })
    app.post('/blogs/delete', function (req, res) {    //  Not Controller
        MyBlogs.deleteBlogsBy(req.body, function (err, MyBlogs) {
            if (err)
                res.send(err);
            //console.log('res', MyBlogs);
            res.send(MyBlogs);
        });
    })
    app.post('/blogs/code', function (req, res) {    //  Not Controller
        MyBlogs.getBlogsByMaxCode(req.body, function (err, MyBlogs) {
            if (err)
                res.send(err);
            res.send(MyBlogs);
        });
    })
    

};



