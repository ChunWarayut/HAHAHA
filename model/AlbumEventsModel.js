var sql = require('./BaseModel');

var MyAlbumEvents = function (MyAlbumEvents) {
    this.MyAlbumEvents = MyAlbumEvents.MyAlbumEvents;
    this.status = MyAlbumEvents.status;
    this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/events/';


MyAlbumEvents.getAlbumEventsBy = function getAlbumEventsBy(id, result) {
    // console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_album_events"
        sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAlbumEvents.getAlbumEventsByCode = function getAlbumEventsByCode(data, result) {    
    // console.log("#####",data);
    
    var str = "SELECT * FROM tb_album_events WHERE events_list_code = '"+data.events_code+"'"
    // var str = "SELECT * FROM tb_album_events w"
    // console.log("###",str);

        sql.query(str, function (err, res) {
        if (err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyAlbumEvents.getAlbumEventsByList = function getAlbumEventsByList(data, result) {    
    // console.log("#####",data);
    
    var str = "SELECT * FROM tb_album_events WHERE events_list_code = '"+data.events_code+"'"
    // var str = "SELECT * FROM tb_album_events w"
    // console.log("###",str);

        sql.query(str, function (err, res) {
        if (err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};



MyAlbumEvents.insertAlbumEventsBy = function insertAlbumEventsBy(data, result) {
    // console.log(data,"55555");
    var str = "INSERT INTO `tb_album_events` (`events_list_code`, `album_events_name`, `addby`, `adddate`) VALUES "
    var arr=[];
    for(var i = 0; i < data.length; i++){
        arr[i] = "('"+data[i].events_list_code+"','"+data[i].album_data_name+"','"+data[i].album_events_admin+"',NOW())";
        if(i < data.length-1){
            arr[i] = arr[i] + ",";
        }
        str = str + arr[i] ;
    }
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

MyAlbumEvents.updateAlbumEventsBy = function updateAlbumEventsBy(data, result) {
    // console.log(" = ", data.user_code);
    var str = "UPDATE `tb_album_events` SET `user_name` = '"+user_name
    +"', `user_lastname` = '"+user_lastname
    +"', `user_position_code` = '"+user_position_code
    +"', `user_email` = '"+user_email
    +"', `user_username` = '"+user_username
    +"', `user_password` = '"+user_password
    +"', `user_profile_img` = '"+user_profile_img
    +"', `user_status_code` = '"+user_status_code
    +"' WHERE `tb_album_events`.`user_code` = '"+user_code+"'"
    
    
    // console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MyAlbumEvents.latestAlbumEventsBy = function latestAlbumEventsBy(data, result) {
    // console.log(" = ", data);
    var str = "UPDATE `tb_album_events` SET `album_events_latest` = '"+data.album_events_latest+"' WHERE `tb_album_events`.`album_events_code` = '"+data.album_events_code+"'";
    
    
    // console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MyAlbumEvents.deleteAlbumEventsBy = function deleteAlbumEventsBy(data, result) {
    // console.log(" aaaaa = aaaaaa", data);
    var str = "DELETE FROM `tb_album_events` WHERE `tb_album_events`.`album_events_code` = '"+data.album_events_code+"'"
       const path = directory + data.album_events_file
    //    console.log(path);
       
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
            //    console.log("error: ", err);
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

MyAlbumEvents.getAlbumEventsByMaxCode = function getAlbumEventsByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(album_events_code), 3, 7)+1,4,'0')   AS album_events_create_code  FROM `tb_album_events`";
    sql.query(str, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
 };

module.exports = MyAlbumEvents;