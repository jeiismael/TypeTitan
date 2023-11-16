<?php
include "config.php";     

if (isset($_POST['username'])) {
    $username = $_POST['username'];
    $cpm = $_POST['cpm'];
    $wpm = $_POST['wpm'];
    $accuracy = $_POST['accuracy'];
    $err = $_POST['err'];
     

    $response = array();
    
    $sqlGetUserId = "SELECT id FROM `tbl_accounts` WHERE username = '$username'";
    $result = $conn->query($sqlGetUserId);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $user_id = $row['id']; 
 

        $sqlInsertStats = "INSERT INTO `tbl_beginnerstats` (username, cpm, wpm, accuracy, err) VALUES ('$username', '$cpm', '$wpm', '$accuracy', '$err')";
        $isInserted = $conn->query($sqlInsertStats);

        if ($isInserted) {
            $response = array(
                "status" => 200,
                "message" => "Stats data inserted successfully",
            );
        } else {
            $response = array(
                "status" => 400,
                "message" => "Failed to insert stats data",
            );
        }
    } else {
        $response = array(
            "status" => 400,
            "message" => "User not found",
        );
    }

    echo json_encode($response);
}
?>
