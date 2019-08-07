var sql = require('./BaseModel');

var MyAlbumMarket = function (MyAlbumMarket) {
    this.MyAlbumMarket = MyAlbumMarket.MyAlbumMarket;
    this.status = MyAlbumMarket.status;
    this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/market/';


MyAlbumMarket.getAlbumMarketBy = function getAlbumMarketBy(id, result) {
    // console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_album_market"
        sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAlbumMarket.getAlbumMarketByList = function getAlbumMarketByList(data, result) {    
    console.log("#####",data);
    
    var str = "SELECT * FROM tb_album_market WHERE market_list_code = '"+data.market_code+"' order by adddate asc"
    // var str = "SELECT * FROM tb_album_market w"
    console.log("###",str);

        sql.query(str, function (err, res) {
        if (err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAlbumMarket.getAlbumMarketByCode = function getAlbumMarketByCode(data, result) {    
    console.log("#####",data);
    
    var str = "SELECT * FROM tb_album_market WHERE market_list_code = '"+data.market_code+"'"
    // var str = "SELECT * FROM tb_album_market w"
    console.log("###",str);

        sql.query(str, function (err, res) {
        if (err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAlbumMarket.insertAlbumMarketBy = function insertAlbumMarketBy(data, result) {
    console.log(data,"55555");
    var str = "INSERT INTO `tb_album_market` (`market_list_code`, `album_market_name`, `addby`, `adddate`) VALUES "
    var arr=[];
    for(var i = 0; i < data.length; i++){
        arr[i] = "('"+data[i].market_list_code+"','"+data[i].album_data_rename+"','"+data[i].album_market_admin+"',NOW())";
        if(i < data.length-1){
            arr[i] = arr[i] + ",";
        }
        str = str + arr[i] ;
    }
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

MyAlbumMarket.updateAlbumMarketBy = function updateAlbumMarketBy(data, result) {
    console.log(" = ", data.user_code);
    var str = "UPDATE `tb_album_market` SET `user_name` = '"+user_name
    +"', `user_lastname` = '"+user_lastname
    +"', `user_position_code` = '"+user_position_code
    +"', `user_email` = '"+user_email
    +"', `user_username` = '"+user_username
    +"', `user_password` = '"+user_password
    +"', `user_profile_img` = '"+user_profile_img
    +"', `user_status_code` = '"+user_status_code
    +"' WHERE `tb_album_market`.`user_code` = '"+user_code+"'"
    
    
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
MyAlbumMarket.latestAlbumMarketBy = function latestAlbumMarketBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_album_market` SET `album_market_latest` = '"+data.album_market_latest+"' WHERE `tb_album_market`.`album_market_code` = '"+data.album_market_code+"'";
    
    
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
MyAlbumMarket.deleteAlbumMarketBy = function deleteAlbumMarketBy(data, result) {
    console.log(" aaaaa = aaaaaa", data);
    var str = "DELETE FROM `tb_album_market` WHERE `tb_album_market`.`album_market_code` = '"+data.album_market_code+"'"
       const path = directory + data.album_market_file
       console.log(path);
       
    //    fs.unlink(path, function() {
    //     result ({
    //         status: "200",
    //         responseType: "string",
    //         response: "success"
    //     });     
    // });

                        // console.log("str = ", str);
                         sql.query(str, function (err, res) {
                            if (err) {
                                console.log("error: ", err);
                                result(null, err);
                        }else{
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

MyAlbumMarket.getAlbumMarketByMaxCode = function getAlbumMarketByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(album_market_code), 3, 7)+1,4,'0')   AS album_market_create_code  FROM `tb_album_market`";
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

module.exports = MyAlbumMarket;