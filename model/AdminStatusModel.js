var sql = require('./BaseModel');

var MyAdminStatus = function (MyAdminStatus) {
    this.MyAdminStatus = MyAdminStatus.MyAdminStatus;
    this.status = MyAdminStatus.status;
    this.created_at = new Date();
};


MyAdminStatus.getAdminStatusBy = function getAdminStatusBy(id, result) {
    // console.log(" = 123456" ,id);
    var str = "SELECT * FROM `tb_status_admin`"
        sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAdminStatus.getAdminStatusByCode = function getAdminStatusByCode(data, result) {    
    
    var str = "SELECT * FROM tb_status_admin WHERE status_admin_code = '"+data[0].status_admin_code+"'"

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

MyAdminStatus.insertAdminStatusBy = function insertAdminStatusBy(data, result) {
    var str = "INSERT INTO `tb_status_admin` ( `status_admin_code`,`status_admin_name_th`,`status_admin_name_en`)"
            + "VALUES ("
            +"'"+data.status_admin_code+"',"
            +"'"+data.status_admin_name_th+"',"
            +"'"+data.status_admin_name_en+"'"
            +")"
            //console.log("str = ", str);
       sql.query(str, function (err, res) {
           if (err) {
            //console.log("error: ", err);
               result(null, err);
           }else{
               result(null, res);
           }
       });
};

MyAdminStatus.updateAdminStatusBy = function updateAdminStatusBy(data, result) {
    // console.log("ad = ", data);
    var str = "UPDATE `tb_status_admin` SET `status_admin_name_th` = '"+data.status_admin_name_th
    +"', `status_admin_name_en` = '"+data.status_admin_name_en
    +"' WHERE `tb_status_admin`.`status_admin_code` = '"+data.status_admin_code+"'";
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
MyAdminStatus.latestAdminStatusBy = function latestAdminStatusBy(data, result) {
    // console.log(" = ", data);
    var str = "UPDATE `tb_status_admin` SET `status_admin_latest` = '"+data.status_admin_latest+"' WHERE `tb_status_admin`.`status_admin_code` = '"+data.status_admin_code+"'";
    
    
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
MyAdminStatus.deleteAdminStatusBy = function deleteAdminStatusBy(data, result) {
    // console.log(" = ", data.status_admin_code);
    var str = "DELETE FROM `tb_status_admin` WHERE `tb_status_admin`.`status_admin_code` = '"+data.status_admin_code+"'"
          
            // console.log("str = ", str);
       sql.query(str, function (err, res) {
           if (err) {
            //    console.log("error: ", err);
               result(null, err);
           }else{
               result(null, res);
           }
       });
};
MyAdminStatus.getAdminStatusByMaxCode = function getAdminStatusByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(status_admin_code), 3, 7)+1,4,'0')   AS status_admin_create_code  FROM `tb_status_admin`";
    sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
 };

module.exports = MyAdminStatus;