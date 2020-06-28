<?php
	$title = 'Results';
	include 'includes/header.php';

	$player1 = $_REQUEST['player1'];	
	$player2 = $_REQUEST['player2'];	
	$starttime = $_REQUEST["start-time"];
	$endtime = time();
	$elapsedtime = $endtime - $starttime;
	
	print("Time elapsed: " . $elapsedtime);
	
	$ans1 = filter_input(INPUT_POST,'ques1');
	$ans2 = filter_input(INPUT_POST,'ques2');
	$ans3 = filter_input(INPUT_POST,'ques3');
	$ans4 = filter_input(INPUT_POST,'ques4');
	$ans5 = filter_input(INPUT_POST,'ques5');
	$ans6 = filter_input(INPUT_POST,'ques6');
	$ans7 = filter_input(INPUT_POST,'ques7');
	$ans8 = filter_input(INPUT_POST,'ques8');
	$ans9 = filter_input(INPUT_POST,'ques9');
	$ans10 = filter_input(INPUT_POST,'ques10');
	$ans11 = filter_input(INPUT_POST,'ques11');
        $ans12 = filter_input(INPUT_POST,'ques12');
        $ans13 = filter_input(INPUT_POST,'ques13');
        $ans14 = filter_input(INPUT_POST,'ques14');
        $ans15 = filter_input(INPUT_POST,'ques15');
        $ans16 = filter_input(INPUT_POST,'ques16');
        $ans17 = filter_input(INPUT_POST,'ques17');
        $ans18 = filter_input(INPUT_POST,'ques18');
        $ans19 = filter_input(INPUT_POST,'ques19');
        $ans20 = filter_input(INPUT_POST,'ques20');

	$totalCorrect = 0;
	
	if ($ans1 == "D") { $totalCorrect++; }
	if ($ans2 == "B") { $totalCorrect++; }
	if ($ans3 == "C") { $totalCorrect++; }
	if ($ans4 == "A") { $totalCorrect++; }
	if ($ans5 == "B") { $totalCorrect++; }
	if ($ans6 == "B") { $totalCorrect++; }
	if ($ans7 == "D") { $totalCorrect++; }
	if ($ans8 == "A") { $totalCorrect++; }
	if ($ans9 == "B") { $totalCorrect++; }
	if ($ans10 == "B") { $totalCorrect++; }
	if ($ans11 == "D") { $totalCorrect++; }
        if ($ans12 == "B") { $totalCorrect++; }
        if ($ans13 == "B") { $totalCorrect++; }
        if ($ans14 == "A") { $totalCorrect++; }
        if ($ans15 == "C") { $totalCorrect++; }
        if ($ans16 == "B") { $totalCorrect++; }
        if ($ans17 == "C") { $totalCorrect++; }
        if ($ans18 == "A") { $totalCorrect++; }
        if ($ans19 == "B") { $totalCorrect++; }
        if ($ans20 == "B") { $totalCorrect++; }

	$wrong = 20 - $totalCorrect;

	$dsn = 'mysql:host=localhost';
	$userName = 'andre';
	$userPassword = 'andre';		
	$db = new PDO($dsn, $userName, $userPassword);
		
	$dbqry = 'USE contact';
	$usedb = $db->exec($dbqry);
	$dbState = $db->errorCode();
	if ($dbState != '0000')
	echo "<p>$dbState : Database Use Error</p>";

	$bRecordExists=false;
	$query = 'SELECT * FROM trivia WHERE player1=? AND player2=?';
	try {
		$statement = $db->prepare($query);
		$statement->execute(array($player1,$player2));
		$results = $statement->fetchAll(PDO::FETCH_ASSOC);
		if(count($results)>0)
		{
			$bRecordExists=true;
		}
		$statement->closeCursor();	
	} 
	catch (PDOException $e) {
		$errorMessage = $e->getMessage();
		echo $errorMessage;
	}
	try {
		if($bRecordExists)
		{
		// update
			$query = 'update trivia set elapsed_time=?,num_correct=? WHERE player1=? AND player2=?';
			$statement = $db->prepare($query);
			$statement->execute(array($elapsedtime,$totalCorrect,$player1,$player2));
		}
		else
		{
		// insert 
			$query = 'insert into trivia (elapsed_time,player1,player2,num_correct) values(?,?,?,?);';
			$statement = $db->prepare($query);
                        $statement->execute(array($elapsedtime,$player1,$player2,$totalCorrect));
		}
		$statement->closeCursor();
	}
	catch (PDOException $e) {
                $errorMessage = $e->getMessage();
                echo $errorMessage;
        }

	
	echo "<h2>Result:</h2>";
	echo "<div id='correct'>$totalCorrect / 20 correct</div>";
	echo "<div id='incorrect'>$wrong / 20 incorrect</div>";
	if($totalCorrect > 15 && $totalCorrect < 20){
		echo "<p>So close... but yet so far.</p>";
	}
	
	if($totalCorrect == 20){
		echo "<h2>Great Job!</h2>";
		echo "<h2>You got them all correct.</h2>";
	//	echo "<p>If no one else beat your time, you are the winner, see Jacell for your prize.</p>";
	}
	echo "<a href='leaderboard.php'><button>Standing</button></a>";
//	echo "<a href=\"questions.php\"><button>Try again!</button></a>";
	
	include 'includes/footer.php';
?>
