var sql = require('./BaseModel');

var MyMarketSubType = function (MyMarketSubType) {
    this.MyMarketSubType = MyMarketSubType.MyMarketSubType;
    this.status = MyMarketSubType.status;
    this.created_at = new Date();
};


MyMarketSubType.getMarketSubTypeBy = function getMarketSubTypeBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_market_subtype"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyMarketSubType.getMarketSubTypeByCode = function getMarketSubTypeByCode(data, result) {    
    
    var str = "SELECT * FROM tb_market_subtype WHERE market_subtype_code = '"+data[0].market_subtype_code+"'"

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

MyMarketSubType.insertMarketSubTypeBy = function insertMarketSubTypeBy(data, result) {
    var str = "INSERT INTO `tb_market_subtype` (`market_subtype_code`, `market_type_code`, `market_subtype_name_th`, `market_subtype_name_en`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.market_subtype_code+"',"
            +"'"+data.market_type_code+"',"
            +"'"+data.market_subtype_name_th+"',"
            +"'"+data.market_subtype_name_en+"',"    
            +"'"+data.market_subtype_admin+"',"      
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
MyMarketSubType.updateMarketSubTypeBy = function updateMarketSubTypeBy(data, result) {
    console.log("ad = ", data);
    var str = "UPDATE `tb_market_subtype` SET `market_type_code` = '"+data.market_type_code
    +"', `market_subtype_name_th` = '"+data.market_subtype_name_th
    +"', `market_subtype_name_en` = '"+data.market_subtype_name_en
    +"', `updateby` = '"+data.market_subtype_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_market_subtype`.`market_subtype_code` = '"+data.market_subtype_code+"'";
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
MyMarketSubType.latestMarketSubTypeBy = function latestMarketSubTypeBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_market_subtype` SET `market_subtype_latest` = '"+data.market_subtype_latest+"' WHERE `tb_market_subtype`.`market_subtype_code` = '"+data.market_subtype_code+"'";
    
    
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
MyMarketSubType.deleteMarketSubTypeBy = function deleteMarketSubTypeBy(data, result) {
    console.log(" = ", data.market_subtype_code);
    var str = "DELETE FROM `tb_market_subtype` WHERE `tb_market_subtype`.`market_subtype_code` = '"+data.market_subtype_code+"'"
          
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

MyMarketSubType.getMarketSubTypeByType = function getMarketSubTypeByType(data, result) {    
    
    var str = "SELECT * FROM tb_market_subtype WHERE tb_market_subtype.market_type_code = '"+data[0].market_type_code+"'"

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
MyMarketSubType.getMarketSubTypeByMaxCode = function getMarketSubTypeByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(market_subtype_code), 4, 7)+1,4,'0')   AS market_subtype_create_code  FROM `tb_market_subtype`";
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

module.exports = MyMarketSubType;