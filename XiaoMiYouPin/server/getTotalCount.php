<?php
$db = mysqli_connect("127.0.0.1", "root", "", "xiaomiyoupin");
mysqli_set_charset($db,'utf8');

$sql = "SELECT * FROM cart";
$data = mysqli_fetch_all(mysqli_query($db, $sql),MYSQLI_ASSOC);
// print_r($data);
$total = 0;
for($i = 0;$i<count($data);$i++)
{
  $total += $data[$i]["num"];
}
echo json_encode(array("total"=>$total),true);
?>