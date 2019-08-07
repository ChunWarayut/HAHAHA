var sql = require('./BaseModel');

var MyBlogs = function (MyBlogs) {
  this.MyBlogs = MyBlogs.MyBlogs;
  this.status = MyBlogs.status;
  this.created_at = new Date();
};
var fs = require('fs');
let directory = '../image/blogs/';

MyBlogs.getBlogsBy = function getBlogsBy(id, result) {
  // console.log(" = 123456" ,id);
  var str = "SELECT * FROM tb_blogs"
    sql.query(str, function (err, res) {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
  });
};

MyBlogs.getBlogsByAdmin = function getBlogsByAdmin(id, result) {
  // console.log(" = 123456" ,id);
  // var str = "SELECT *,tb_blogs.`adddate` AS blogs_adddate FROM tb_blogs INNER JOIN tb_admin ON tb_blogs.addby = tb_admin.admin_code"
  var str = "SELECT *,DATE_FORMAT(`tb_blogs`.`adddate`, '%d/%m/%Y')  AS `blogs_adddate` FROM `tb_blogs`INNER JOIN tb_admin ON tb_blogs.addby = tb_admin.admin_code"
    // console.log("123456s blogs",str);
    
    sql.query(str, function (err, res) {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
  });
};

MyBlogs.getBlogsByCode = function getBlogsByCode(data, result) {  
  
  var str = "SELECT * FROM tb_blogs WHERE blogs_code = '"+data[0].blogs_code+"'"
    sql.query(str, function (err, res) {
    if (err) {
      // console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
  });
};

MyBlogs.insertBlogsBy = function insertBlogsBy(data, result) {
  var str = "INSERT INTO `tb_blogs` ( `blogs_code`,`blogs_header_th`, `blogs_header_en`, `blogs_tag_th`, `blogs_tag_en`, `blogs_description_th`, `blogs_description_en`, `blogs_detail_th`, `blogs_detail_en`, `blogs_image`, `addby`, `adddate`)"
      + "VALUES ("
      +"'"+data.blogs_code+"',"
      +"'"+data.blogs_header_th+"',"
      +"'"+data.blogs_header_en+"',"
      +"'"+data.blogs_tag_th+"',"
      +"'"+data.blogs_tag_en+"',"
      +"'"+data.blogs_description_th+"',"
      +"'"+data.blogs_description_en+"',"
      +"'"+data.blogs_detail_th+"',"
      +"'"+data.blogs_detail_en+"',"  
      +"'"+data.blogs_image+"',"
      +"'"+data.blogs_admin+"',"
      +"NOW()"
      +")"
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

MyBlogs.updateBlogsBy = function updateBlogsBy(data, result) {
  // console.log("ad = ", data);
  var str = "UPDATE `tb_blogs` SET `blogs_header_th` = '"+data.blogs_header_th
  +"', `blogs_header_en` = '"+data.blogs_header_en
  +"', `blogs_tag_th` = '"+data.blogs_tag_th
  +"', `blogs_tag_en` = '"+data.blogs_tag_en
  +"', `blogs_description_th` = '"+data.blogs_description_th
  +"', `blogs_description_en` = '"+data.blogs_description_en
  +"', `blogs_detail_th` = '"+data.blogs_detail_th
  +"', `blogs_detail_en` = '"+data.blogs_detail_en
  +"', `blogs_image` = '"+data.blogs_image
  +"', `updateby` = '"+data.blogs_admin
  +"', `lastupdate` = NOW() "
  +" WHERE `tb_blogs`.`blogs_code` = '"+data.blogs_code+"'";
  // console.log("str = ", str,data.blogs_true);
  sql.query(str, function (err, res) {
    if (err) {
      result(null, err);
    }else{
      if( data.blogs_image != data.blogs_true){
        const path = directory +data.blogs_true
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
MyBlogs.latestBlogsBy = function latestBlogsBy(data, result) {
  // console.log(" = ", data);
  var str = "UPDATE `tb_blogs` SET `blogs_latest` = '"+data.blogs_latest+"' WHERE `tb_blogs`.`blogs_code` = '"+data.blogs_code+"'";
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
MyBlogs.deleteBlogsBy = function deleteBlogsBy(data, result) {
  // console.log(" = ", data);
  var str = "DELETE FROM `tb_blogs` WHERE `tb_blogs`.`blogs_code` = '"+data.data.blogs_code+"'"
     
      console.log("str = ", str);
    sql.query(str, function (err, res) {
      if (err) {
        // console.log("error: ", err);
        result(null, err);
      }else{
        const path = directory +data.data.blogs_image
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
MyBlogs.getBlogsByMaxCode = function getBlogsByMaxCode(data,result) {
  var str = "SELECT LPAD( SUBSTRING(max(blogs_code), 3, 7)+1,4,'0')  AS blogs_create_code FROM `tb_blogs`";
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

module.exports = MyBlogs;