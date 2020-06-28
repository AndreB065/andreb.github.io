<?php
	$title = 'Sign Up';
	
	include 'header.php';
?>
	<body>
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<a class="navbar-brand col-2" href="index.php"><div onclick="reloadPage();">Cisca's Spelling Game</div></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"  aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse col-md-10" id="navbarSupportedContent">
				<div class="col-md-9">
				</div>
				<div id="pic-container" class="col-md">
					<name id="my-name"></name>
					<img src="assets/images/detective.png" id="my-pic" class="img-thumbnail">
				</div>
			</div>
		</nav>
		<div class="container-fluid">
			<div class="mx-auto container bg-dark" style="width: 600px; padding: 20px; margin: 25px; opacity: 0.9;">
				<div class="col-12" >
					<h1 id="signup-message">Create New User</h1>
					<hr style="background: white;">
					<form class="align-items-center" id="form" action="" novalidate>
						<label for="name" class="">Enter Your Name:</label>
						<input type="text" class="form-control" id="name" name="name">
						<label for="pass1" class="">Create Password:</label>
						<input type="password" class="form-control" id="pass1" name="pass1">
						<label for="pass2" class="">Re-enter Password:</label>
						<input type="password" class="form-control" id="pass2" name="pass2"><br>
						<input type="submit" class="btn-lg btn-success" value="Submit" onclick="checkPass();">
						<input type="reset" class="btn-lg btn-warning">
					</form>
				</div>
			</div>
		</div>
		<?php
			include 'footer.php';
		?>
	</body>
</html>
