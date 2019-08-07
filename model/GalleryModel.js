var sql = require('./BaseModel');

var MyGallery = function (MyGallery) {
    this.MyGallery = MyGallery.MyGallery;
    this.status  = MyGallery.status;
    this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/gallery';

function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
        onError(err);
        return;
        }
        filenames.forEach(function(filename) {
        fs.readFile(dirname + filename, 'utf-8', function(err, content) {
            if (err) {
            onError(err);
            return;
            }
            onFileContent(filename, content);
        });
        });
    });
    }

MyGallery.getGalleryBy = function getGalleryBy(id, result) {
    console.log(" = 123456" ,id);
    // var str = "SELECT * FROM tb_blogs"
    // sql.query(str, function (err, res) {
    //     if (err) {
    //         console.log("error: ", err);
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // });

    // var fs = require('fs');
    // let directory = '../image/gallery';
    let dirBuf = Buffer.from(directory);
    fs.readdir(dirBuf, (err,files)=>{
        if(err){
            console.log(err.message);
            result(null, err);
        }else{
            console.log(files);
            result(null, files);
        }
    })
};
MyGallery.deleteGalleryBy = function deleteGalleryBy(data, result) {
    console.log(" = ", data.gallery_name);
    const path = directory + '/' + data.gallery_name
    console.log(path);
    

    fs.unlink(path, function() {
        result ({
            status: "200",
            responseType: "string",
            response: "success"
        });     
    });
};

module.exports = MyGallery;