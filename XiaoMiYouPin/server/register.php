<?php
# （1） 先获取用户提交的参数
$email = $_REQUEST["email"];
$password = $_REQUEST["password"];

# (2) 通过PHP代码来操作数据库
# 001 先连接数据库
$db = mysqli_connect("127.0.0.1","root","","xiaomiyoupin");

# 002 先检查当前的用户名是否已经被注册,如果已经被注册，返回错误的提示信息。
$sql = "SELECT * FROM user WHERE email = '$email'";

#执行查询语句
$result = mysqli_query($db, $sql);
/* 
mysqli_result Object
(
    [current_field] => 0
    [field_count] => 4
    [lengths] => 
    [num_rows] => 1   表示查询到的结果有一行
    [type] => 0
)
*/
$response = array("status"=>"","msg"=>"");
if(mysqli_num_rows($result) == 1)
{
  /* 该用户名已经被注册！！ */
  $response["status"] = "error";
  $response["msg"] = " 该用户名已经被注册！！";
  echo json_encode($response,true);
}else{
  /* 执行插入语句 */
  $insertSql = "INSERT INTO `user` (`id`, `email`, `password`) VALUES (NULL, '$email', '$password');";
  $res = mysqli_query($db, $insertSql);
  // echo $insertSql ;
  $response["status"] = "ok";
  $response["msg"] = " 恭喜您注册成功！";
  echo json_encode($response, true);
}
?>