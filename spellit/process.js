$('#system-panel').hide();
$('#word-game').hide();
$('#math-game').hide();
//$('#pic-container').hide();
$('#next-word-question').hide();
$('#next-math-question').hide();
$('#flashcard-carousel').hide();

var pw = document.getElementById("passw");
var uname = document.getElementById("uname");

var special_greeting = false;

function greetUser(){
	var rand_greet = Math.floor(Math.random() * greetings.length);
	
	if(rand_greet == 2){
		special_greeting = true;
	}
	
	$('#greetings').html(`<audio autoplay id="greet">
		<source src="assets/audio/${greetings[rand_greet]}" type="audio/mpeg">
		Your browser does not support the audio element.
	</audio>`);
	
	$('#greet').prop("volume", 0.3);
}

function playWrong(){
	var rand_no = Math.floor(Math.random() * nos.length);
	
	$('#sound').html(`<audio autoplay id="wrong-sound">
		<source src="assets/audio/${nos[rand_no]}" type="audio/mpeg">
		Your browser does not support the audio element.
	</audio>`);
	
	$('#wrong-sound').prop("volume", 0.3);
}

function playCorrect(){
	var rand_yeah = Math.floor(Math.random() * yeahs.length);

	$('#sound').html(`<audio autoplay id="correct-sound">
		<source src="assets/audio/${yeahs[rand_yeah]}" type="audio/mpeg">
		Your browser does not support the audio element.
	</audio>`);
	
	$('#correct-sound').prop("volume", 0.3);
}

function playBGM(){
	var rand_bgm = Math.floor(Math.random() * bgms.length);
	
	if(special_greeting){
		$('#bgm').delay(43000);
	}
	
	$('#bgm').html(`<audio autoplay loop id="bgm-vol">
		<source src="assets/audio/BGM/${bgms[rand_bgm]}" type="audio/mpeg">
		Your browser does not support the audio element.
	</audio>`);
	
	$('#bgm-vol').prop("volume", 0.1);
}

function changeBGI(){
	var rand_img = Math.floor(Math.random() * imgs.length);
	
	$('body').css('background-image',`url(assets/images/${imgs[rand_img]})`);
}

function changeWBGI(){
	var rand_wimg = Math.floor(Math.random() * word_imgs.length);
	
	$('body').css('background-image',`url(assets/images/${word_imgs[rand_wimg]})`);
}

function playNextTime(){
	var rand_next = Math.floor(Math.random() * nextTimes.length);

	$('#sound').html(`<audio autoplay>
		<source src="assets/audio/${nextTimes[rand_next]}" type="audio/mpeg">
		Your browser does not support the audio element.
	</audio>`);
}

function playSpecialEnding() {
	var rand_se = Math.floor(Math.random() * special_endings.length);

	$('#sound').html(`<audio autoplay>
		<source src="assets/audio/${special_endings[rand_se]}" type="audio/mpeg">
		Your browser does not support the audio element.
	</audio>`);
}


/**
Global variables for all games are in this section.
**/
var game_selected;
var level_selected;
var answers_correct = 0;
var out_of = 0;

var greetings = ['Francois1.mp3','music-box.mp3','Spongebob-theme.mp3'];

var gp_bgms = ['Eddy-Through_the_Tunnels','CamilaCabello-Consequences','cruising.mp3','gentle-thoughts.mp3','KaiEngel-MoonlightReprise.mp3',
	'PharrellWilliams-Happy.mp3','RachelPlatten-FightSong.mp3','ScottHolmes-Feeling_Sunny.mp3','ShawnMendes-TreatYouBetter.mp3','Audiobinger-The_Garden_State.mp3'];

var bgms = ['ArianaGrande-Breathin.mp3','Maxwell-Pretty-Wings.mp3','Ciara-Dose.mp3','DuaLipa-NewRules.mp3','PostMalone-BetterNow.mp3',
	'PuffyAmiYumi-TeenTitansGo.mp3','CamilaCabello-Havana.mp3','PostMalone-Stay.mp3','Ketsa-The_Gentle_Side.mp3','CardiB-I-Like-It.mp3'];

var imgs = ['mug-adventure.jpg','dog1.jpg','welcome.jpg','tree.jpg','ballroom.jpg',
	'snow.jpg','hourglass.png','horse.jpg','sheep.jpg','garden.jpg'];

var word_imgs = ['keywords-blocks.jpg','dictionary-focus.jpg','learn-blocks.jpg','dream-blocks.jpg'];

var yeahs = ['Ady-Barbie-go.mp3','Ady-Go-Franny.mp3','Allen-Woo-Hoo.mp3','Allen-You-got-it.mp3','Ferg-Yeah.mp3',
	'Cendy-Good-job.mp3','Cendy-Way-to-go.mp3','woop-woop.mp3'];

var nos = ['come-on-1.mp3','Ady-Ooh-girl.mp3','Allen-Keep-pushing.mp3','Cendy-Almost-there.mp3','Cendy-So-close.mp3',
	'Ferg-Keep-on-pushing.mp3','Ferg-Do-it-or-else.mp3','no.mp3','pain.mp3','Ferg-We-love-you.mp3',
	'its-not-that-easy.mp3','hahaha.mp3','come-on-come-on-2.mp3','can-you-get-it.mp3','i-dont-think-so.mp3'];

var nextTimes = ["Ferg-You'll-get-em-next-time.mp3",'sad-trombone.mp3'];

var special_endings = ['ta-da.mp3','Francois2.mp3'];


