var sql = require('./BaseModel');

var MyContact = function (MyContact) {
    this.MyContact = MyContact.MyContact;
    this.status = MyContact.status;
    this.created_at = new Date();
};


MyContact.getContactBy = function getContactBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_contact"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyContact.getContactByCode = function getContactByCode(data, result) { 
    console.log(" = 123456" ,data);
    var str = "SELECT * FROM tb_contact WHERE contact_code = '"+data[0].contact_code+"'"
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

MyContact.insertContactBy = function insertContactBy(data, result) {
    var str = "INSERT INTO `tb_contact` ( `contact_code`,`contact_firstname`,`contact_lastname`,`contact_subject`,`contact_detail`,`contact_phone`,`contact_email`,`contact_see` , `adddate`)"
    // var arr=[];
    // for(var i = 0; i < data.length; i++){
    //     arr[i] = "('"+data[i].contact_code+"','"+data[i].contact_name+"')";
    //     if(i < data.length-1){
    //         arr[i] = arr[i] + ",";
    //     }
    //     str = str + arr[i] ;
    // }
    // console.log("",str);

            + "VALUES ("
            +"'"+data.contact_code+"',"
            +"'"+data.contact_firstname+"',"
            +"'"+data.contact_lastname+"',"
            +"'"+data.contact_subject+"',"
            +"'"+data.contact_detail+"',"
            +"'"+data.contact_phone+"',"
            +"'"+data.contact_email+"',"
            +"'"+data.contact_see+"',"
          
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

MyContact.updateContactBy = function updateContactBy(data, result) {
    console.log(" = ", data.user_code);
    var str = "UPDATE `tb_contact` SET `contact_firstname` = '"+data.contact_firstname
    +"', `contact_lastname` = '"+data.contact_lastname
    +"', `contact_subject` = '"+data.contact_subject
    +"', `contact_detail` = '"+data.contact_detail
    +"', `contact_phone` = '"+data.contact_phone
    +"', `contact_email` = '"+data.contact_email
    +"', `contact_see` = '"+data.contact_see
    +"', `updateby` = '"+data.contact_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_contact`.`contact_code` = '"+data.contact_code+"'"
    
    
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
MyContact.latestContactBy = function latestContactBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_contact` SET `contact_see` = '"+data.contact_see+"' WHERE `tb_contact`.`contact_code` = '"+data.contact_code+"'";
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
MyContact.deleteContactBy = function deleteContactBy(data, result) {
    console.log(" = ", data.contact_code);
    var str = "DELETE FROM `tb_contact` WHERE `tb_contact`.`contact_code` = '"+data.contact_code+"'"
          
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
MyContact.getContactByMaxCode = function getContactByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(contact_code), 3, 7)+1,4,'0')   AS contact_create_code  FROM `tb_contact`";
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
module.exports = MyContact;