var sql = require('./BaseModel');

var MyMarketType = function (MyMarketType) {
    this.MyMarketType = MyMarketType.MyMarketType;
    this.status = MyMarketType.status;
    this.created_at = new Date();
};


MyMarketType.getMarketTypeBy = function getMarketTypeBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_market_type"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyMarketType.getMarketTypeByCode = function getMarketTypeByCode(data, result) {    
    
    var str = "SELECT * FROM tb_market_type WHERE market_type_code = '"+data[0].market_type_code+"'"

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

MyMarketType.insertMarketTypeBy = function insertMarketTypeBy(data, result) {
    var str = "INSERT INTO `tb_market_type` (`market_type_code`,`market_type_name_th`, `market_type_name_en`, `market_type_show`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.market_type_code+"',"
            +"'"+data.market_type_name_th+"',"
            +"'"+data.market_type_name_en+"',"
            +"'"+data.market_type_show+"',"
            +"'"+data.market_type_admin+"',"      
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
MyMarketType.updateMarketTypeBy = function updateMarketTypeBy(data, result) {
    console.log("ad = ", data);
    var str = "UPDATE `tb_market_type` SET `market_type_name_th` = '"+data.market_type_name_th
    +"', `market_type_name_en` = '"+data.market_type_name_en
    +"', `market_type_show` = '"+data.market_type_show
    +"', `updateby` = '"+data.market_type_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_market_type`.`market_type_code` = '"+data.market_type_code+"'";
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
MyMarketType.latestMarketTypeBy = function latestMarketTypeBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_market_type` SET `market_type_latest` = '"+data.market_type_latest+"' WHERE `tb_market_type`.`market_type_code` = '"+data.market_type_code+"'";
    
    
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
MyMarketType.deleteMarketTypeBy = function deleteMarketTypeBy(data, result) {
    console.log(" = ", data.market_type_code);
    var str = "DELETE FROM `tb_market_type` WHERE `tb_market_type`.`market_type_code` = '"+data.market_type_code+"'"
          
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
MyMarketType.getMarketTypeByMaxCode = function getMarketTypeByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(market_type_code), 4, 7)+1,4,'0')   AS market_type_create_code  FROM `tb_market_type`";
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

module.exports = MyMarketType;