var sql = require('./BaseModel');

var MySpaceSubType = function (MySpaceSubType) {
    this.MySpaceSubType = MySpaceSubType.MySpaceSubType;
    this.status = MySpaceSubType.status;
    this.created_at = new Date();
};


MySpaceSubType.getSpaceSubTypeBy = function getSpaceSubTypeBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_space_subtype"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MySpaceSubType.getSpaceSubTypeByCode = function getSpaceSubTypeByCode(data, result) {    
    
    var str = "SELECT * FROM tb_space_subtype WHERE space_subtype_code = '"+data[0].space_subtype_code+"'"

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

MySpaceSubType.insertSpaceSubTypeBy = function insertSpaceSubTypeBy(data, result) {
    var str = "INSERT INTO `tb_space_subtype` (`space_subtype_code`, `space_type_code`, `space_subtype_name_th`, `space_subtype_name_en`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.space_subtype_code+"',"
            +"'"+data.space_type_code+"',"
            +"'"+data.space_subtype_name_th+"',"
            +"'"+data.space_subtype_name_en+"',"    
            +"'"+data.space_subtype_admin+"',"      
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
MySpaceSubType.updateSpaceSubTypeBy = function updateSpaceSubTypeBy(data, result) {
    console.log("ad = ", data);
    var str = "UPDATE `tb_space_subtype` SET `space_type_code` = '"+data.space_type_code
    +"', `space_subtype_name_th` = '"+data.space_subtype_name_th
    +"', `space_subtype_name_en` = '"+data.space_subtype_name_en
    +"', `updateby` = '"+data.space_subtype_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_space_subtype`.`space_subtype_code` = '"+data.space_subtype_code+"'";
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
MySpaceSubType.latestSpaceSubTypeBy = function latestSpaceSubTypeBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_space_subtype` SET `space_subtype_latest` = '"+data.space_subtype_latest+"' WHERE `tb_space_subtype`.`space_subtype_code` = '"+data.space_subtype_code+"'";
    
    
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
MySpaceSubType.deleteSpaceSubTypeBy = function deleteSpaceSubTypeBy(data, result) {
    console.log(" = ", data.space_subtype_code);
    var str = "DELETE FROM `tb_space_subtype` WHERE `tb_space_subtype`.`space_subtype_code` = '"+data.space_subtype_code+"'"
          
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

MySpaceSubType.getSpaceSubTypeByType = function getSpaceSubTypeByType(data, result) {    
    
    var str = "SELECT * FROM tb_space_subtype WHERE tb_space_subtype.space_type_code = '"+data[0].space_type_code+"'"

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
MySpaceSubType.getSpaceSubTypeByMaxCode = function getSpaceSubTypeByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(space_subtype_code), 4, 7)+1,4,'0')   AS space_subtype_create_code  FROM `tb_space_subtype`";
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

module.exports = MySpaceSubType;