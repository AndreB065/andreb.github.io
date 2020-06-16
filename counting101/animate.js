$(document).ready(()=>{
	let welcome = "<div id='welcome'></div>";
	$('#main-container').append(welcome);
	$('#welcome').html(`<h2 id="my-welcome">Welcome Learner!</h2>
	<img id="my-img" src="assets/images/happy-balloon.png" alt="Happy Emoji">`);
	let welcome_sound = `<audio id="welcome-sound" autoplay></audio>`;
	$('#welcome').append(welcome_sound);
	
	function playWelcome(){
		if(welcome_sound == null || welcome_sound === undefined){
			$('<audio>').attr('id','welcome-sound').prop('autoplay')
			.attr('src',"assets/sound_clips/TimeBombShort.mp3");
		}else{
			$('#welcome-sound').html(`<source src="assets/sound_clips/TimeBombShort.mp3" type="audio/mpeg">
			Your browser does not support the audio element.`);
		}
	}
	
	playWelcome();
	setTimeout(function(){
		$('#my-welcome').html(`<h2>I hope you are ready to do some math.</h2>`);
		$('#welcome').css('background-color',"#555");
		$('#welcome').css('color',"red");
		$('#my-img').attr('src',"assets/images/evil-happy-balloon.png").prop('alt',"Evil Balloon");
		$('#welcome').fadeOut().fadeIn().fadeOut(4000);
	}, 1000);
});