/**
This section is for the word games.
All global variables for those games are in this section.
**/
var words = ['insect', 'intend', 'subject', 'until', 'cactus',
	'contest', 'problem', 'happen', 'basket', 'invent',
	'brat','rabbit','tidbit','napkin','magnet',
	'robin','unfit','visit','solid','submit',
	'so','zero','be','go','veto',
	'we','hi','no','hero','he',
	'prune','clone','flute','tribute','dome',
	'trombone','drove','crude','stone','cube',
	'quake','brave','prize','plate','crate',
	'grape','swipe','smile','slide','fine',
	'blend','drum','milk','quilt','clamp',
	'crust','snug','tend','stump','skunk',
	'comet','limit','behind','silent','frozen',
	'student','beyond','female','moment','respect',
	'chap','match','punch','that','path',
	'thick','with','mash','shop','whale',
	'shore','board','soared','core','chart',
	'start','card','marsh','roar','sport',
	'bird','safer','curl','herd','hurt',
	'germs','other','first','burned','twirling',
	'mail','paid','play','rain','hay',
	'grain','saint','stray','clay','betray',
	'coach','soap','oak','boat','slow',
	'borrow','elbow','foe','woe','pillow',
	'bubble','jungle','shuffle','sparkle','handle',
	'bottle','table','puzzle','kerfuffle','ruffle',
	'wet','big','thin','long','soft',
	'quick','cute','smart','gross','plain',
	'tight','fry','bright','pie','light',
	'bike','tie','dry','sprite','smile',
	'blue','tune','unit','tulip','yule',
	'fluke','glue','utensil','rule','true',
	'girl','fire','drier','first','wire',
	'pliers','dirt','tire','flier','third',
	'bashful','harmful','skillful','useful','sluggish',
	'selfish','foolish','rapidly','gladly','wisely',
	'cheer','dear','deer','gear','clear',
	'tear','peer','steer','near','year',
	'pure','sure','nature','picture','mixture',
	'capture','figure','signature','adventure','creature',
	'fruit','recruit','grew','value','newspaper',
	'tuesday','moon','notebook','scoop','understood',
	'mouse','around','sprout','down','outside',
	'tower','crown','group','youth','crouton',
	'redo','preheat','midnight','reread','microscope',
	'midweek','retell','pretest','microphone','preview',
	'immovable','immortal','impossible','impatient',
	'imperfect','impolite','imbalance','immeasurable',
	'know','knock','knife','wrap','write',
	'crumb','lamb','thumb','gnat','design',
	'pollination','action','election','confusion','decision',
	'direction','imagination','concentration','creation','digestion',
	'screw','screen','sprout','sprint','straw',
	'stride','stroller','squash','square','squat',
	'fearless','loveless','meaningless','ageless','hopeless',
	'harmless','careless','endless','useless','tasteless',
	'phonics','phone','dolphin','photo','elephant',
	'alphabet','graph','rough','cough','enough',
	'beautiful','joyful','playful','colorful','delightful',
	'forgetful','careful','armful','truthful','peaceful',
	'avoid','moisture','point','spoil','hoist',
	'annoy','employ','oyster','destroy','loyal'];

var dre_list = ['violets','are','blue'];
var cen_list = ['green','eggs','and','ham'];
	
var word_list = document.getElementById('word-list');
//var new_word = document.getElementById('new-word2').value;
var flash_words = document.getElementById('flash-words');

var f_list = words;
var a_list = dre_list;
var c_list = cen_list;
var list;
var clickCount = 0;
var	problem_number = 1;
var word_to_check;
var attempts = 0;
var amount_correct = 0;
var guess_word;

var wgame_imgs = ['dictionary-focus.jpg','keywords-blocks.jpg','learn-blocks.jpg','dream-blocks.jpg'];

var rand_num = Math.floor(Math.random() * words.length);
	
var my_list = [];
var easy_list = [];
var medium_list = [];
var hard_list = [];

var wordGameSelected = false;

var my_pic = ["assets/images/307.jpg","assets/images/WU-pic.png","assets/images/309.jpg"];

/**
The math games global variables are in this section.
**/
var numbers = [];

var math_solutions = [];
var mathGameSelected = false;

/** 
Word games functions are here: 
**/
function addNewWord(){
	var new_word = document.getElementById('new-word2').value.toLowerCase();
	input_index = list.indexOf(new_word);

	if(new_word == ""){
		document.getElementById("new-word2").focus();
	}else if(input_index >= 1){
		alert("\"" +new_word+ "\"" + " is already in the list!");
	}else{
		list.push(new_word);
		
		showWords(list);
		document.getElementById("new-word2").value = "";
		document.getElementById("new-word2").focus();

	}
}

function deleteWord(){
	var new_word = document.getElementById('new-word2').value.toLowerCase();
	input_index = list.indexOf(new_word);
	
	if(new_word == ""){		
		document.getElementById("new-word2").focus();
	}else if(input_index == -1){
		alert("No such word in the list.  Try Again!");
	}else if(input_index !== -1){
		list.splice(input_index,1);
		
		showWords(list);
		document.getElementById("new-word2").value = "";
		document.getElementById("new-word2").focus();
	}
	
	//This one line does the same as above:
	//list.splice( list.indexOf('foo'), 1 );
	
	/*This will remove all instances of the same item in an array:
	for( var i = list.length-1; i--;){
		if ( list[i] === 'foo') list.splice(i, 1);
	}*/
}

//Run checkPass on 'Enter key press'
$('#uname').keypress(function(e){
	if(e.which == 13) checkPass();
});

$('#passw').keypress(function(e){
	if(e.which == 13) checkPass();
});


