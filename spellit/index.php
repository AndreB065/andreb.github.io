<?php
	$title = 'Spell It';
	
	include 'header.php';
?>
	<body>
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<a class="navbar-brand col-2" href="#"><div onclick="reloadPage();">Cisca's Spelling Game</div></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"  aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse col-md-10" id="navbarSupportedContent">
				<div class="col-md-9">
					<form class="form-inline align-items-center" id="form" action="" novalidate>
						<div class="col">
							<label for="uname" class="">User Name</label>
							<input type="text" class="form-control" id="uname" name="uname">
						</div>
						<div class="col">
							<label for="passw" class="">Password</label>
							<input type="password" class="form-control" id="passw" name="passw">
						</div>
						<div class="col col-4 align-self-end">
							<div id="login-error" class="wrong"></div>
							<div class="row">
							<div class="col">
								<input type="button" class="btn-lg btn-success" value="Login" onclick="checkPass();">
							</div>
							<div class="col">
								<a href="signup.php">
									<input type="button" class="btn-lg btn-secondary" value="Sign Up" onclick="signupUser();">
								</a>
							</div>
							</div>
						</div>
					</form>
				</div>
				<div id="pic-container" class="col-md">
					<name id="my-name"></name>
					<img src="assets/images/detective.png" id="my-pic" class="img-thumbnail">
				</div>
			</div>
		</nav>
		<div class="container">
			<h1 id="start-message">Sign in to use the system.</h1>
			<div class="container" id="system-panel">
				<main>
				<!--<div>
						<button id="show-map" onclick="showMap();">Show Map</button>
					</div>-->
					<div class="container" id="game-panel">
						<div class="row">
							<input type="text" name="new-word2" class="col-4" id="new-word2">
							<button class="btn btn-primary btn-md col" id="add-word" onclick="addNewWord();">Add New Word</button>
							<button class="btn btn-warning btn-md col" id="delete-word" onclick="deleteWord();">Delete Word</button>
							<button class="btn btn-secondary btn-md col" id="sort-btn">Sort A-Z</button>						
							<button class="btn btn-info btn-md col" id="flash-btn">Flash Cards</button>
							<button class="btn btn-success btn-md col" id="play">Play Game</button>
						</div>
					</div>
					<div class="container" id="main-container">
						<div id="greetings"></div>
						<div id="bgm"></div>
						<div id="sound"></div>
						<div id="spelling-words" class="container">
							<div class="container" >
								<div class="row justify-content-around" id="word-list">
								</div>
							</div>
							<div class="container" id="word-game">
								<div class="row">
									<div class="col">
										<h2>Guess which word this is: </h2>
									</div>
									<div class="col">
										<h2 id="word"></h2>
									</div>
									<div class="col-2">
										<h3 id="timer"></h3>
									</div>
								</div>
								<div class="row">
									<label class="" for="word-answer"><h3>Your answer:</h3></label>
									<input type="text" id="word-answer" class="col-md-4">
									<button id="check-word" class="btn btn-primary btn-md">Check</button>
									<span id="word-answer-is" class="col-md-2"></span>
									<button id="next-word-question" class="btn btn-success btn-md">Next</button>
								</div>
							</div>
							<div class="container" id="math-game">
								<div class="row">
									<div class="col">
										<h2>Solve this equation: </h2>
									</div>
									<div class="col">
										<h2 id="problem"></h2>
									</div>
									<div class="col-2">
										<h3 id="timer"></h3>
									</div>
								</div>
								<div class="row">
									<label class="" for="math-answer"><h3>Your answer:</h3></label>
									<input type="text" id="math-answer" class="col-md-4">
									<button id="check-math" class="btn btn-primary btn-md">Check</button>
									<span id="math-answer-is" class="col-md-2"></span>
									<button id="next-math-question" class="btn btn-success btn-md">Next</button>
								</div>
							</div>
							<div id="flashcard-carousel" class="carousel slide" data-ride="carousel" data-interval="3000">
							  <div class="carousel-inner" id="flash-words">
							  </div>
							  <a class="carousel-control-prev" href="#flashcard-carousel" role="button" data-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							  </a>
							  <a class="carousel-control-next" href="#flashcard-carousel" role="button" data-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							  </a>
							</div>
						</div>						
					</div>
					<div id="map"></div>
				</main>
			<!-- <div id="carouselExample" class="carousel slide container" data-ride="carousel">
				  <ol class="carousel-indicators">
					<li data-target="#carouselExample" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExample" data-slide-to="1"></li>
					<li data-target="#carouselExample" data-slide-to="2"></li>
				  </ol>
				  <div class="carousel-inner">
					<div class="carousel-item active">
					  <img class="d-block w-100" src="..." alt="First slide">
					  <div class="carousel-caption">
						<h5>Highlight 1</h5>
						<p>Explaining the section</p>
					  </div>
					</div>
					<div class="carousel-item">
					  <img class="d-block w-100" src="..." alt="Second slide">
					  <div class="carousel-caption">
						<h5>Highlight 2</h5>
						<p>Explaining the section</p>
					  </div>
					</div>
					<div class="carousel-item">
					  <img class="d-block w-100" src="..." alt="Third slide">
					  <div class="carousel-caption">
						<h5>Highlight 3</h5>
						<p>Explaining the section</p>
					  </div>
					</div>
				  </div>
				  <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				  </a>
				  <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				  </a>
				</div> -->
			</div>
		</div>
		<?php
			include 'footer.php';
		?>
		<!--<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeM8t83B1jP8oR2MD73qSLikoyHWu5qqQ&callback=initMap">
		</script>-->
	</body>
</html>
