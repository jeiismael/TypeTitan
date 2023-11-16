<?php 
include "config.php";

$sql = "SELECT username, cpm FROM tbl_beginnerstats ORDER BY cpm DESC LIMIT 15";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            "username" => $row['username'],
            "cpm" => $row['cpm'],
        );
    }
}

echo json_encode($data);
