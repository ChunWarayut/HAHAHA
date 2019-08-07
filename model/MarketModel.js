var sql = require('./BaseModel');

var MyMarket = function (MyMarket) {
    this.MyMarket = MyMarket.MyMarket;
    this.status = MyMarket.status;
    this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/market/';

MyMarket.getMarketBy = function getMarketBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_market"
        sql.query(str, function (err, res) {
        if (err) {
            
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyMarket.getMarketByCode = function getMarketByCode(data, result) {    
    
    var str = "SELECT * FROM tb_market WHERE market_code = '"+data[0].market_code+"'"

    // console.log("1",data);

    console.log("2",str);

        sql.query(str, function (err, res) {
        if (err) {
            
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MyMarket.getMarketByList = function getMarketByList(data, result) {    
    
    var str = "SELECT * FROM tb_market WHERE market_code = '"+data.market_code+"'"

    // console.log("1",data);

    console.log("2",str);

        sql.query(str, function (err, res) {
        if (err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MyMarket.getMarketBySearch = function getMarketBySearch(data, result) {    
    var str = "SELECT * FROM `tb_market` "

    console.log("2",str);

        sql.query(str, function (err, res) {
        if (err) {
            
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyMarket.insertMarketBy = function insertMarketBy(data, result) {
    var str = "INSERT INTO `tb_market` (`market_code`, `market_name_th`, `market_name_en`, `market_tag_th`, `market_tag_en`, `market_owner_th`, `market_owner_en`, `market_detail_th`, `market_detail_en`, `market_zone`, `market_image`, `market_latest`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.market_code+"',"
            // +"'"+data.market_subtype_code+"',"
            +"'"+data.market_name_th+"',"
            +"'"+data.market_name_en+"',"
            +"'"+data.market_tag_th+"',"
            +"'"+data.market_tag_en+"',"
            +"'"+data.market_owner_th+"',"
            +"'"+data.market_owner_en+"',"
            +"'"+data.market_detail_th+"',"
            +"'"+data.market_detail_en+"',"
            +"'"+data.market_zone+"',"
            +"'"+data.market_image+"',"
            +"'0',"
            +"'"+data.market_admin+"',"
            +"NOW()"
            +")"
            console.log("str = ", str);
       sql.query(str, function (err, res) {
           if (err) {
               
               result(null, err);
           }else{
               result(null, res);
           }
          
       });
};
MyMarket.updateMarketBy = function updateMarketBy(data, result) {
    console.log("ad = ", data);
    var str = "UPDATE `tb_market` SET `market_name_th` = '"+data.market_name_th
    +"', `market_name_en` = '"+data.market_name_en
    +"', `market_owner_th` = '"+data.market_owner_th
    +"', `market_owner_en` = '"+data.market_owner_en  
    +"', `market_tag_th` = '"+data.market_tag_th
    +"', `market_tag_en` = '"+data.market_tag_en
    +"', `market_detail_th` = '"+data.market_detail_th
    +"', `market_detail_en` = '"+data.market_detail_en
    +"', `market_zone` = '"+data.market_zone
    +"', `market_image` = '"+data.market_image
    +"', `market_latest` = '"+data.market_latest
    +"', `updateby` = '"+data.market_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_market`.`market_code` = '"+data.market_code+"'";
    console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MyMarket.latestMarketBy = function latestMarketBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_market` SET `market_latest` = '"+data.market_latest+"' WHERE `tb_market`.`market_code` = '"+data.market_code+"'";
    
    
    console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MyMarket.deleteMarketBy = function deleteMarketBy(data, result) {
    console.log(" 5555555= ", data);
    var str = "DELETE FROM `tb_market` WHERE `tb_market`.`market_code` = '"+data.data.market_list_code+"';"
    var album = "DELETE FROM `tb_album_market` WHERE `tb_album_market`.`market_list_code` = '"+data.data.market_list_code+"';"
            console.log("str = ", str);
            // sql.query(album, function (err, res) {
            //     if (err) {
            //         result(null, err);
            //         // for(let i=0; i< data.datafile.length; i++){
            //         //     const path = directory + data.datafile[i].album_market_name
            //         //     console.log(path);
            //         //     console.log(data.datafile[i]);
            //         //     fs.unlink(path, function() {
            //         //         // result (null, res,{
            //         //         //     status: "200",
            //         //         //     responseType: "string",
            //         //         //     response: "success"
            //         //         // });    
            //         //     });
            //     }else{
            //         const path = directory +data.space_image
            //         fs.unlink(path, function() {
            //           result (null, res,{
            //             status: "200",
            //             responseType: "string",
            //             response: "success"
            //           });  
            //         });
            //        }
            //    });
            sql.query(str, function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }else{
                 const path = directory +data.market_image
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

MyMarket.getMarketByMaxCode = function getMarketByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(market_code), 3, 7)+1,4,'0')   AS market_create_code  FROM `tb_market`";
    sql.query(str, function (err, res) {
        if (err) {
            
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
 };

module.exports = MyMarket;