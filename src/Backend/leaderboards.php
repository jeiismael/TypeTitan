<?php 
include "config.php";

$sql = "SELECT username, wpm FROM tbl_stats ORDER BY wpm DESC LIMIT 10";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = array(
            "username" => $row['username'],
            "wpm" => $row['wpm'],
        );
    }
}

echo json_encode($data);
