var sql = require('./BaseModel');

var MyAdmin = function (MyAdmin) {
    this.MyAdmin = MyAdmin.MyAdmin;
    this.status = MyAdmin.status;
    this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/admin/';

MyAdmin.getAdminBy = function getAdminBy(id, result) {
    // console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_admin"
        sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAdmin.getAdminByCode = function getAdminByCode(data, result) {    
    
    var str = "SELECT * FROM tb_admin WHERE admin_code = '"+data[0].admin_code+"'"

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

MyAdmin.insertAdminBy = function insertAdminBy(data, result) {
    // console.log("AAA",data);
    
    var str = "INSERT INTO `tb_admin` ( `admin_code`,`admin_firstname`, `admin_lastname`, `admin_email`, `admin_phone`, `admin_facebook`, `admin_line`, `admin_username`, `admin_password`, `admin_address`, `admin_amphur`, `admin_district`, `admin_province`, `admin_zipcode`, `admin_image`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.admin_code+"',"
            +"'"+data.admin_firstname+"',"
            +"'"+data.admin_lastname+"',"
            +"'"+data.admin_email+"',"
            +"'"+data.admin_phone+"',"
            +"'"+data.admin_facebook+"',"
            +"'"+data.admin_line+"',"
            +"'"+data.admin_username+"',"
            +"'"+data.admin_password+"',"
            +"'"+data.admin_address+"',"
            +"'"+data.admin_amphur+"',"
            +"'"+data.admin_district+"',"
            +"'"+data.admin_province+"',"
            +"'"+data.admin_zipcode+"',"
            +"'"+data.admin_image+"',"
            +"'"+data.admin_admin+"',"
            +"NOW()"
            +")"
            // console.log("str = ", str);
       sql.query(str, function (err, res) {
           if (err) {
            //console.log("error: ", err);
               result(null, err);
           }else{
               result(null, res);
           }
       });
};

MyAdmin.updateAdminBy = function updateAdminBy(data, result) {
    //console.log("ad = ", data);
    var str = "UPDATE `tb_admin` SET `admin_firstname` = '"+data.admin_firstname
    +"', `admin_lastname` = '"+data.admin_lastname
    +"', `admin_email` = '"+data.admin_email
    +"', `admin_phone` = '"+data.admin_phone
    +"', `admin_facebook` = '"+data.admin_facebook
    +"', `admin_line` = '"+data.admin_line
    +"', `admin_username` = '"+data.admin_username
    +"', `admin_password` = '"+data.admin_password
    +"', `admin_address` = '"+data.admin_address
    +"', `admin_amphur` = '"+data.admin_amphur
    +"', `admin_district` = '"+data.admin_district
    +"', `admin_province` = '"+data.admin_province
    +"', `admin_zipcode` = '"+data.admin_zipcode
    +"', `admin_image` = '"+data.admin_image
    +"', `updateby` = '"+data.admin_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_admin`.`admin_code` = '"+data.admin_code+"'";
    // console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            if( data.admin_image != data.admin_true){
                const path = directory +data.admin_true
                fs.unlink(path, function() {
                    result (null, res,{
                        status: "200",
                        responseType: "string",
                        response: "success"
                    });  
                });
            }else{
                result(null, res);
            }
        }
    });
};
MyAdmin.getAdminByCheckLogin = function getAdminByCheckLogin(data, result) {
    // console.log(" = ", data);
    var str = "SELECT * FROM `tb_admin` WHERE `admin_username` = '"+data.username+"' AND `admin_password` = '"+data.password+"'"
    
    
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
MyAdmin.deleteAdminBy = function deleteAdminBy(data, result) {
    console.log(" = ", data.admin_image);
    var str = "DELETE FROM `tb_admin` WHERE `tb_admin`.`admin_code` = '"+data.admin_code+"'"
          
            console.log("str = ", str);
       sql.query(str, function (err, res) {
           if (err) {
               //console.log("error: ", err);
               result(null, err);
           }else{
            const path = directory +data.admin_image
            fs.unlink(path, function() {
              result (null, res,{
                status: "200",
                responseType: "string",
                response: "success"
              });  
            });
           }
       });
};

MyAdmin.getAdminByMaxCode = function getAdminByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(admin_code), 3, 7)+1,4,'0')  AS admin_create_code  FROM `tb_admin`";
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

module.exports = MyAdmin;