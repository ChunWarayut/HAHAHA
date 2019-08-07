var sql = require('./BaseModel');

var MyTitle = function (MyTitle) {
    this.MyTitle = MyTitle.MyTitle;
    this.status = MyTitle.status;
    this.created_at = new Date();
};


MyTitle.getTitleBy = function getTitleBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_title"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyTitle.getTitleByCode = function getTitleByCode(data, result) {    
    
    var str = "SELECT * FROM tb_title WHERE title_code = '"+data[0].title_code+"'"

    // console.log("1",data);

    console.log("2",str);

        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyTitle.insertTitleBy = function insertTitleBy(data, result) {
    var str = "INSERT INTO `tb_title` ( `title_page`,`title_th`, `title_en`, `title_tag_th`, `title_tag_en`, `title_description_th`, `title_description_en`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.title_header_th+"',"
            +"'"+data.title_header_en+"',"
            +"'"+data.title_description_th+"',"
            +"'"+data.title_description_en+"',"
            +"'"+data.title_detail_th+"',"
            +"'"+data.title_detail_en+"',"
            +"'"+data.title_tag_th+"',"
            +"'"+data.title_tag_en+"',"
            +"'"+data.title_image+"',"
            +"'"+data.title_date+"',"
            +"'"+data.title_latest+"',"
            +"'"+data.addby+"',"
            +"'"+data.adddate+"'"
            +")"
            console.log("str = ", str);
       sql.query(str, function (err, res) {
           if (err) {
               console.log("error: ", err);
               result(null, err);
           }else{
               result(null, res);
           }
       });
};

MyTitle.updateTitleBy = function updateTitleBy(data, result) {
    console.log("ad = ", data);
    var str = " UPDATE `tb_title` SET `title_th` = '"+data.title_th
    +"', `title_en` = '"+data.title_en
    +"', `title_date` = '"+data.title_date
    +"', `title_tag_th` = '"+data.title_tag_th
    +"', `title_tag_en` = '"+data.title_tag_en
    +"', `title_description_th` = '"+data.title_description_th
    +"', `title_description_en` = '"+data.title_description_en
    +"' WHERE `tb_title`.`title_code` = '"+data.title_code+"'";

    console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MyTitle.latestTitleBy = function latestTitleBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_title` SET `title_latest` = '"+data.title_latest+"' WHERE `tb_title`.`title_code` = '"+data.title_code+"'";
    
    
    console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MyTitle.deleteTitleBy = function deleteTitleBy(data, result) {
    console.log(" = ", data.title_code);
    var str = "DELETE FROM `tb_title` WHERE `tb_title`.`title_code` = '"+data.title_code+"'"
          
            console.log("str = ", str);
       sql.query(str, function (err, res) {
           if (err) {
               console.log("error: ", err);
               result(null, err);
           }else{
               result(null, res);
           }
       });
};

module.exports = MyTitle;