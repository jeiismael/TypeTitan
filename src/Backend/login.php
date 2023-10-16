<?php
include "configg.php";

if (isset($_POST['auth'])) {
    $data = json_decode($_POST['auth']);

    $username = $data->username;
    $password = $data->password;

    $response = array();

    $sqlAccountsQuerry = "SELECT * FROM `tbl_accounts` where username = '$username'";
    $result = $conn->query($sqlAccountsQuerry);

    $message = "";

    if ($result->num_rows> 0) {
        while ($row = $result->fetch_assoc()) {
            if ($row["password"] === $password) {
                $message = "$username is now logged in.";
                $response = array(
                    "status" => 200,
                    "title" => "Success",
                    "message" => $message,
                    "username" => $username
                );
            } else {
                $message = "Invalid";
                $response = array(
                    "status" => 300,
                    "title" => "Invalid",
                    "message" => $message,
                    "username" => $username
                );
            }
        }
    } else {
        $mesasge = "invalid username";
        $response = array(
            "status" => 400;
            "title" => "Success"
            "message" => $message,
            "username" => ""
        );
    }
    
    echo json_encode($response);
}