function checkPass(){
	var mypw = pw.value;
	var my_uname = uname.value;
	
//	var regx = /^(?=.*[a-z]).{4,}$/;
	
	//Check input on sign in; if input matches, show list
	if(mypw != "" && my_uname != ""){
		if(mypw == "cisca"){
			$('#start-message').hide();
			$('#system-panel').show();
			$('#my-name').html('Francisca');
			$('form').hide();
			$('#my-pic').attr('src', my_pic[0]);
			greetUser();
			changeBGI();
			playBGM();
			list = f_list;
			showWords(list);
		}
		
		else if(mypw == "andre"){
			$('#start-message').hide();
			$('#system-panel').show();
			$('#my-name').html('Andre');
			$('form').hide();
			$('#my-pic').attr('src', my_pic[1]);
			list = a_list;
			showWords(list);
		}

		else if(mypw == "cendy"){
			$('#start-message').hide();
			$('#system-panel').show();
			$('#my-name').html('Cendy');
			$('form').hide();
			$('#my-pic').attr('src', my_pic[2]);
			list = c_list;
			showWords(list);
		}
		
		else{
			$('#login-error').html("You must enter a valid password.");
		}
	}
	else if(mypw == "" && my_uname != ""){
		$('#login-error').html("You entered an invalid password.  \nPlease correct it and try again.");
	}
	else if(mypw != "" && my_uname == ""){
		$('#login-error').html("You must enter a name to continue.");
	}
	else{
		$('#login-error').html("You must enter a name and a valid password to continue");
	}
}

//Sort the words in the list
$('#sort-btn').on('click',function(){
		var sorted_words = list.sort();
		var sort_button = document.getElementById('sort-btn'); 
		
		if(sort_button.innerHTML == "Sort A-Z"){
			showWords(sorted_words);
			sort_button.innerHTML = "Sort Z-A";
		}
		else if(sort_button.innerHTML == "Sort Z-A"){
			var new_sorted_words = sorted_words.reverse();

			showWords(new_sorted_words);
			sort_button.innerHTML = "Sort A-Z";
		}
	}
);

//Get specific list
function showWords(mw){
	word_list.innerHTML = "";
	var word_count = 1;
	
	for(x=0;x<mw.length;x++){
		word_to_spell = mw[x];

		word_list.innerHTML += "<div class='col col-md-1' style='margin:4px;'>" 
		+word_count+ "." 
		+word_to_spell+ "</div>";
		
		word_count++;
	}
}

$('#play').on('click',function(){
	$('#word-list').hide();
	$('#flashcard-carousel').hide();
	showGameSelectPanel();
	$('#greetings').empty();
	$('#bgm').empty();
	changeWBGI();
});

function showFindTheMissingWordPanel(){
	var	user_answer = document.getElementById('word-answer');	
	
	$('#game-panel').html(
		'<h2 class="game-panel-heading">Choose a level to start ' +uname.value.charAt(0).toUpperCase()+uname.value.slice(1)+ ':</h2>'+
		'<div class="row">'+
			'<button class="btn btn-primary btn-md col" id="easy-level">Easy</button>'+
			'<button class="btn btn-warning btn-md col" id="medium-level">Medium</button>'+
			'<button class="btn btn-secondary btn-md col" id="hard-level">Hard</button>'+
		'</div>');
		
		$('easy-level').on('click',function(){
			for(x=0;x<list.length;x++){
				 my_list.push(list[rand_num++]);
			}
			
			spellList =  my_list[clickCount];
			
			splitWord = spellList.split("");
			scrambledWord = splitWord.sort();
			guess_word = scrambledWord.join(" ");
			
			document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
			$('#game-panel').hide();
			$('#math-game').hide();
			user_answer.focus();
		});
}

function showFillInTheBlankPanel(){
	var	user_answer = document.getElementById('word-answer');	
	
	$('#game-panel').html(
		'<h2 class="game-panel-heading">Choose a level to start ' +uname.value.charAt(0).toUpperCase()+uname.value.slice(1)+ ':</h2>'+
		'<div class="row">'+
			'<button class="btn btn-primary btn-md col" id="easy-level">Easy</button>'+
			'<button class="btn btn-warning btn-md col" id="medium-level">Medium</button>'+
			'<button class="btn btn-secondary btn-md col" id="hard-level">Hard</button>'+
		'</div>');
	
	$('#easy-level').on('click',function(){
		$('#word-game').show();
		
		level_selected = "easy";

		for(x=0;x<list.length;x++){
			if(list[x].length <= 3){
				my_list.push(list[x]);
			}
		}
		
		spellList =  my_list[clickCount];
		rand_letter = Math.floor((Math.random() * (spellList.length)));
		
		newWord = spellList.replace(spellList[rand_letter], '*');
		guess_word = newWord;
		
		document.getElementById('word').innerHTML = problem_number + ") " + newWord;
		$('#game-panel').hide();
		user_answer.focus();
	});
	
	$('#medium-level').on('click',function(){
		$('#word-game').show();
		
		level_selected = "medium";

		for(x=0;x<list.length;x++){
			if((list[x].length > 3) && (list[x].length < 6)){
				my_list.push(list[x]);
			}
		}
		
		spellList =  my_list[clickCount];
		rand_letter = Math.floor((Math.random() * (spellList.length)));
		
		newWord = spellList.replace(spellList[rand_letter], '*');
		guess_word = newWord;
		
		document.getElementById('word').innerHTML = problem_number + ") " + newWord;
		$('#game-panel').hide();
		user_answer.focus();
	});
	
	$('#hard-level').on('click',function(){
		$('#word-game').show();
		
		level_selected = "hard";
		
		for(x=0;x<list.length;x++){
			if(list[x].length > 5){
				my_list.push(list[x]);
			}
		}
		
		spellList =  my_list[clickCount];
		rand_letter = Math.floor((Math.random() * (spellList.length)));
		
		newWord = spellList.replace(spellList[rand_letter], '*');
		sec_rand_letter = Math.floor((Math.random() * (newWord.length)));
		
		secondNewWord = newWord.replace(newWord[sec_rand_letter], '*');
		guess_word = secondNewWord;
		
		document.getElementById('word').innerHTML = problem_number + ") " + secondNewWord;
		$('#game-panel').hide();
		user_answer.focus();
	});
}

