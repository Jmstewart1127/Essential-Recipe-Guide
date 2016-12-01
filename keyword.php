<?php

		require 'recipesConn.php';
    
        $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name); //Connection to my database
        $keyword = isset($_GET['keyword']) ? $_GET['keyword'] : 0;
        $query = "SELECT RECIPENAME, INGREDIENTS FROM recipes WHERE RECIPENAME LIKE '$keyword'";
        $statement = mysqli_prepare($conn, $query);
       
        $statement->execute();
        $statement->store_result();
		
        if($statement->num_rows() == 0) // so if we have 0 records acc. to keyword display no records found
        {
            echo '<div id="item">No results found</div>';
            $statement->close();
            $conn->close();
        }
        else {
            $statement->bind_result($name, $ingredients);
            while ($statement->fetch()) //outputs the records
            {
				if(!empty($name) && !empty($ingredients)){
					echo '<h3>' .$name. '</h3>';
					echo '<p>' .$ingredients. '</p>';
				}
            }
            $statement->close();
            $conn->close();
        }
    
?>