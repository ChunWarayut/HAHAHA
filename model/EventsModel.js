var sql = require('./BaseModel');

var MyEvents = function (MyEvents) {
    this.MyEvents = MyEvents.MyEvents;
    this.status = MyEvents.status;
    this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/events/';

var today = new Date();
MyEvents.getEventsBy = function getEventsBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT *,DATE(`events_startdate`) AS `events_startcheck` FROM tb_events"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyEvents.getEventsByCode = function getEventsByCode(data, result) {    
    
    var str = "SELECT * FROM tb_events WHERE events_code = '"+data[0].events_code+"'"

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

MyEvents.getEventsByDate = function getEventsByDate(date, result) {
    console.log(" = 123456" ,date);
    var month = '' + (today.getMonth()+1);
    var day = '' + today.getDate();
    var year = today.getFullYear();
    if(month.length < 2)month = '0'+ month;
    if(day.length < 2)day = '0'+ day;
    console.log(month,day,year);
    var date_now = year+'-'+month+'-'+day
    console.log(date_now);
    
    
    var str = "SELECT * FROM tb_events "
    +"WHERE STR_TO_DATE(`events_enddate`,'%Y-%m-%d') > STR_TO_DATE('"+date_now+"','%Y-%m-%d') OR STR_TO_DATE(`events_startdate`,'%Y-%m-%d') > STR_TO_DATE('"+date_now+"','%Y-%m-%d')"
    console.log(str);
    
    +"ORDER BY `tb_events`.`events_startdate` ASC"
        sql.query(str, function (err, res) {
        if (err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
MyEvents.getEventsByDateNew = function getEventsByDateNew(date, result) {
    var date_seven = new Date();
    date_seven.setDate(date_seven.getDate() + 7);
    //set now
    var month = '' + (today.getMonth()+1);
    var day = '' + today.getDate();
    var year = today.getFullYear()+543;
    if(month.length < 2)month = '0'+ month;
    if(day.length < 2)day = '0'+ day;
    var date_now = year+'-'+month+'-'+day
    //set seven
    var month_seven = '' + (date_seven.getMonth()+1);
    var day_seven = '' + date_seven.getDate();
    var year_seven = date_seven.getFullYear()+543;
    if(month_seven.length < 2)month_seven = '0'+ month_seven;
    if(day_seven.length < 2)day_seven = '0'+ day_seven;
    date_seven = year_seven+'-'+month_seven+'-'+day_seven

    console.log(date_now);
    console.log(date_seven);
    
    var str = "SELECT `events_code`,`events_name_th`,`events_name_en`,`events_location_th`,`events_location_en`,`events_description_th`,`events_description_en`,`events_startdate`,`events_enddate`,`events_image` FROM `tb_events` WHERE "
    +"STR_TO_DATE(`events_startdate`,'%Y-%m-%d') >= STR_TO_DATE('"+date_now+"','%Y-%m-%d')"
    +"AND STR_TO_DATE(`events_startdate`,'%Y-%m-%d') < STR_TO_DATE('"+date_seven+"','%Y-%m-%d')"
    +"ORDER BY `tb_events`.`events_startdate` ASC"
    console.log("test Events",str);

    sql.query(str, function (err, res) {
    console.log("test Events",res);

        if (err) {
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyEvents.getEventsByList = function getEventsByList(data, result) {    
    
    var str = "SELECT * FROM tb_events WHERE events_code = '"+data.events_code+"'"

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
MyEvents.insertEventsBy = function insertEventsBy(data, result) {
    var str = "INSERT INTO `tb_events`(`events_code`, `events_name_th`, `events_name_en`, `events_location_th`, `events_location_en`, `events_tag_th`, `events_tag_en`, `events_description_th`, `events_description_en`, `events_startdate`, `events_enddate`, `events_detail_th`, `events_detail_en`, `events_image`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.events_code+"',"
            +"'"+data.events_name_th+"',"
            +"'"+data.events_name_en+"',"
            +"'"+data.events_location_th+"',"
            +"'"+data.events_location_en+"',"
            +"'"+data.events_tag_th+"',"
            +"'"+data.events_tag_en+"',"
            +"'"+data.events_description_th+"',"
            +"'"+data.events_description_en+"',"
            +"'"+data.events_startdate+"',"
            +"'"+data.events_enddate+"'," 
            +"'"+data.events_detail_th+"',"
            +"'"+data.events_detail_en+"',"
            +"'"+data.events_image+"',"
            +"'"+data.events_admin+"',"
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

MyEvents.updateEventsBy = function updateEventsBy(data, result) {
    console.log("ad = ", data);
    var str = "UPDATE `tb_events` SET `events_name_th` = '"+data.events_name_th
    +"', `events_name_en` = '"+data.events_name_en
    +"', `events_location_th` = '"+data.events_location_th
    +"', `events_location_en` = '"+data.events_location_en
    +"', `events_tag_th` = '"+data.events_tag_th
    +"', `events_tag_en` = '"+data.events_tag_en
    +"', `events_description_th` = '"+data.events_description_th
    +"', `events_description_en` = '"+data.events_description_en
    +"', `events_startdate` = '"+data.events_startdate
    +"', `events_enddate` = '"+data.events_enddate
    +"', `events_detail_th` = '"+data.events_detail_th
    +"', `events_detail_en` = '"+data.events_detail_en
    +"', `events_image` = '"+data.events_image

    +"', `updateby` = '"+data.events_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_events`.`events_code` = '"+data.events_code+"'";
    console.log("str = ", str);
    sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            if( data.events_image != data.events_true){
                const path = directory +data.events_true
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
MyEvents.latestEventsBy = function latestEventsBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_events` SET `events_latest` = '"+data.events_latest+"' WHERE `tb_events`.`events_code` = '"+data.events_code+"'";
    
    
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
MyEvents.deleteEventsBy = function deleteEventsBy(data, result) {
    console.log(" = ", data);
    var str = "DELETE FROM `tb_events` WHERE `tb_events`.`events_code` = '"+data.events_code+"'"
          
            console.log("str = ", str);
       sql.query(str, function (err, res) {
           if (err) {
               console.log("error: ", err);
               result(null, err);
           }else{
                const path = directory +data.events_image
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

MyEvents.getEventsByMaxCode = function getEventsByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(events_code), 3, 7)+1,4,'0')   AS events_create_code  FROM `tb_events`";
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

module.exports = MyEvents;