function showWordUnscramblePanel(){
	var	user_answer = document.getElementById('word-answer');	
	
	$('#game-panel').html(
		'<h2 class="game-panel-heading">Choose a level to start ' +uname.value.charAt(0).toUpperCase()+uname.value.slice(1)+ ':</h2>'+
		'<div class="row">'+
			'<button class="btn btn-primary btn-md col" id="easy-level">Easy</button>'+
			'<button class="btn btn-warning btn-md col" id="medium-level">Medium</button>'+
			'<button class="btn btn-secondary btn-md col" id="hard-level">Hard</button>'+
		'</div>');
	
	$('#easy-level').on('click',function(){
		$('#word-game').show();
		
		level_selected = "easy";
		
		for(x=0;x<list.length;x++){
			if(list[x].length < 4){
				easy_list.push(list[x]);
			}
		}
		
		my_list = easy_list;
		console.log("Easy count: " + my_list.length);
		
		splitWord = my_list[clickCount].split("");
		scrambledWord = splitWord.sort();
		guess_word = scrambledWord.join(" ");
		
		document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
		$('#game-panel').hide();
		$('#math-game').hide();
		user_answer.focus();
	});
	
	$('#medium-level').on('click',function(){
		$('#word-game').show();
		
		level_selected = "medium";

		for(x=0;x<list.length;x++){
			if((list[x].length < 6) && (list[x].length > 3)){
				medium_list.push(list[x]);
			}
		}
		
		my_list = medium_list;
		console.log("Medium count: " + my_list.length);
		
		spellList =  my_list[clickCount];
		
		splitWord = spellList.split("");
		scrambledWord = splitWord.sort();
		guess_word = scrambledWord.join(" ");
		
		document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
		$('#game-panel').hide();
		$('#math-game').hide();
		user_answer.focus();
		
	});
	
	$('#hard-level').on('click',function(){
		$('#word-game').show();
		
		level_selected = "hard";
		
		for(x=0;x<list.length;x++){
			if((list[x].length >= 6)){
				hard_list.push(list[x]);
			}
		}
		
		my_list = hard_list;
		console.log("Hard count: " + my_list.length);
		
		spellList =  my_list[clickCount];
		
		splitWord = spellList.split("");
		scrambledWord = splitWord.sort();
		guess_word = scrambledWord.join(" ");
		
		document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
		$('#game-panel').hide();
		$('#math-game').hide();
		user_answer.focus();
	});
}

var math_ans = [];

function showAddPanel(){
	var equation = "";
	var	user_answer = document.getElementById('math-answer');
	var my_problem = document.getElementById('problem');
	
	$('#game-panel').html(
		'<h2 class="game-panel-heading">Choose a level to start ' +uname.value.charAt(0).toUpperCase()+uname.value.slice(1)+ ':</h2>'+
		'<div class="row">'+
			'<button class="btn btn-primary btn-md col" id="easy-level">Easy</button>'+
			'<button class="btn btn-warning btn-md col" id="medium-level">Medium</button>'+
			'<button class="btn btn-secondary btn-md col" id="hard-level">Hard</button>'+
		'</div>');
	
	$('#easy-level').on('click',function(){
		$('#math-game').show();
		
		level_selected = "easy";
	
		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var prob_cnt = 10;
		var equation;
		var a;
		var b;
		function addRandomNums(){
			a = Math.floor(Math.random() * numbers.length);
			b = Math.floor(Math.random() * numbers.length);
			var c = a + b;
			
			return c;
		}
		
		equation = a + " + " + b;

		for(x=0;x<prob_cnt;x++){
			math_ans[x] = addRandomNums();
		}
		
		for(y=0;y<prob_cnt;y++){
			math_solutions[y] = math_ans[y];
		}
		
		alert(math_solutions);
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
	});
	
	$('#medium-level').on('click',function(){
		$('#math-game').show();

		user_answer = document.getElementById('answer');

		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		var equation = a + " + " + b;
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
		
	});
	
	$('#hard-level').on('click',function(){
		$('#math-game').show();

		user_answer = document.getElementById('answer');
		
		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		var c = Math.floor(Math.random() * numbers.length);
		var equation = a + " + " + b + " + " + c;
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
	});
}

function showSubPanel(){
	var equation = "";
	var	user_answer = document.getElementById('math-answer');
	var my_problem = document.getElementById('problem');
	
	$('#game-panel').html(
		'<h2 class="game-panel-heading">Choose a level to start ' +uname.value.charAt(0).toUpperCase()+uname.value.slice(1)+ ':</h2>'+
		'<div class="row">'+
			'<button class="btn btn-primary btn-md col" id="easy-level">Easy</button>'+
			'<button class="btn btn-warning btn-md col" id="medium-level">Medium</button>'+
			'<button class="btn btn-secondary btn-md col" id="hard-level">Hard</button>'+
		'</div>');
	
	$('#easy-level').on('click',function(){
		$('#math-game').show();
		
		level_selected = "easy";
		
		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		
		(a > b) ? equation = a + " - " + b : equation = b + " - " + a;
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
	});
	
	$('#medium-level').on('click',function(){
		$('#math-game').show();

		user_answer = document.getElementById('answer');

		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		
		(a > b) ? equation = a + " - " + b : equation = b + " - " + a;
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
		
	});
	
	$('#hard-level').on('click',function(){
		$('#math-game').show();

		user_answer = document.getElementById('answer');
		
		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		var c = Math.floor(Math.random() * numbers.length);
		
		if(a > b && b > c){
			equation = a + " - " + b + " - " + c;
		}
		else if(a > c && c > b){
			equation = a + " - " + c + " - " + b;
		}
		else if(b > a && a > c){
			equation = b + " - " + a + " - " + c;
		}
		else if(b > c && c > a){
			equation = b + " - " + c + " - " + a;
		}else if(c > a && a > b){
			equation = c + " - " + a + " - " + b;
		}
		else{
			equation = c + " - " + b + " - " + a;
		}
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
	});
}

