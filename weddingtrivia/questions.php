<?php
	$title = 'Questions';
	include 'includes/header.php';
	
	$player1 = $_REQUEST["player1-name"];
	$player2 = $_REQUEST["player2-name"];
	$startTime = time();
?>

		<header style='position:fixed;top:0px;height:auto;width:95%;color:white;background-color:blue;'>
			<span style="font-size:26px;margin-left:10px;">Questions</span>
			<span style='font-size:24px;margin-right:10px;float:right;'>Timer: <span id="timer"></span></span>
		</header>
		<hr>
		<main style='padding-top:20px'>
			<p>Answer the following questions by choosing the correct answer:<br>
			<em style="font-size:14px">(The clock is ticking, and remember, speed counts almost as much as having the correct answers.)</em></p>
			<form id="game-questions" action="process.php" method="post" onsubmit="return checkAnswers();">
				<input type="hidden" name="player1" value="<?php echo $player1; ?>">
				<input type="hidden" name="player2" value="<?php echo $player2; ?>">
				<input type="hidden" name="start-time" value="<?php echo $startTime; ?>">
				<ol>
					<li>
						<h4>What is Cendy's nationality?<h4>
						<p><input id="q1ans1" type="radio" name="ques1" value="A">
						<label for="q1ans1">Jamaican</label></p>
						<p><input id="q1ans2" type="radio" name="ques1" value="B">
						<label for="q1ans2">English</label></p>
						<p><input id="q1ans3" type="radio" name="ques1" value="C">
						<label for="q1ans3">Chinese</label></p>
						<p><p><input id="q1ans4" type="radio" name="ques1" value="D">
						<label for="q1ans4">Haitian</label></p>
					</li><br>
					<li>
						<h4>How many siblings does Cendy have?</h4>
						<p><input id="q2ans1" type="radio" name="ques2" value="A">
						<label for="q2ans1">2</label></p>
						<p><input id="q2ans2" type="radio" name="ques2" value="B">
						<label for="q2ans2">3</label></p>
						<p><input id="q2ans3" type="radio" name="ques2" value="C">
						<label for="q2ans3">4</label></p>
						<p><input id="q2ans4" type="radio" name="ques2" value="D">
						<label for="q2ans4">5</label>
					</li><br>
					<li>
						<h4>What day is Cendy's birthday?</h4>
						<p><input id="q3ans1" type="radio" name="ques3" value="A">
						<label for="q3ans1">January 28</label></p>
						<p><input id="q3ans2" type="radio" name="ques3" value="B">
						<label for="q3ans2">February 29</label></p>
						<p><input id="q3ans3" type="radio" name="ques3" value="C">
						<label for="q3ans3">March 17</label></p>
						<p><input id="q3ans4" type="radio" name="ques3" value="D">
						<label for="q3ans4">April 1</label>
					</li><br>
					<li>
						<h4>Who makes a Mach3?</h4>
						<p><input id="q4ans1" type="radio" name="ques4" value="A">
						<label for="q4ans1">Gillette</label></p>
						<p><input id="q4ans2" type="radio" name="ques4" value="B">
						<label for="q4ans2">Porche</label></p>
						<p><input id="q4ans3" type="radio" name="ques4" value="C">
						<label for="q4ans3">Samsung</label></p>
						<p><input id="q4ans4" type="radio" name="ques4" value="D">
						<label for="q4ans4">Jay-Z</label>
					</li><br>
					<li>
						<h4>What is Cendy's favorite color?</h4>
						<p><input id="q5ans1" type="radio" name="ques5" value="A">
						<label for="q5ans1">Blue</label></p>
						<p><input id="q5ans2" type="radio" name="ques5" value="B">
						<label for="q5ans2">Green</label></p>
						<p><input id="q5ans3" type="radio" name="ques5" value="C">
						<label for="q5ans3">Violet</label></p>
						<p><input id="q5ans4" type="radio" name="ques5" value="D">
						<label for="q5ans4">Black</label>
					</li><br>
					<li>
						<h4>What is Andre's nationality?</h4>
						<p><input id="q6ans1" type="radio" name="ques6" value="A">
						<label for="q6ans1">Haitian</label></p>
						<p><input id="q6ans2" type="radio" name="ques6" value="B">
						<label for="q6ans2">Jamaican</label></p>
						<p><input id="q6ans3" type="radio" name="ques6" value="C">
						<label for="q6ans3">English</label></p>
						<p><input id="q6ans4" type="radio" name="ques6" value="D">
						<label for="q6ans4">Floridian</label>
					</li><br>
					<li>
						<h4>How many siblings does Andre have?</h4>
						<p><input id="q7ans1" type="radio" name="ques7" value="A">
						<label for="q7ans1">1</label></p>
						<p><input id="q7ans2" type="radio" name="ques7" value="B">
						<label for="q7ans2">3</label></p>
						<p><input id="q7ans3" type="radio" name="ques7" value="C">
						<label for="q7ans3">5</label></p>
						<p><input id="q7ans4" type="radio" name="ques7" value="D">
						<label for="q7ans4">2</label>
					</li><br>
					<li>
						<h4>What day is Andre's birthday?</h4>
						<p><input id="q8ans1" type="radio" name="ques8" value="A">
						<label for="q8ans1">April 18</label></p>
						<p><input id="q8ans2" type="radio" name="ques8" value="B">
						<label for="q8ans2">January 2</label></p>
						<p><input id="q8ans3" type="radio" name="ques8" value="C">
						<label for="q8ans3">December 21</label></p>
						<p><input id="q8ans4" type="radio" name="ques8" value="D">
						<label for="q8ans4">June 17</label>
					</li><br>
					<li>
						<h4>What is the name of the MC for this event?</h4>
						<p><input id="q9ans1" type="radio" name="ques9" value="A">
						<label for="q9ans1">Marla</label></p>
						<p><input id="q9ans2" type="radio" name="ques9" value="B">
						<label for="q9ans2">Jacell</label></p>
						<p><input id="q9ans3" type="radio" name="ques9" value="C">
						<label for="q9ans3">Karen</label></p>
						<p><input id="q9ans4" type="radio" name="ques9" value="D">
						<label for="q9ans4">Janell</label>
					</li><br>
					<li>
						<h4>What is Andre's favorite color?</h4>
						<p><input id="q10ans1" type="radio" name="ques10" value="A">
						<label for="q10ans1">Black</label></p>
						<p><input id="q10ans2" type="radio" name="ques10" value="B">
						<label for="q10ans2">Blue</label></p>
						<p><input id="q10ans3" type="radio" name="ques10" value="C">
						<label for="q10ans3">Purple</label></p>
						<p><input id="q10ans4" type="radio" name="ques10" value="D">
						<label for="q10ans4">Red</label></p>
					</li><br>
					<li>
						<h4>Which of these is a not real author?</h4>
						<p><input id="q11ans1" type="radio" name="ques11" value="A">
						<label for="q11ans1">Stuart Woods</label></p>
						<p><input id="q11ans2" type="radio" name="ques11" value="B">
						<label for="q11ans2">El James</label></p>
						<p><input id="q11ans3" type="radio" name="ques11" value="C">
						<label for="q11ans3">James Patterson</label></p>
						<p><input id="q11ans4" type="radio" name="ques11" value="D">
						<label for="q11ans4">Sally Rider</label></p>
					</li><br>
					<li>
						<h4>How many years did Andre and Cendy date before the proposal?</h4>
						<p><input id="q12ans1" type="radio" name="ques12" value="A">
						<label for="q12ans1">2</label></p>
						<p><input id="q12ans2" type="radio" name="ques12" value="B">
						<label for="q12ans2">3</label></p>
						<p><input id="q12ans3" type="radio" name="ques12" value="C">
						<label for="q12ans3">4</label></p>
						<p><input id="q12ans4" type="radio" name="ques12" value="D">
						<label for="q12ans4">5</label>
					</li><br>
					<li>
						<h4>When did Andre  propose to Cendy?</h4>
						<p><input id="q13ans1" type="radio" name="ques13" value="A">
						<label for="q13ans1">March 2016</label></p>
						<p><input id="q13ans2" type="radio" name="ques13" value="B">
						<label for="q13ans2">May 2017</label></p>
						<p><input id="q13ans3" type="radio" name="ques13" value="C">
						<label for="q13ans3">April 2015</label></p>
						<p><input id="q13ans4" type="radio" name="ques13" value="D">
						<label for="q13ans4">June 2018</label></p>
					</li><br>
					<li>
						<h4>What is Andre and Cendy's favorite pastime?</h4>
						<p><input id="q14ans1" type="radio" name="ques14" value="A">
						<label for="q14ans1">Watching Movies</label></p>
						<p><input id="q14ans2" type="radio" name="ques14" value="B">
						<label for="q14ans2">Playing Sports</label></p>
						<p><input id="q14ans3" type="radio" name="ques14" value="C">
						<label for="q14ans3">Playing Board Games</label></p>
						<p><input id="q14ans4" type="radio" name="ques14" value="D">
						<label for="q14ans4">Going to the Beach</label></p>
					</li><br>
					<li>
						<h4>What is Andre and Cendy's favorite type of food?</h4>
						<p><input id="q15ans1" type="radio" name="ques15" value="A">
						<label for="q15ans1">Carribean</label></p>
						<p><input id="q15ans2" type="radio" name="ques15" value="B">
						<label for="q15ans2">Spanish</label></p>
						<p><input id="q15ans3" type="radio" name="ques15" value="C">
						<label for="q15ans3">Italian</label></p>
						<p><input id="q15ans4" type="radio" name="ques15" value="D">
						<label for="q15ans4">Greek</label></p>
					</li><br>
					<li>
						<h4>What is Andre and Cendy's favorite restaurant?</h4>
						<p><input id="q16ans1" type="radio" name="ques16" value="A">
						<label for="q16ans1">Chili's</label></p>
						<p><input id="q16ans2" type="radio" name="ques16" value="B">
						<label for="q16ans2">Olive Garden</label></p>
						<p><input id="q16ans3" type="radio" name="ques16" value="C">
						<label for="q16ans3">TGI Friday's</label></p>
						<p><input id="q16ans4" type="radio" name="ques16" value="D">
						<label for="q16ans4">Golden Crust</label></p>
					</li><br>
					<li>
						<h4>Which of these is Andre and Cendy's favorite game?</h4>
						<p><input id="q17ans1" type="radio" name="ques17" value="A">
						<label for="q17ans1">Uno</label></p>
						<p><input id="q17ans2" type="radio" name="ques17" value="B">
						<label for="q17ans2">Bingo</label></p>
						<p><input id="q17ans3" type="radio" name="ques17" value="C">
						<label for="q17ans3">Charades</label></p>
						<p><input id="q17ans4" type="radio" name="ques17" value="D">
						<label for="q17ans4">Chess</label></p>
					</li><br>
					<li>
						<h4>Which of these is Andre and Cendy's favorite TV Show?</h4>
						<p><input id="q18ans1" type="radio" name="ques18" value="A">
						<label for="q18ans1">Game of Thrones</label></p>
						<p><input id="q18ans2" type="radio" name="ques18" value="B">
						<label for="q18ans2">Insecure</label></p>
						<p><input id="q18ans3" type="radio" name="ques18" value="C">
						<label for="q18ans3">Breaking Bad</label></p>
						<p><input id="q18ans4" type="radio" name="ques18" value="D">
						<label for="q18ans4">Shameless</label></p>
					</li><br>
					<li>
						<h4>What is the name of this banquet hall?</h4>
						<p><input id="q19ans1" type="radio" name="ques19" value="A">
						<label for="q19ans1">Oakland Park</label></p>
						<p><input id="q19ans2" type="radio" name="ques19" value="B">
						<label for="q19ans2">Crystal Dreams</label></p>
						<p><input id="q19ans3" type="radio" name="ques19" value="C">
						<label for="q19ans3">Cristol Dreams</label></p>
						<p><input id="q19ans4" type="radio" name="ques19" value="D">
						<label for="q19ans4">Banquet Hall</label></p>
					</li><br>
					<li>
						<h4>Which of these processes makes your hair straight?</h4>
						<p><input id="q20ans1" type="radio" name="ques20" value="A">
						<label for="q20ans1">Braiding</label></p>
						<p><input id="q20ans2" type="radio" name="ques20" value="B">
						<label for="q20ans2">Relaxing</label></p>
						<p><input id="q20ans3" type="radio" name="ques20" value="C">
						<label for="q20ans3">Hot Curling</label></p>
						<p><input id="q20ans4" type="radio" name="ques20" value="D">
						<label for="q20ans4">Gelling</label></p>
					</li>	
				</ol>
				<input type="submit" value="Submit Answers">
				<?php
					//foreach(){};
				//	include 'qa.php';
				?>
			</form>
		</main>
		<script type="text/javascript" language="javascript">
			$(document).ready(function(){

				console.log("my jquery is reaty");
				setInterval(function(){
					var timestr = $('#timer').html();
					var currentTime = 0;
					if(timestr.length > 0) currentTime = parseInt(timestr);
					currentTime++;
					$('#timer').html(currentTime);
					
				},1000);
			});
		</script>

<?php
	include 'includes/footer.php';
?>
