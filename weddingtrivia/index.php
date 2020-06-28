<?php
	$title = 'Trivia Game';
	include 'includes/header.php';
?>

		<main>
			<div class="header">
				<h2>Welcome</h2><p>Thank you for taking the time to be here. We really appreciate you.</p>
			</div>
			<hr>
<div id="sign-in-container" class="row">
			<img src="includes/heart-shaped.jpg" class="col-6" alt="Pic of Cendy and Andre">
<div id="form-container" class="col-3">
			<p>Please fill in each player's first name and last initial below.</p>
			<form action="questions.php" onsubmit="return checkNames();" method="post">
				<label for="player1">Player 1 Name: </label> 
				<input id="player1" type="text" name="player1-name" placeholder="e.g., Bruce W."><br>
				<label for="player2">Player 2 Name: </label> 
				<input id="player2" type="text" name="player2-name" placeholder="e.g., Selena K."><br>
				<button class="btn-primary" type="submit">Start</button>
			</form>
</div>
</div>
		</main>
<hr>
<?php
	include 'includes/footer.php';
?>
