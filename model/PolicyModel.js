var sql = require('./BaseModel');

var MyPolicy = function (MyPolicy) {
    this.MyPolicy = MyPolicy.MyPolicy;
    this.status = MyPolicy.status;
    this.created_at = new Date();
};


MyPolicy.getPolicyBy = function getPolicyBy(id, result) {
    console.log(" = 123456" ,id);
    var str = "SELECT * FROM tb_policy"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyPolicy.getPolicyByCode = function getPolicyByCode(data, result) {    
    
    var str = "SELECT * FROM tb_policy WHERE policy_code = '"+data[0].policy_code+"'"
        sql.query(str, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

MyPolicy.insertPolicyBy = function insertPolicyBy(data, result) {
    var str = "INSERT INTO `tb_policy` ( `policy_code`,`policy_name_th`,`policy_name_en`, `policy_detail_th`, `policy_detail_en`, `addby`, `adddate`)"
            + "VALUES ("
            +"'"+data.policy_code+"',"
            +"'"+data.policy_name_th+"',"
            +"'"+data.policy_name_en+"',"
            +"'"+data.policy_detail_th+"',"
            +"'"+data.policy_detail_en+"',"
            +"'"+data.policy_admin+"',"
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
MyPolicy.updatePolicyBy = function updatePolicyBy(data, result) {
    console.log("ad = ", data);
    var str = "UPDATE `tb_policy` SET `policy_name_th` = '"+data.policy_name_th
    +"', `policy_name_en` = '"+data.policy_name_en
    +"', `policy_detail_th` = '"+data.policy_detail_th
    +"', `policy_detail_en` = '"+data.policy_detail_en
    +"', `updateby` = '"+data.policy_admin
    +"', `lastupdate` = NOW() "
    +" WHERE `tb_policy`.`policy_code` = '"+data.policy_code+"'";
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
MyPolicy.latestPolicyBy = function latestPolicyBy(data, result) {
    console.log(" = ", data);
    var str = "UPDATE `tb_policy` SET `policy_latest` = '"+data.policy_latest+"' WHERE `tb_policy`.`policy_code` = '"+data.policy_code+"'";
    
    
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
MyPolicy.deletePolicyBy = function deletePolicyBy(data, result) {
    console.log(" = ", data.policy_code);
    var str = "DELETE FROM `tb_policy` WHERE `tb_policy`.`policy_code` = '"+data.policy_code+"'"
          
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
MyPolicy.getPolicyByMaxCode = function getPolicyByMaxCode(data,result) {
    var str = "SELECT  LPAD( SUBSTRING(max(policy_code), 3, 7)+1,4,'0')   AS policy_create_code  FROM `tb_policy`";
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

module.exports = MyPolicy;