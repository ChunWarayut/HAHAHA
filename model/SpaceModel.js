var sql = require('./BaseModel');

var MySpace = function (MySpace) {
    this.MySpace = MySpace.MySpace;
    this.status = MySpace.status;
    this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/space/';

MySpace.getSpaceBy = function getSpaceBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_space"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MySpace.getSpaceByCode = function getSpaceByCode(data, result) {    
    console.log("",data);
    console.log("",data);
    var str = "SELECT * FROM `tb_space` WHERE `space_code` =  '"+data.space_code+"'"

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
MySpace.getSpaceBySearch = function getSpaceBySearch(data, result) { 
    var search = 1;
    var type = "`space_type` = '"+data.space_type+"'";
    var name = "(`space_name_th` LIKE '%"+data.space_name+"%' OR `space_name_en` LIKE '%"+data.space_name+"%')";
    if(data.space_type != null && data.space_name != null ){
        search = name + " AND " + type ;
    }else if(data.space_type != null){
        search = type
    }else if(data.space_name != null){
        search = name
    }
    var str = "SELECT * FROM `tb_space` WHERE "+search+" ORDER BY `tb_space`.`space_latest` DESC";


    sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MySpace.getSpaceByLatest = function getSpaceByLatest(data, result) {    
    var str = "SELECT * FROM tb_space WHERE space_latest = '1'"

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

MySpace.getSpaceBySport = function getSpaceBySport(data, result) {    
    var str = "SELECT * FROM tb_space WHERE space_type = 'sport'"

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

MySpace.getSpaceByActivity = function getSpaceByActivity(data, result) {    
    var str = "SELECT * FROM tb_space WHERE space_type = 'activity'"

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

MySpace.getSpaceByBusiness = function getSpaceByBusiness(data, result) {    
    var str = "SELECT * FROM tb_space WHERE space_type = 'business'"

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

MySpace.insertSpaceBy = function insertSpaceBy(data, result) {
    var str = "INSERT INTO `tb_space` ( `space_code`, `space_type`, `space_name_th`, `space_name_en`, `space_description_th`, `space_description_en`, `space_detail_th`, `space_detail_en`,`space_tag_th`, `space_tag_en`,`space_image`, `space_latest`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.space_code+"',"
            +"'"+data.space_type+"',"
            +"'"+data.space_name_th+"',"
            +"'"+data.space_name_en+"',"
            +"'"+data.space_description_th+"',"
            +"'"+data.space_description_en+"',"
            +"'"+data.space_detail_th+"',"
            +"'"+data.space_detail_en+"',"
            +"'"+data.space_tag_th+"',"
            +"'"+data.space_tag_en+"',"
            +"'"+data.space_image+"',"
            +"'0',"
            +"'"+data.space_admin+"',"
            +"NOW()"
            +")"
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

MySpace.updateSpaceBy = function updateSpaceBy(data, result) {
    // console.log("ad = ", data);
    var str = "UPDATE `tb_space` SET `space_name_th` = '"+data.space_name_th
    +"', `space_type` = '"+data.space_type
    +"', `space_name_en` = '"+data.space_name_en
    +"', `space_description_th` = '"+data.space_description_th
    +"', `space_description_en` = '"+data.space_description_en
    +"', `space_detail_th` = '"+data.space_detail_th
    +"', `space_detail_en` = '"+data.space_detail_en
    +"', `space_tag_th` = '"+data.space_tag_th
    +"', `space_tag_en` = '"+data.space_tag_en
    +"', `space_image` = '"+data.space_image
    +"', `space_latest` = '"+data.space_latest
    +"', `updateby` = '"+data.space_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_space`.`space_code` = '"+data.space_code+"'";
    // console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            if( data.space_image != data.space_true){
                const path = directory +data.space_true
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
MySpace.latestSpaceBy = function latestSpaceBy(data, result) {
    // console.log(" = ", data);
    var str = "UPDATE `tb_space` SET `space_latest` = '"+data.space_latest+"' WHERE `tb_space`.`space_code` = '"+data.space_code+"'";
    
    
    // console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MySpace.deleteSpaceBy = function deleteSpaceBy(data, result) {
    // console.log(" = ", data.space_code);
    var str = "DELETE FROM `tb_space` WHERE `tb_space`.`space_code` = '"+data.space_code+"'"
          
            // console.log("str = ", str);
       sql.query(str, function (err, res) {
           if (err) {
            //    console.log("error: ", err);
               result(null, err);
           }else{
            const path = directory +data.space_image
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
MySpace.getSpaceByMaxCode = function getSpaceByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(space_code), 3, 7)+1,4,'0')   AS space_create_code  FROM `tb_space`";
    sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
 };

module.exports = MySpace;