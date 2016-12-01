<?php

require 'recipesConn.php';

error_reporting(E_ALL);
$link = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
echo $link->connect_errno;

if(!empty($_POST['recipeName']) || !empty($_POST['ingredients'])){

if ($link->connect_errno) {
    die('Could not connect: ' . mysqli_error());
}
echo 'Connected successfully';



$category = isset($_POST['category']) ? $_POST['category'] : 0;
$recipename = isset($_POST['recipeName']) ? $_POST['recipeName'] : 0;
$ingredients = nl2br(isset($_POST['ingredients']) ? $_POST['ingredients'] : 0);
$rating = 1;

$insert = "INSERT INTO recipes (ID, RECIPENAME, INGREDIENTS, CATEGORY, RATING)
			VALUES ('', '$recipename', '$ingredients', '$category', '$rating')";

if ($link->query($insert) == true) {
	echo "recorded successfully... holy shit finally.";
}
else {
	echo "error";
}

$link->close();
}
?>