function showMultiPanel(){
	var equation = "";
	var	user_answer = document.getElementById('math-answer');
	var my_problem = document.getElementById('problem');
	
	$('#game-panel').html(
		'<h2 class="game-panel-heading">Choose a level to start ' +uname.value.charAt(0).toUpperCase()+uname.value.slice(1)+ ':</h2>'+
		'<div class="row">'+
			'<button class="btn btn-primary btn-md col" id="easy-level">Easy</button>'+
			'<button class="btn btn-warning btn-md col" id="medium-level">Medium</button>'+
			'<button class="btn btn-secondary btn-md col" id="hard-level">Hard</button>'+
		'</div>');
	
	$('#easy-level').on('click',function(){
		$('#math-game').show();
		
		level_selected = "easy";
		
		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		
		(a > b) ? equation = a + " × " + b : equation = b + " × " + a;
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
	});
	
	$('#medium-level').on('click',function(){
		$('#math-game').show();

		user_answer = document.getElementById('answer');

		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		
		(a > b) ? equation = a + " × " + b : equation = b + " × " + a;
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
		
	});
	
	$('#hard-level').on('click',function(){
		$('#math-game').show();

		user_answer = document.getElementById('answer');
		
		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		var c = Math.floor(Math.random() * numbers.length);
		
		if(a > b && b > c){
			equation = a + " × " + b + " × " + c;
		}
		else if(a > c && c > b){
			equation = a + " × " + c + " × " + b;
		}
		else if(b > a && a > c){
			equation = b + " × " + a + " × " + c;
		}
		else if(b > c && c > a){
			equation = b + " × " + c + " × " + a;
		}else if(c > a && a > b){
			equation = c + " × " + a + " × " + b;
		}
		else{
			equation = c + " × " + b + " × " + a;
		}
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
	});
}

function showDiviPanel(){
	var equation = "";
	var	user_answer = document.getElementById('math-answer');
	var my_problem = document.getElementById('problem');
	
	$('#game-panel').html(
		'<h2 class="game-panel-heading">Choose a level to start ' +uname.value.charAt(0).toUpperCase()+uname.value.slice(1)+ ':</h2>'+
		'<div class="row">'+
			'<button class="btn btn-primary btn-md col" id="easy-level">Easy</button>'+
			'<button class="btn btn-warning btn-md col" id="medium-level">Medium</button>'+
			'<button class="btn btn-secondary btn-md col" id="hard-level">Hard</button>'+
		'</div>');
	
	$('#easy-level').on('click',function(){
		$('#math-game').show();
		
		level_selected = "easy";
		
		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		
		(a > b) ? equation = a + " ÷ " + b : equation = b + " ÷ " + a;
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
	});
	
	$('#medium-level').on('click',function(){
		$('#math-game').show();

		user_answer = document.getElementById('answer');

		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		
		(a > b) ? equation = a + " ÷ " + b : equation = b + " ÷ " + a;
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
		
	});
	
	$('#hard-level').on('click',function(){
		$('#math-game').show();

		user_answer = document.getElementById('answer');
		
		for(x=0;x<100;x++){
			numbers[x] = x;
		}
		
		var a = Math.floor(Math.random() * numbers.length);
		var b = Math.floor(Math.random() * numbers.length);
		var c = Math.floor(Math.random() * numbers.length);
		
		if(a > b && b > c){
			equation = a + " ÷ " + b + " ÷ " + c;
		}
		else if(a > c && c > b){
			equation = a + " ÷ " + c + " ÷ " + b;
		}
		else if(b > a && a > c){
			equation = b + " ÷ " + a + " ÷ " + c;
		}
		else if(b > c && c > a){
			equation = b + " ÷ " + c + " ÷ " + a;
		}else if(c > a && a > b){
			equation = c + " ÷ " + a + " ÷ " + b;
		}
		else{
			equation = c + " ÷ " + b + " ÷ " + a;
		}
		
		my_problem.innerHTML = problem_number + ") " + equation;
		$('#game-panel').hide();
		user_answer.focus();
	});
}

function showGameSelectPanel(){
	$('#game-panel').html(
		'<h2 class="game-panel-heading">Select a game ' +uname.value.charAt(0).toUpperCase()+uname.value.slice(1)+ ':</h2>'+
		'<div>'+
			'<h2>Word Games:</h2>'+
			'<div id="word-games">' +
				'<button type="button" class="btn btn-success btn-md col" id="fitb">Fill in the blank</button>'+
				'<button type="button" class="btn btn-success btn-md col" id="wu">Word unscramble</button>'+
				'<button type="button" class="btn btn-success btn-md col" id="ftmw">Find the missing word</button>'+
			'</div>' +
			'<h2 class="heading">Math Games:</h2>'+
			'<div "math-games">' +
				'<button type="button" class="btn btn-primary btn-md col" id="add">Addition</button>'+
				'<button type="button" class="btn btn-primary btn-md col" id="sub">Subtraction</button>'+
				'<button type="button" class="btn btn-primary btn-md col" id="multi">Multiplication</button>'+
				'<button type="button" class="btn btn-primary btn-md col" id="divi">Division</button>'+
			'</div>' +
		'</div>');
	
	$('#fitb').on('click',function(){
		game_selected = "fitb";
		wordGameSelected = true;
		showFillInTheBlankPanel();
		playBGM();
	});

	$('#wu').on('click',function(){
		game_selected = "wu";
		wordGameSelected = true;
		showWordUnscramblePanel();
		playBGM();
	});
	
	$('#ftmw').on('click',function(){
		game_selected = "ftmw";
		wordGameSelected = true;
		user_answer = document.getElementById('answer');
		
		for(x=0;x<list.length;x++){
			if(list[x].length > 7){
				hard_list.push(list[rand_num++]);
			}
		}
		
		my_list = hard_list;
		
		spellList =  hard_list[clickCount];
		
		splitWord = spellList.split("");
		scrambledWord = splitWord.sort();
		guess_word = scrambledWord.join(" ");
		
		document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
		$('#game-panel').hide();
		user_answer.focus();
	});
	
	$('#add').on('click',function(){
		game_selected = "add";
		showAddPanel();
	});
	
	$('#sub').on('click',function(){
		game_selected = "sub";
		showSubPanel();
	});
	
	$('#multi').on('click',function(){
		game_selected = "multi";
		showMultiPanel();
	});
	
	$('#divi').on('click',function(){
		game_selected = "divi";
		showDiviPanel();
	});
}

