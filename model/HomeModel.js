var sql = require('./BaseModel');

var MyHome = function (MyHome) {
    this.MyHome = MyHome.MyHome;
    this.status = MyHome.status;
    this.created_at = new Date();
};


MyHome.getHomeBy = function getHomeBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_home"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyHome.getHomeByCode = function getHomeByCode(data, result) {    
    
    var str = "SELECT * FROM tb_home WHERE home_id = '"+data[0].home_id+"'"

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

MyHome.insertHomeBy = function insertHomeBy(data, result) {
    var str = "INSERT INTO `tb_home`(`home_id`, `home_header_th`, `home_header_en`, `home_sub_th`, `home_sub_en`, `home_description_th`, `home_description_en`, `home_link`, `home_image`)"
            + "VALUES ("
            +"'"+data.home_id+"',"
            +"'"+data.home_header_th+"',"
            +"'"+data.home_header_en+"',"
            +"'"+data.home_sub_th+"',"
            +"'"+data.home_sub_en+"',"
            +"'"+data.home_description_th+"',"
            +"'"+data.home_description_en+"',"
            +"'"+data.home_link+"',"
            +"'"+data.home_image+"'"
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

MyHome.updateHomeBy = function updateHomeBy(data, result) {
    console.log("ad = ", data);
    var str = "UPDATE `tb_home` SET `home_id` = '"+data.home_id
    +"', `home_header_th` = '"+data.home_header_th
    +"', `home_header_en` = '"+data.home_header_en
    +"', `home_sub_th` = '"+data.home_sub_th
    +"', `home_sub_en` = '"+data.home_sub_en
    +"', `home_description_th` = '"+data.home_description_th
    +"', `home_description_en` = '"+data.home_description_en
    +"', `home_link` = '"+data.home_link
    +"', `home_image` = '"+data.home_image
    +"' WHERE `tb_home`.`home_id` = '"+data.home_id+"'"
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
MyHome.latestHomeBy = function latestHomeBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_home` SET `home_latest` = '"+data.home_latest+"' WHERE `tb_home`.`home_id` = '"+data.home_id+"'";
    
    
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
MyHome.deleteHomeBy = function deleteHomeBy(data, result) {
    console.log(" = ", data.home_id);
    var str = "DELETE FROM `tb_home` WHERE `tb_home`.`home_id` = '"+data.home_id+"'"
          
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

module.exports = MyHome;