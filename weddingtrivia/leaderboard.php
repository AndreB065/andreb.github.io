<?php
	$title = 'Leader Board';
    	include 'includes/leaderheader.php';

	$dsn = 'mysql:host=localhost';
	$userName = 'andre';
	$userPassword = 'andre';		
	$db = new PDO($dsn, $userName, $userPassword);
		
	$dbqry = 'USE contact';
	$usedb = $db->exec($dbqry);
	$dbState = $db->errorCode();
	if ($dbState != '0000')
	echo "<p>$dbState : Database Use Error</p>";

	$results=array();
	$query = 'SELECT * FROM trivia order by num_correct desc, elapsed_time asc;';
	try {
		$statement = $db->prepare($query);
		$statement->execute(array());
		$results = $statement->fetchAll(PDO::FETCH_ASSOC);
		$statement->closeCursor();	
	} 
	catch (PDOException $e) {
		$errorMessage = $e->getMessage();
		echo $errorMessage;
	}
	
	$count=1;
	echo "<h2>Leader Board:</h2>";
	echo "<table border=2 cellspacing=2 cellpadding=5 bordercolor=black >";
	echo "<tr><th>#</th><th>Player 1</th><th>Player 2</th><th>Speed(sec)</th><th>Correct</th></tr>";
	foreach($results as $result)
	{
		echo sprintf("<tr><td>%d</td><td>%s</td><td>%s</td><td>%d</td><td>%d</td></tr>",
			$count,$result["player1"],$result["player2"],$result["elapsed_time"],$result["num_correct"]);
		$count++;
	}
	echo "</table>";
	include 'includes/footer.php';
?>