$('#word-answer').keypress(function(e){
	if(e.which == 13) $('#check-word').click();
});

$('#math-answer').keypress(function(e){
	if(e.which == 13) $('#check-math').click();
});

var incorrect_answers = [];

function displayIA(){
	let my_string = "";
	
	if(incorrect_answers.length != 0){
		for (a in incorrect_answers){
			my_string += "<li>" + incorrect_answers[a] + "</li>";
		}
	}else{
		my_string = "None";
	}
	
	return my_string;
}

$('#check-word').on('click',function(){
	var user_answer = document.getElementById('word-answer');
	var the_word_is = "<h2>The word is: <em class='right'>" +  my_list[clickCount];
	var indicator = document.getElementById('word-answer-is');
	
	if(user_answer.value.toLowerCase() == my_list[clickCount]){
		indicator.innerHTML = "<span class='right'>Correct ↑</span>";
		user_answer.focus();
		$('#check-word').hide();
		$('#next-word-question').show();
		$('#next-word-question').focus();
		playCorrect();
		answers_correct++;
		amount_correct++;
		clearInterval(timer);
	}
	else if(user_answer.value.toLowerCase() !=  my_list[clickCount]){
		indicator.innerHTML = "<span class='wrong'>Incorrect ↓</span>";
		playWrong();
		user_answer.focus();
		$('#next-word-question').hide();
		attempts++;
		
		if(level_selected == "easy"){
			if(attempts == 3){
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word + 
				"  " + the_word_is + "</em></h2>";
				attempts = 0;
				incorrect_answers.push(my_list[clickCount]);
				playNextTime();
				$('#word-answer').prop("disabled",true);
				$('#check-word').hide();
				$('#next-word-question').show();
				$('#next-word-question').focus();
				clearInterval(timer);
			}
		}
		else{
			if(attempts == 2){
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word + 
				"  " + the_word_is + "</em></h2>";
				attempts = 0;
				playNextTime();
				$('#word-answer').prop("disabled",true);
				$('#check-word').hide();
				$('#next-word-question').show();
				$('#next-word-question').focus();
				clearInterval(timer);
			}
		}
	}
});

$('#check-math').on('click',function(){
	var user_answer = document.getElementById('math-answer');
	var correct_answer_is = "<h2>The correct answer is: <em class='right'>" + numbers[clickCount];
	var indicator = document.getElementById('math-answer-is');
	
	if(user_answer.value == numbers[clickCount]){
		indicator.innerHTML = "<span class='right'>Correct ↑</span>";
		user_answer.focus();
		$('#check-math').hide();
		$('#next-math-question').show();
		$('#next-math-question').focus();
		answers_correct++;
		amount_correct++;
		clearInterval(timer);
	}
	else if(user_answer.value != numbers[clickCount]){
		indicator.innerHTML = "<span class='wrong'>Incorrect ↓</span>";
		user_answer.focus();
		$('#next-math-question').hide();
		attempts++;
		
		if(level_selected == "easy"){
			if(attempts == 3){
				document.getElementById('problem').innerHTML = problem_number + ") " + equation + 
				"  " + correct_answer_is + "</em></h2>";
				attempts = 0;
				$('#check-math').hide();
				$('#next-math-question').show();
				clearInterval(timer);
			}
		}
		else{
			if(attempts == 2){
				document.getElementById('problem').innerHTML = problem_number + ") " + equation + 
				"  " + correct_answer_is + "</em></h2>";
				attempts = 0;
				$('#check-math').hide();
				$('#next-math-question').show();
				clearInterval(timer);
			}
		}
	}
});

