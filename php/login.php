<?php
// 接收前端传递过来的数据
// $username = $_POST["username"];
// $password = $_POST["password"];

// return[
//     "type" => "mysql",

//     "hostnam" => "121.196.219.212",

//     "database" => "lm_qsg",

//     "username" => "linmeng",

//     "password" => "@LinMeng2023",

//     "hostport" => "3306",

//     "charset"   =>  "utf8mb4",

// ]


// 链接数据库
$conn = @mysqli_connect("localhost","linmeng","@LinMeng2023","lm_qsg");


// 定义查询语句
$selectSQL = "SELECT * FROM lm WHERE username = '$username' and password = '$password";

// 是否查询到
$result = mysqli_query($conn,$selectSQL);


// 获取结果集中的数据条数
$num = mysqli_num_rows($result);

echo $num;
?>