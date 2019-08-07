var sql = require('./BaseModel');

var MySpaceType = function (MySpaceType) {
    this.MySpaceType = MySpaceType.MySpaceType;
    this.status = MySpaceType.status;
    this.created_at = new Date();
};


MySpaceType.getSpaceTypeBy = function getSpaceTypeBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_space_type"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MySpaceType.getSpaceTypeByCode = function getSpaceTypeByCode(data, result) {    
    
    var str = "SELECT * FROM tb_space_type WHERE space_type_code = '"+data[0].space_type_code+"'"

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

MySpaceType.insertSpaceTypeBy = function insertSpaceTypeBy(data, result) {
    var str = "INSERT INTO `tb_space_type` (`space_type_code`,`space_type_name_th`, `space_type_name_en`, `space_type_show`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.space_type_code+"',"
            +"'"+data.space_type_name_th+"',"
            +"'"+data.space_type_name_en+"',"
            +"'"+data.space_type_show+"',"
            +"'"+data.space_type_admin+"',"      
            +"NOW()"
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
MySpaceType.updateSpaceTypeBy = function updateSpaceTypeBy(data, result) {
    console.log("ad = ", data);
    var str = "UPDATE `tb_space_type` SET `space_type_name_th` = '"+data.space_type_name_th
    +"', `space_type_name_en` = '"+data.space_type_name_en
    +"', `space_type_show` = '"+data.space_type_show
    +"', `updateby` = '"+data.space_type_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_space_type`.`space_type_code` = '"+data.space_type_code+"'";
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
MySpaceType.latestSpaceTypeBy = function latestSpaceTypeBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_space_type` SET `space_type_latest` = '"+data.space_type_latest+"' WHERE `tb_space_type`.`space_type_code` = '"+data.space_type_code+"'";
    
    
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
MySpaceType.deleteSpaceTypeBy = function deleteSpaceTypeBy(data, result) {
    console.log(" = ", data.space_type_code);
    var str = "DELETE FROM `tb_space_type` WHERE `tb_space_type`.`space_type_code` = '"+data.space_type_code+"'"
          
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
MySpaceType.getSpaceTypeByMaxCode = function getSpaceTypeByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(space_type_code), 4, 7)+1,4,'0')   AS space_type_create_code  FROM `tb_space_type`";
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

module.exports = MySpaceType;