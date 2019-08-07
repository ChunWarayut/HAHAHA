var sql = require('./BaseModel');

var MyAlbumSpace = function (MyAlbumSpace) {
    this.MyAlbumSpace = MyAlbumSpace.MyAlbumSpace;
    this.status = MyAlbumSpace.status;
    this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/space/';


MyAlbumSpace.getAlbumSpaceBy = function getAlbumSpaceBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_album_space"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAlbumSpace.getAlbumSpaceByCode = function getAlbumSpaceByCode(data, result) {    
    console.log("#####",data);
    
    var str = "SELECT * FROM tb_album_space WHERE space_list_code = '"+data.space_code+"'"
    // var str = "SELECT * FROM tb_album_space w"
    console.log("###",str);

        sql.query(str, function (err, res) {
        if (err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAlbumSpace.getAlbumSpaceByList = function getAlbumSpaceByList(data, result) {    
    console.log("#####",data);
    
    var str = "SELECT * FROM tb_album_space WHERE space_list_code = '"+data[0].space_list_code+"'"
    // var str = "SELECT * FROM tb_album_space w"
    console.log("###",str);

        sql.query(str, function (err, res) {
        if (err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};



MyAlbumSpace.insertAlbumSpaceBy = function insertAlbumSpaceBy(data, result) {
    console.log(data,"55555");
    var str = "INSERT INTO `tb_album_space` ( `space_list_code`, `album_space_name`, `addby`, `adddate`) VALUES "
    var arr=[];
    for(var i = 0; i < data.length; i++){
        arr[i] = "('"+data[i].space_list_code+"','"+data[i].album_data_name+"','"+data[i].album_space_admin+"',NOW())";
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

MyAlbumSpace.updateAlbumSpaceBy = function updateAlbumSpaceBy(data, result) {
    console.log(" = ", data.user_code);
    var str = "UPDATE `tb_album_space` SET `user_name` = '"+user_name
    +"', `user_lastname` = '"+user_lastname
    +"', `user_position_code` = '"+user_position_code
    +"', `user_email` = '"+user_email
    +"', `user_username` = '"+user_username
    +"', `user_password` = '"+user_password
    +"', `user_profile_img` = '"+user_profile_img
    +"', `user_status_code` = '"+user_status_code
    +"' WHERE `tb_album_space`.`user_code` = '"+user_code+"'"
    
    
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
MyAlbumSpace.latestAlbumSpaceBy = function latestAlbumSpaceBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_album_space` SET `album_space_latest` = '"+data.album_space_latest+"' WHERE `tb_album_space`.`album_space_code` = '"+data.album_space_code+"'";
    
    
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
MyAlbumSpace.deleteAlbumSpaceBy = function deleteAlbumSpaceBy(data, result) {
    console.log(" aaaaa = aaaaaa", data);
    var str = "DELETE FROM `tb_album_space` WHERE `tb_album_space`.`album_space_code` = '"+data.album_space_code+"'"
       const path = directory + data.album_space_file
       console.log(path);
       
    //    fs.unlink(path, function() {
    //     result ({
    //         status: "200",
    //         responseType: "string",
    //         response: "success"
    //     });     
    // });

            console.log("str = ", str);
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

MyAlbumSpace.getAlbumSpaceByMaxCode = function getAlbumSpaceByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(album_space_code), 3, 7)+1,4,'0')   AS album_space_create_code  FROM `tb_album_space`";
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

module.exports = MyAlbumSpace;