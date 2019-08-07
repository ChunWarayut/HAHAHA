var sql = require('./BaseModel');

var MyBooking = function (MyBooking) {
    this.MyBooking = MyBooking.MyBooking;
    this.status = MyBooking.status;
    this.created_at = new Date();
};


MyBooking.getBookingBy = function getBookingBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_booking"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyBooking.getBookingByCode = function getBookingByCode(data, result) { 
    console.log(" = 123456" ,data);
    var str = "SELECT * FROM tb_booking WHERE booking_code = '"+data[0].booking_code+"'"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    console.log(" = 123456" ,str);
});
};

MyBooking.insertBookingBy = function insertBookingBy(data, result) {
    var str = "INSERT INTO `tb_booking` ( `booking_code`,`booking_firstname`,`booking_lastname`,`booking_subject`,`booking_detail`,`booking_phone`,`booking_email`,`booking_see` , `adddate`)"
    // var arr=[];
    // for(var i = 0; i < data.length; i++){
    //     arr[i] = "('"+data[i].booking_code+"','"+data[i].booking_name+"')";
    //     if(i < data.length-1){
    //         arr[i] = arr[i] + ",";
    //     }
    //     str = str + arr[i] ;
    // }
    // console.log("",str);

            + "VALUES ("
            +"'"+data.booking_code+"',"
            +"'"+data.booking_firstname+"',"
            +"'"+data.booking_lastname+"',"
            +"'"+data.booking_subject+"',"
            +"'"+data.booking_detail+"',"
            +"'"+data.booking_phone+"',"
            +"'"+data.booking_email+"',"
            +"'"+data.booking_see+"',"
          
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

MyBooking.updateBookingBy = function updateBookingBy(data, result) {
    console.log(" = ", data.user_code);
    var str = "UPDATE `tb_booking` SET `booking_firstname` = '"+data.booking_firstname
    +"', `booking_lastname` = '"+data.booking_lastname
    +"', `booking_subject` = '"+data.booking_subject
    +"', `booking_detail` = '"+data.booking_detail
    +"', `booking_phone` = '"+data.booking_phone
    +"', `booking_email` = '"+data.booking_email
    +"', `booking_see` = '"+data.booking_see
    +"', `updateby` = '"+data.booking_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_booking`.`booking_code` = '"+data.booking_code+"'"
    
    
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
MyBooking.latestBookingBy = function latestBookingBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_booking` SET `booking_see` = '"+data.see+"' WHERE `tb_booking`.`booking_code` = '"+data.booking_code+"'";
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
MyBooking.deleteBookingBy = function deleteBookingBy(data, result) {
    console.log(" = ", data.booking_code);
    var str = "DELETE FROM `tb_booking` WHERE `tb_booking`.`booking_code` = '"+data.booking_code+"'"
          
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
MyBooking.getBookingByMaxCode = function getBookingByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(booking_code), 3, 7)+1,4,'0')   AS booking_create_code  FROM `tb_booking`";
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
module.exports = MyBooking;