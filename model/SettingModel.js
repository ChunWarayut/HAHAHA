var sql = require('./BaseModel');

var MySetting = function (MySetting) {
    this.MySetting = MySetting.MySetting;
    this.status = MySetting.status;
    this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/setting/';

MySetting.getSettingBy = function getSettingBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_setting"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);        
        }
    });
};

MySetting.getSettingByCode = function getSettingByCode(data, result) {    
    
    var str = "SELECT * FROM tb_setting WHERE setting_code = '"+data[0].setting_code+"'"

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

// MySetting.insertSettingBy = function insertSettingBy(data, result) {
//     var str = "INSERT INTO `tb_setting` ( `setting_name`,`setting_logo`,`setting_phone`, `setting_email`, `setting_tax`, `setting_fax`, `setting_open`, `setting_page_code`, `setting_facebook`, `setting_twitter`, `setting_google_plus`, `setting_youtube`, `setting_instagram`, `setting_rss`, `setting_location_lat`, `setting_location_long`, `setting_address_th`, `setting_address_en`, `setting_url`)"
//             + "VALUES ("
//             +"'"+data.setting_name+"',"
//             +"'"+data.setting_logo+"',"
//             +"'"+data.setting_phone+"',"
//             +"'"+data.setting_email+"',"
//             +"'"+data.setting_tax+"',"
//             +"'"+data.setting_fax+"',"
//             +"'"+data.setting_open+"',"
//             +"'"+data.setting_page_code+"',"
//             +"'"+data.setting_facebook+"',"
//             +"'"+data.setting_twitter+"',"
//             +"'"+data.setting_google_plus+"',"
//             +"'"+data.setting_youtube+"',"
//             +"'"+data.setting_instagram+"',"
//             +"'"+data.setting_rss+"',"
//             +"'"+data.setting_location_lat+"',"
//             +"'"+data.setting_location_long+"',"
//             +"'"+data.setting_address_th+"',"
//             +"'"+data.setting_address_en+"',"
//             +"'"+data.setting_url+"'"
//             +")"
//             console.log("str = ", str);
//        sql.query(str, function (err, res) {
//            if (err) {
//                console.log("error: ", err);
//                result(null, err);
//            }else{
//                result(null, res);
//            }
//        });
// };

MySetting.updateSettingBy = function updateSettingBy(data, result) {
    console.log("ad = ", data);
    var str = "UPDATE `tb_setting` SET `setting_name` = '"+data.setting_name
    +"', `setting_logo` = '"+data.setting_logo
    +"', `setting_phone` = '"+data.setting_phone
    +"', `setting_email` = '"+data.setting_email
    +"', `setting_tax` = '"+data.setting_tax
    +"', `setting_fax` = '"+data.setting_fax
    +"', `setting_open` = '"+data.setting_open
    +"', `setting_facebook` = '"+data.setting_facebook
    +"', `setting_twitter` = '"+data.setting_twitter
    +"', `setting_youtube` = '"+data.setting_youtube
    +"', `setting_instagram` = '"+data.setting_instagram
    +"', `setting_rss` = '"+data.setting_rss
    +"', `setting_location_lat` = '"+data.setting_location_lat
    +"', `setting_location_long` = '"+data.setting_location_long
    +"', `setting_address_th` = '"+data.setting_address_th
    +"', `setting_address_en` = '"+data.setting_address_en
    +"', `setting_url` = '"+data.setting_url
    +"', `updateby` = '"+data.setting_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_setting`.`setting_code` = '"+data.setting_code+"'";
    console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            if( data.setting_logo != data.setting_view){
                const path = directory +data.setting_view
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
// MySetting.latestSettingBy = function latestSettingBy(data, result) {
//     console.log(" = ", data);
//     var str = "UPDATE `tb_setting` SET `setting_latest` = '"+data.setting_latest+"' WHERE `tb_setting`.`setting_code` = '"+data.setting_code+"'";
    
    
//     console.log("str = ", str);
//     sql.query(str, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{
//             result(null, res);
//         }
//     });
// };
// MySetting.deleteSettingBy = function deleteSettingBy(data, result) {
//     console.log(" = ", data.setting_code);
//     var str = "DELETE FROM `tb_setting` WHERE `tb_setting`.`setting_code` = '"+data.setting_code+"'"
          
//             console.log("str = ", str);
//        sql.query(str, function (err, res) {
//            if (err) {
//                console.log("error: ", err);
//                result(null, err);
//            }else{
//                result(null, res);
//            }
//        });
// };

module.exports = MySetting;