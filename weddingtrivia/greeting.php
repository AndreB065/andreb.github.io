<?php
//This script captures user profile information

	$player1_name = filter_input(INPUT_POST, 'player1-name');
	$player2_name = filter_input(INPUT_POST, 'player2-name');
	
	echo '<p><strong>Welcome:</strong> ' . $player1_name . ' and ' . $player2_name . '</p>';
	echo '<p>Are you ready to play a great game?</p>';
	echo "<a href=\"questions.php\"><button>Yes</button></a>&nbsp;";
	echo "<a href=\"index.php\"><button>No</button></a>";
?>