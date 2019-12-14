<?php
/*01-链接数据库 */
header("Content-Type: textml; charset=UTF-8");
$db = mysqli_connect("127.0.0.1","root","","xiaomiyoupin");
mysqli_set_charset($db,'utf8');

// 查询获取数据库所有的数据
$sql= "SELECT * FROM nav";
$result = mysqli_query($db,$sql);
// 把数据库中的获取所有数据转换喂JSON返回
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);

?>