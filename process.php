<?php
include "db_conn.php";
$obj = new Connection();
$conn = $obj->connection();
// if ($conn && isset($_GET['stoel'])) {
if ($conn) {
    // $sql = "SELECT * FROM `stoelen` WHERE id=$num";
    $sql = "SELECT * FROM `stoelen`";
    $result = mysqli_query($conn, $sql);
    $array = array();

    while ($row_users = mysqli_fetch_assoc($result)) {
        $array[] = intval($row_users['status']);
    }
    echo json_encode($array);
}

$i = 0;
if (isset($_GET['update'])) {
    $update = $_GET['update'];
    $arr = json_decode($update);
    foreach ($arr as $item) {
        $i++;
        $sql = "UPDATE stoelen SET status=$item WHERE id=$i";
        $result = mysqli_query($conn, $sql);
    }
}