$('#next-word-question').on('click',function(){
	var user_answer = document.getElementById('word-answer');
	user_answer.value = "";
	$('#word-answer').prop("disabled",false);
	
	var indicator = document.getElementById('word-answer-is');
	clickCount++;
	
	var last_val = "<h3>End of game.</h3><h3>Your score is: <span class='right'>" + answers_correct + 
	"</span>/"+ out_of +"</h3><h2 id='congrats'></h2><p>The words you missed were: <ol>" + displayIA() + 
	"</ol></p><button id='new-game'>New Game</button>";
	
	var random_word = Math.floor(Math.random() * my_list.length);
	
	$('#check-word').show();
	
	//Show next word if problem count less than 11.
	
	if(game_selected == "fitb"){
		if(level_selected == "easy"){
			out_of = 10;
			
			if(clickCount < 10){
				my_word =  my_list[clickCount];
				rand_letter = Math.floor((Math.random() * (my_word.length)));
				
				newWord = my_word.replace(my_word[rand_letter], '*');
				sec_rand_letter = Math.floor((Math.random() * (my_word.length)));
				guess_word = newWord;
				
				secondNewWord = newWord.replace(newWord[sec_rand_letter], '*');
				if(level_selected == "hard-level") guess_word = secondNewWord;
				
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
				user_answer.focus();
				++problem_number;
				//timer = setInterval(countDown,1000);
				
				if(clickCount == 10 || stop_game){
					//clearInterval(timer);
					clickCount = 0;
					problem_number = 1;
					$('#sound').empty();
					$('#word-game').html(last_val);
				}
				
				$('#next-word-question').hide();
				indicator.innerHTML = "";
				user_answer.focus();
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
			}else{
				$('#word-game').html(last_val);
				answers_correct = 0;
				$('#sound').empty();
			}
		}
		
		if(level_selected == "medium"){
			out_of = 50;
			
			if(clickCount < 50){
				my_word =  my_list[clickCount];
				rand_letter = Math.floor((Math.random() * (my_word.length)));
				
				newWord = my_word.replace(my_word[rand_letter], '*');
				sec_rand_letter = Math.floor((Math.random() * (my_word.length)));
				guess_word = newWord;
				
				secondNewWord = newWord.replace(newWord[sec_rand_letter], '*');
				if(level_selected == "hard-level") guess_word = secondNewWord;
				
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
				user_answer.focus();
				++problem_number;
				//timer = setInterval(countDown,1000);
				
				if(clickCount == 50 || stop_game){
					//clearInterval(timer);
					clickCount = 0;
					problem_number = 1;
					$('#word-game').html(last_val);
				}
				
				$('#next-word-question').hide();
				indicator.innerHTML = "";
				user_answer.focus();
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
			}else{
				$('#word-game').html(last_val);
				answers_correct = 0;
				$('#sound').empty();
			}
		}
		
		if(level_selected == "hard"){
			out_of = 40;
			
			if(clickCount < 40){
				my_word =  my_list[clickCount];
				rand_letter = Math.floor((Math.random() * (my_word.length)));
				
				newWord = my_word.replace(my_word[rand_letter], '*');
				sec_rand_letter = Math.floor((Math.random() * (my_word.length)));
				guess_word = newWord;
				
				secondNewWord = newWord.replace(newWord[sec_rand_letter], '*');
				if(level_selected == "hard-level") guess_word = secondNewWord;
				
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
				user_answer.focus();
				++problem_number;
				//timer = setInterval(countDown,1000);
				
				if(clickCount == 40 || stop_game){
					//clearInterval(timer);
					clickCount = 0;
					problem_number = 1;
					$('#word-game').html(last_val);
				}
				
				$('#next-word-question').hide();
				indicator.innerHTML = "";
				user_answer.focus();
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
			}else{
				$('#word-game').html(last_val);
				answers_correct = 0;
				$('#sound').empty();
			}
		}
	}
	
	if(game_selected == "wu"){
		if(level_selected == "easy"){
			out_of = 10;
			
			if(clickCount < 10){
				my_word = my_list[clickCount];
				
				splitWord = my_word.split("");
				scrambledWord = splitWord.sort();
				guess_word = scrambledWord.join(" ");
				++problem_number;
				//timer = setInterval(countDown,1000);
				
				if(clickCount == 10 || stop_game){
					//clearInterval(timer);
					clickCount = 0;
					problem_number = 1;
					$('#word-game').html(last_val);
				}
				
				$('#next-word-question').hide();
				indicator.innerHTML = "";
				user_answer.focus();
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
			}else{
				$('#word-game').html(last_val);
				answers_correct = 0;
				$('#sound').empty();
			}
		}
		
		if(level_selected == "medium"){
			out_of = 50;
			
			if(clickCount < 50){
				my_word = my_list[clickCount];
				
				splitWord = my_word.split("");
				scrambledWord = splitWord.sort();
				guess_word = scrambledWord.join(" ");
				++problem_number;
				//timer = setInterval(countDown,1000);
				
				if(clickCount == 50 || stop_game){
					//clearInterval(timer);
					clickCount = 0;
					problem_number = 1;
					$('#word-game').html(last_val);
				}
				
				$('#next-word-question').hide();
				indicator.innerHTML = "";
				user_answer.focus();
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
			}else{
				$('#word-game').html(last_val);
				answers_correct = 0;
				$('#sound').empty();
			}
		}
		
		if(level_selected == "hard"){
			out_of = 50;
			
			if(clickCount < 50){
				my_word = my_list[clickCount];
				
				splitWord = my_word.split("");
				scrambledWord = splitWord.sort();
				guess_word = scrambledWord.join(" ");
				++problem_number;
				//timer = setInterval(countDown,1000);
				
				if(clickCount == 50 || stop_game){
					//clearInterval(timer);
					clickCount = 0;
					problem_number = 1;
					$('#word-game').html(last_val);
				}
				
				$('#next-word-question').hide();
				indicator.innerHTML = "";
				user_answer.focus();
				document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
			}else{
				$('#word-game').html(last_val);
				answers_correct = 0;
				$('#sound').empty();
			}
		}
	}
	
	//Cogratulate on job well done
	if(level_selected == "easy"){
		if(amount_correct >= 9){
			$('#congrats').html("Great job " +uname.value.charAt(0).toUpperCase()+uname.value.slice(1) + "!");
			
			if(clickCount > 9){
				$('#bgm').empty();
				playSpecialEnding();
			}
		}
	}
	
	if(level_selected == "medium"){
		if(amount_correct >= 43){
			$('#congrats').html("Great job " +uname.value.charAt(0).toUpperCase()+uname.value.slice(1) + "!");
			
			if(clickCount >= 50){
				$('#bgm').empty();
				playSpecialEnding();
			}
		}
	}
	
	if(level_selected == "hard"){
		if(amount_correct >= 43){
			$('#congrats').html("Great job " +uname.value.charAt(0).toUpperCase()+uname.value.slice(1) + "!");
			
			if(clickCount >= 50){
				$('#bgm').empty();
				playSpecialEnding();
			}
		}
	}
	
	$('#new-game').on('click',function(){
		$('#word-game').hide();
		showGameSelectPanel();
		$('#game-panel').show();
	});
});

