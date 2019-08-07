var MyGallery = require('../model/GalleryModel');
var multer = require('multer');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
const fs = require('fs');
var today = new Date();
module.exports = function (app) {

  app.post('/file/blogs',function(req, res) {
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        console.log("Test",file,"Test2",cb);
        cb(null, '../image/blogs');
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
    })
    var upload = multer({ storage: storage }).array('file');
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json(err);
      } else if (err) {
        return res.status(500).json(err);
      } 
        return res.status(200).send(req.file);
    })
  });
    app.post('/file/events',function(req, res) {
      var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          console.log("Test",file,"Test2",cb);
          cb(null, '../image/events');
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
      })
      var upload = multer({ storage: storage }).array('file');
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        } 
          return res.status(200).send(req.file);
      })
    });
    app.post('/file/space',function(req, res) {
      var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          console.log("Test",file,"Test2",cb);
          cb(null, '../image/space');
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
      })
      var upload = multer({ storage: storage }).array('file');
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        } 
          return res.status(200).send(req.file);
      })
    });
    app.post('/file/market',function(req, res) {
      var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          console.log("Test",file,"Test2",cb);
          cb(null, '../image/market');
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
      })
      var upload = multer({ storage: storage }).array('file');
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        } 
          return res.status(200).send(today.getFullYear()+'0'+(today.getMonth()+1)+''+today.getDate()+''+today.getHours()+''+today.getMinutes()+''+ today.getSeconds()+''+ today.getMilliseconds()+ '-');
      })
    });
    app.post('/file/admin',function(req, res) {
      var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          console.log("Test",file,"Test2",cb);
          cb(null, '../image/admin');
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
      })
      var upload = multer({ storage: storage }).array('file');
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        } 
          return res.status(200).send(req.file);
      })
    }); 
    app.post('/file/setting',function(req, res) {
      var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          console.log("Test",file,"Test2",cb);
          cb(null, '../image/setting');
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        }
      })
      var upload = multer({ storage: storage }).array('file');
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        } 
          return res.status(200).send(req.file);
      })
    }); 

    app.post('/file/gallery',function(req, res) {
      var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          console.log("Test",file,"Test2",cb);
          cb(null, '../image/gallery');
        },
        filename: function (req, file, cb) {
          cb(null, today.getFullYear()+'0'+(today.getMonth()+1)+''+today.getDate()+ '-' + file.originalname)
        }
      })

      var upload = multer({ storage: storage }).array('file');
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json(err);
        } else if (err) {
          return res.status(500).json(err);
        } 
          return res.status(200).send(req.file);
      })
    }); 
    app.post('/gallery/views', function (req, res) {    //  Not Controller
      MyGallery.getGalleryBy(req.body, function (err, MyGallery) {
          console.log(' getGalleryBy');
          if (err)
              res.send(err);
          console.log('res 5555', MyGallery);
          res.send(MyGallery);
      });
    })
  app.post('/gallery/delete', function (req, res) {    //  Not Controller
    MyGallery.deleteGalleryBy(req.body, function (err, MyGallery) {
        if (err)
            res.send(err);
        console.log('res', MyGallery);
        res.send(MyGallery);
    });
  })
  app.post('/album_blogs/delete', function (req, res) {    //  Not Controller
    MyGallery.deleteAlbumBlogsBy(req.body, function (err, MyGallery) {
        if (err)
            res.send(err);
        console.log('res', MyGallery);
        res.send(MyGallery);
    });
  })
  app.post('/album_events/delete', function (req, res) {    //  Not Controller
    MyGallery.deleteAlbumEventsBy(req.body, function (err, MyGallery) {
        if (err)
            res.send(err);
        console.log('res', MyGallery);
        res.send(MyGallery);
    });
  })
  app.post('/album_market/delete', function (req, res) {    //  Not Controller
    MyGallery.deleteAlbumMarketBy(req.body, function (err, MyGallery) {
        if (err)
            res.send(err);
        console.log('res', MyGallery);
        res.send(MyGallery);
    });
  })
  app.post('/album_space/delete', function (req, res) {    //  Not Controller
    MyGallery.deleteAlbumSpaceBy(req.body, function (err, MyGallery) {
        if (err)
            res.send(err);
        console.log('res', MyGallery);
        res.send(MyGallery);
    });
  })
    // app.get('/gallery/get', function(req, res){
    //   MyGallery.getGalleryBy(req.body, function (err, MyGallery) {
    //     console.log('controller');
    //     if (err)
    //         res.send(err);
    //     console.log('res', MyGallery);
    //     res.send(MyGallery);
    //   })
    // });

    app.post('/uploader', multipartMiddleware, function(req, res) {
      console.log("sss",req);
      fs.readFile(req.files.upload.path, function (err, data) {
        var newPath = '../public/upload/' + req.files.upload.name;
        fs.writeFile(newPath, data, function (err) {
          if (err) console.log({err: err});
          else {
              html = "";
              html += "<script type='text/javascript'>";
              html += "    var ref = CKEDITOR.tools.addFunction( function() {alert( 'Hello!'); } )";
              html += "    console.log('test')";
              html += "    var url     = \"http://localhost:3001/" + req.files.upload.name + "\";";
              html += "    var message = \"Uploaded file successfully\";";
              html += "";
              html += "    window.parent.CKEDITOR.tools.callFunction(ref, url, message);";
              html += "</script>";
              res.send(html);
          }
        });
      });
    });
    

};
