var sql = require('./BaseModel');

var MyAlbum = function (MyAlbum) {
    this.MyAlbum = MyAlbum.MyAlbum;
    this.status = MyAlbum.status;
    this.created_at = new Date();
};


MyAlbum.getAlbumBy = function getAlbumBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_album"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAlbum.getAlbumByCode = function getAlbumByCode(data, result) {    
    var str = "SELECT * FROM tb_album WHERE album_code = '"+data.album_code+"'"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAlbum.insertAlbumBy = function insertAlbumBy(data, result) {
    console.log(data);
    var str = "INSERT INTO `tb_album` ( `album_code`, `album_type`, `list_code`, `album_name`, `addby`, `adddate`) VALUES "
    var arr=[];
    for(var i = 0; i < data.length; i++){
        arr[i] = "('"+data[i].album_code+"','"+data[i].album_type+"','"+data[i].list_code+"','"+data[i].album_name+"','"+data[i].album_admin+"',NOW())";
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

MyAlbum.updateAlbumBy = function updateAlbumBy(data, result) {
    console.log(" = ", data.user_code);
    var str = "UPDATE `tb_album` SET `user_name` = '"+user_name
    +"', `user_lastname` = '"+user_lastname
    +"', `user_position_code` = '"+user_position_code
    +"', `user_email` = '"+user_email
    +"', `user_username` = '"+user_username
    +"', `user_password` = '"+user_password
    +"', `user_profile_img` = '"+user_profile_img
    +"', `user_status_code` = '"+user_status_code
    +"' WHERE `tb_album`.`user_code` = '"+user_code+"'"
    
    
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
MyAlbum.latestAlbumBy = function latestAlbumBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_album` SET `album_latest` = '"+data.album_latest+"' WHERE `tb_album`.`album_code` = '"+data.album_code+"'";
    
    
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
MyAlbum.deleteAlbumBy = function deleteAlbumBy(data, result) {
    console.log(" = ", data.album_code);
    var str = "DELETE FROM `tb_album` WHERE `tb_album`.`album_code` = '"+data.album_code+"'"
          
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
MyAlbum.getAlbumByMaxCode = function getAlbumByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(album_code), 3, 7)+1,4,'0')   AS album_create_code  FROM `tb_album`";
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

module.exports = MyAlbum;