$('#next-math-question').on('click',function(){
	var user_answer = document.getElementById('math-answer').value;
	user_answer = "";
	var indicator = document.getElementById('math-answer-is');
	clickCount++;
	var last_val = "<h3>End of game.</h3><h3>Your total is: <span class='right'>" + answers_correct + 
	"</span>/50</h3><h2 id='congrats'></h2>" + 
	"<button id='new-game'>New Game</button>";
	
	$('#check-math').show();
	
	//Show next random word if problem count less than 11.
	
	if(game_selected == "add"){
		if(clickCount < 50){
			my_word =  my_list[clickCount];
			rand_letter = Math.floor((Math.random() * (my_word.length)));
			
			newWord = my_word.replace(my_word[rand_letter], '*');
			sec_rand_letter = Math.floor((Math.random() * (my_word.length)));
			guess_word = newWord;
			
			secondNewWord = newWord.replace(newWord[sec_rand_letter], '*');
			if(level_selected == "hard-level") guess_word = secondNewWord;
			
			document.getElementById('word').innerHTML = problem_number + ") " + guess_word;
			user_answer.focus();
			++problem_number;
			//timer = setInterval(countDown,1000);
			
			if(clickCount == 50 || stop_game){
				//clearInterval(timer);
				clickCount = 0;
				problem_number = 1;
				$('#math-game').html(last_val);
			}
			
			$('#next-math-question').hide();
			indicator.innerHTML = "";
			user_answer.focus();
			document.getElementById('problem').innerHTML = problem_number + ") " + equation;
		}else{
			$('#math-game').html(last_val);
			answers_correct = 0;
		}		
	}
	
	if(game_selected == "sub"){
		if(clickCount < 50){
			my_word = my_list[clickCount];
			
			splitWord = my_word.split("");
			scrambledWord = splitWord.sort();
			guess_word = scrambledWord.join(" ");
			++problem_number;
			//timer = setInterval(countDown,1000);
			
			if(clickCount == 50 || stop_game){
				//clearInterval(timer);
				clickCount = 0;
				problem_number = 1;
				$('#math-game').html(last_val);
			}
			
			$('#next-math-question').hide();
			indicator.innerHTML = "";
			user_answer.focus();
			document.getElementById('problem').innerHTML = problem_number + ") " + equation;
		}else{
			$('#math-game').html(last_val);
			answers_correct = 0;
		}
	}
	
	if(game_selected == "multi"){
		if(clickCount < 50){
			my_word = my_list[clickCount];
			
			splitWord = my_word.split("");
			scrambledWord = splitWord.sort();
			guess_word = scrambledWord.join(" ");
			++problem_number;
			//timer = setInterval(countDown,1000);
			
			if(clickCount == 50 || stop_game){
				//clearInterval(timer);
				clickCount = 0;
				problem_number = 1;
				$('#math-game').html(last_val);
			}
			
			$('#next-math-question').hide();
			indicator.innerHTML = "";
			user_answer.focus();
			document.getElementById('problem').innerHTML = problem_number + ") " + equation;
		}else{
			$('#math-game').html(last_val);
			answers_correct = 0;
		}
	}
	
	if(game_selected == "divi"){
		if(clickCount < 50){
			my_word = my_list[clickCount];
			
			splitWord = my_word.split("");
			scrambledWord = splitWord.sort();
			guess_word = scrambledWord.join(" ");
			++problem_number;
			//timer = setInterval(countDown,1000);
			
			if(clickCount == 50 || stop_game){
				//clearInterval(timer);
				clickCount = 0;
				problem_number = 1;
				$('#math-game').html(last_val);
			}
			
			$('#next-math-question').hide();
			indicator.innerHTML = "";
			user_answer.focus();
			document.getElementById('problem').innerHTML = problem_number + ") " + equation;
		}else{
			$('#math-game').html(last_val);
			answers_correct = 0;
		}
	}
	
	//Cogratulate on job well done
	if(amount_correct >= 40){
		$('#congrats').html("Great job " +uname.value.charAt(0).toUpperCase()+uname.value.slice(1) + "!");
	}
	
	$('#new-game').on('click',function(){
		$('#math-game').hide();
		showGameSelectPanel();
		$('#game-panel').show();
	});
});

function reloadPage(){
	location.reload();
}

var t = 30;
var stop_game = false;
	
function countDown(){
	var my_time = document.getElementById('timer');
	
	my_time.innerHTML = "Timer: " + t;
	t--;
	
	if(t < 0){
		clearInterval(timer);
		t = 30;
		stop_game = true;
	}
}

$('#flash-btn').on('click',function(){
	var flash_btn = document.getElementById('flash-btn');
	var p = 0;
	var my_new_word = [];

	if(flash_btn.innerHTML == 'Flash Cards'){
		flash_btn.innerHTML = "List Words";
		$('#word-list').hide();
		$('#flashcard-carousel').show();
		word_num = 1;
	
		for(x=0;x<words.length;x++){
			if(x == 0){
				flash_words.innerHTML = `<div class='carousel-item active animated'><h2 class='big-text'>${word_num}) ${words[x]} </h2></div>`;
			}
			else{
				flash_words.innerHTML += `<div class='carousel-item'><h2 class='big-text'>${++word_num}) ${words[x]} </h2></div>`;
			}	
		}	
	}
	else if(flash_btn.innerHTML == 'List Words'){
		flash_btn.innerHTML = "Flash Cards";
		$('#flashcard-carousel').hide();
		$('#word-list').show();		
	}
})