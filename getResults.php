
<?php
$conn = new mysqli("localhost", "root", "Js1029492", "recipes");

/* check connection */
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT RECIPENAME, INGREDIENTS FROM recipes WHERE CATEGORY LIKE 'spa'";


$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
		echo '<a href="essentialGet.php?keyword='.$row['RECIPENAME'].'">'.$row['RECIPENAME'].'</a><br>';
		echo $row["INGREDIENTS"]. "<br>";
		echo "<br>";
		echo "<br>";
    }
} else {
    echo "0 results";
}


/* close connection */
$conn->close();
?>