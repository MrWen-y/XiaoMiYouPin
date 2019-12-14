<?php
# zs 123
# 001 先连接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "xiaomiyoupin");
mysqli_set_charset($db,'utf8');

# 002 先获取用户提交的用户名和密码
$good_id = $_REQUEST["good_id"];
# 003 根据获取的数据去数据库中进行对比(匹配)
$sql = "SELECT * FROM getdetails WHERE good_id = '$good_id'";
$result = mysqli_query($db, $sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data, true);
?>