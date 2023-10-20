<?php
include "config.php";

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
                $message = "Wrong Password";
                $response = array(
                    "status" => 300,
                    "title" => "Password error",
                    "message" => $message,
                    "username" => $username
                );
            }
        }
    } else {
        $message = "Username not found";
        $response = array(
            "status" => 400,
            "title" => "Failed",
            "message" => $message,
            "username" => ""
        );
    }
    
    echo json_encode($response);
}