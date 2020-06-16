$(document).ready(()=>{
	var ans = document.getElementById('ans');
	var startingNum = 0;
	var stepnum = 0;
	var correct_count = 0;
	var incorrect_count = 0;
	let choice_made = false;
	const name = document.getElementById('name');
	let game_started = true;
	let ans_incorrect = false;
	$('#inner-container').hide();
	$('#num').html(startingNum);
	$('#ans').val([]);
	
	//Check if name in field before starting
	function checkName(){
		if(name.value == ''){
			$('#start-error').html('You must enter your name and then select an option to start.');
			game_started = false;
			$('#start-error').show();
			$('#start-error').fadeOut(3000);
		}
		else if(name.value != ''){
			game_started = true;
			$('#intro').hide();
			$('#inner-container').show();
		}
	}
	
	//Selection buttons controls
	$('#cb1').on('click',function(){
		checkName();
		if(game_started){
			$('#bgm').empty();
			stepnum = 1;
			$('#heading').html('Add 1 to this number:');
			$('#result').html('');
			$('#ans').focus();
			choice_made = true;
			resetTimer();
			playBGM();
		}
	});

	$('#cb2').on('click',function(){
		checkName();
		if(game_started){
			$('#bgm').empty();
			stepnum = 2;
			$('#heading').html('Add 2 to this number:');
			$('#result').html('');
			$('#ans').focus();
			choice_made = true;
			resetTimer();
			playBGM();
		}
	});

	$('#cb5').on('click',function(){
		checkName();
		if(game_started){
			$('#bgm').empty();
			stepnum = 5;
			$('#heading').html('Add 5 to this number:');
			$('#result').html('');
			$('#ans').focus();
			choice_made = true;
			resetTimer();
			playBGM();
		}
	});

	$('#cb10').on('click',function(){
		checkName();
		if(game_started){
			$('#bgm').empty();
			stepnum = 10;
			$('#heading').html('Add 10 to this number:');
			$('#result').html('');
			$('#ans').focus();
			choice_made = true;
			resetTimer();
			playBGM();
		}
	});
	
	//Display correct answer.
	function showAnswer(){
		var answer = startingNum + stepnum;
		$('#correct-ans').html('The answer is: ' + answer + ' <br><small>Enter it to continue.</small>');
	}
	
	//Check user's answer.
	function checkAns(){
		if(ans.value != (startingNum + stepnum) && choice_made){
			$('#result').html('That is incorrect!  Try again.');
			ans_incorrect = true;
			incorrect_count++;
		}
		else{
			$('#result').html('That is correct!');
			startingNum+=stepnum;
			$('#num').html(startingNum);
			resetTimer();
			ans_incorrect = false;
			correct_count++;
		}
		$('#ans').val('');
		$('#ans').focus();
		$('#correct-ans').html('');
		goodJob();
	}
	
	//Setup timer
	var clocktimer = 30;		
	var reset_timer = 30;		
		
	function countDown(){
		timer = setInterval(function(){
			if(clocktimer < 0){
				clearInterval(timer);
				showAnswer();
				incorrect_count++;
			}else{
				$('#timer').html('Time: ' + clocktimer);
				clocktimer--;
			}
		},1000);
	}
	
	//Reset timer
	function resetTimer(){
		clearInterval(timer);
		clocktimer = reset_timer;
		countDown();
	}
	
	//Clear message
	function clearMsg(){
		$('#result').html('');
		clearTimeout(clear_msg);
	}
	
	//Clear encouraging message
	function clearGoodJob(){
		$('#good-job').html('');
		clearTimeout(clear_cheer);
	}
	
	//Handle 'Enter/Return' key press when cursor inside input field
	$('#ans').keypress(function(e){
		if(e.which == 13) $('#check').click();
	});

	//Clear message after user checks answer
	$('#check').on('click',function(){
		checkAns();
		clear_msg = setTimeout(clearMsg,2000);
		clear_cheer = setTimeout(clearGoodJob,3000);
	});
	
	//Background sounds
	var bgms = ['DownOnMe.mp3','ManyMen.mp3','Rack_Focus.mp3','ComeTogether.mp3','Fallin.mp3',
	'StartedFromTheBottom.mp3','Airplanes.mp3','Halo.mp3','RuffRydersAnthem.mp3','GodsPlan.mp3',
	'GhettoStory.mp3','Finesse.mp3','Deuces.mp3','Oh.mp3','YouKnowYouLikeIt.mp3',
	'0to100.mp3','Forever.mp3','Headlines.mp3','HotlineBling.mp3','TrustIssues.mp3'];
	
	var cheers = ['FakeApplause.mp3','Ovation.mp3'];
	
	var animal_sounds = ['Horse.mp3','HorseNeigh-2.mp3'];
	
	//Play background music
	function playBGM(){
		var rand_bgm = Math.floor(Math.random() * bgms.length);
		
		$('#bgm').html(`<source src="assets/audio/${bgms[rand_bgm]}" type="audio/mpeg">
			Your browser does not support the audio element.`);
		
		$('#bgm').prop("volume", 0.3);
	}

	var flawless = false;
	
	//Play animal sounds
	function playAnimalSounds(){
		$('#left-sound').html(`<source src="assets/sound_clips/${animal_sounds[0]}" type="audio/mpeg">
			Your browser does not support the audio element.`);
		
		$('#left-sound').prop("volume", 0.4);
	
		$('#right-sound').html(`<source src="assets/sound_clips/${animal_sounds[1]}" type="audio/mpeg">
			Your browser does not support the audio element.`);
		
		$('#right-sound').prop("volume", 0.4);
	}
	
	//Play cheers
	function playCheers(){
		var rand_cheer = Math.floor(Math.random() * cheers.length);
		
		if(flawless){
			$('#cheers').html(`<source src="assets/sound_clips/${cheers[1]}" type="audio/mpeg">
				Your browser does not support the audio element.`);
		}
		else{
			$('#cheers').html(`<source src="assets/sound_clips/${cheers[0]}" type="audio/mpeg">
				Your browser does not support the audio element.`);
		}
		$('#cheers').prop("volume", 0.5);
	}
	
	//Show pictures on applause
	function showPics(){
		$('#left-pic').show();
		$('#right-pic').show();
		playAnimalSounds();
		
		function hidePics(){
			$('#left-pic').fadeOut();
			$('#right-pic').fadeOut();
		}
		
		let hide_pics = setTimeout(hidePics, 2000);
	}
	
	//Encourage good work
	function goodJob(){
		if(!game_started){
			$('#good-job').html('');
		}
		
		if(startingNum%100 == 0 && incorrect_count <= 10 && ans_incorrect != true){
			$('#good-job').html(`<b>Great work ${name.value}!!!</b><br> <small>You got to ${startingNum} and had very few incorrect,
			keep up the good work!</small>`);
			playCheers();
		}
		else if(correct_count%5 == 0 && incorrect_count < 5 && incorrect_count > 0 && ans_incorrect != true){
			//$('#cheers').empty();
			$('#good-job').html('Wow!!! <small>You\'re doing great, keep it up!</small>');
			//showPics();
			playCheers();
		}
		else if(correct_count%5 == 0 && incorrect_count == 0 && ans_incorrect != true){
			flawless = true;
			
			//$('#cheers').empty();
			$('#good-job').html(`<b>Awesome Job ${name.value}!!!</b><br> <small>You're doing great, keep it up!</small>`);
			showPics();
			playCheers();
		}
		
	}

	//Reset page
	$('#reset').on('click',function(){
		$('#name').val('');
		location.reload();
	});
});