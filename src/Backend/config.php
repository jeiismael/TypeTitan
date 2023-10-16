<?php 
include "env.php";
session_start();
header('Access-Control-Allow-Origin: *');

$conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_PORT);

if (!$conn) {
    echo "Connection failed";
    return;
}