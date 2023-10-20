<?php
include "config.php";

if (isset($_GET['index'])) {
    $sqlAccountsQuery = "SELECT * FROM `tbl_accounts`";
    $result = $conn->query($sqlAccountsQuery);

    $response = array();

    while ($row = $result->fetch_assoc()) {
        array_push($response, $row);
    }

    echo json_encode($response); //response()->json(Accounts::all());
}
// Register
if (isset($_POST['store'])) { //function store(Request $request)
    $request = json_decode($_POST['store']);

    $newAccount = array(
        "username" => $request->username,
        "password" => $request->password        
    );

    $sqlCheckDuplicate = "SELECT COUNT(id) as 'total' FROM `tbl_accounts` where username = '{$newAccount["username"]}'"; // check if there are duplicate usernames
    $result = $conn->query($sqlCheckDuplicate);
    
    while ($row = $result->fetch_assoc()) {
        if ($row["total"] > 0) {
            $response["message"] = "Username already exist";
            $response["status"] = 400;
            echo json_encode($response);
            return;
        }
    }


    $isInserted = $conn->query("INSERT INTO `tbl_accounts`(`username`, `password`) VALUES ('{$newAccount['username']}','{$newAccount['password']}')");
    
    $response = array();

    if ($isInserted) {
        $response["message"] = "Account Created";
        $response["status"] = 200;
    } else {
        $response["message"] = "Username already exist";
        $response["status"] = 400;
    }
    echo json_encode($response);

}

// if (isset($_POST['update'])) {
//     $username = $_POST['id'];
//     $request = json_decode($_POST['update']);

//     $newAccount = array(
//         "username" => $request->username,
//         "password" => $request->password,
//         "role" => $request->role
//     );

//     $isUpdated = $conn->query("UPDATE `tbl_accounts` SET `password`='{$newAccount['password']}',`role`='{$newAccount['role']}' WHERE username = '$username'");

//     $response = array();

//     if ($isUpdated) {
//         $response["message"] = "Updated";
//         $response["status"] = 200;
//     } else {
//         $response["message"] = "Failed";
//         $response["status"] = 400;
//     }
//     echo json_encode($response);
// }

// if (isset($_POST['destroy'])) {
//     $username = $_POST['destroy'];

//     $isDeleted = $conn->query("DELETE FROM `tbl_accounts` WHERE username = '$username'");

//     $response = array();

//     if ($isDeleted) {
//         $response["message"] = "Deleted";
//         $response["status"] = 200;
//     } else {
//         $response["message"] = "Failed";
//         $response["status"] = 400;
//     }
//     echo json_encode($response);

// }
?>