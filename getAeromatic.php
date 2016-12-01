<!DOCTYPE html>
<html>
<head>
    <title>The Essential CookBook</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="bootstrap-3.0.0/dist/css/bootstrap.min.css" rel="stylesheet" media="screen">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="style.css">
        <script src="bootstrap-3.0.0/assets/js/html5shiv.js"></script>
        <script src="bootstrap-3.0.0/assets/js/respond.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
		<script src="essentialScript1.js"></script>
		<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="bootstrap-3.0.0/dist/js/bootstrap.min.js"></script>
		<script src="js/bootstrap.js"></script>
		<script src="js/bootstrap.min.js"></script>

</head>
<body>					
<?php
require 'recipesConn.php';						
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

/* check connection */
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT RECIPENAME, INGREDIENTS FROM recipes WHERE CATEGORY LIKE 'aeromatic'";


$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
		echo '<br>';
		echo '<div class="text-align-left" style="color: black;">';
		echo '<a href="getAeromatic.php?keyword='.$row['RECIPENAME'].'">'.$row['RECIPENAME'].'</a><br>';
		echo $row["INGREDIENTS"]. "<br>";
		echo "<br>";
		echo '</div>';
    }
} else {
    echo "0 results";
}


/* close connection */
$conn->close();
?>	
</body>
</html>