var sql = require('./BaseModel');

var MyAbout = function (MyAbout) {
    this.MyAbout = MyAbout.MyAbout;
    this.status = MyAbout.status;
    this.created_at = new Date();
};


MyAbout.getAboutBy = function getAboutBy(id, result) {
    // console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_about"
        sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAbout.getAboutByCode = function getAboutByCode(data, result) {    
    
    var str = "SELECT * FROM tb_about WHERE about_code = '"+data[0].about_code+"'"

    // console.log("1",data);

    // console.log("2",str);

        sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAbout.updateAboutBy = function updateAboutBy(data, result) {
    // console.log("ad = ", data);
    var str = "UPDATE `tb_about` SET `about_header_th` = '"+data.about_header_th
    +"', `about_header_en` = '"+data.about_header_en
    +"', `about_description_th` = '"+data.about_description_th
    +"', `about_description_en` = '"+data.about_description_en
    +"', `about_tag_th` = '"+data.about_tag_th
    +"', `about_tag_en` = '"+data.about_tag_en
    +"', `about_detail_th` = '"+data.about_detail_th
    +"', `about_detail_en` = '"+data.about_detail_en
    +"', `about_video` = '"+data.about_video
    +"', `updateby` = '"+data.admin_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_about`.`about_code` = '"+data.about_code+"'";
    // console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

module.exports = MyAbout;