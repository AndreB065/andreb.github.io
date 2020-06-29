let game_selected = document.getElementsByTagName('button');
var balls = [];
var game_length;
	
	
function gameClicked(e){
	changeButtons();
	
	var game_name = document.getElementById('mynums');
	
	console.log(e.innerHTML);
	game_name.innerHTML = e.innerHTML;
	
	shuffleBalls(e);
}

function shuffleBalls(c){
	var x = 0;
	
	if(c.innerHTML == "Pick 3") game_length = 3;
	if(c.innerHTML == "Pick 4") game_length = 4;
	if(c.innerHTML == "Fantasy 5") game_length = 5;
	if(c.innerHTML == "Lotto") game_length = 6;
	if(c.innerHTML == "Powerball") game_length = 5;
	if(c.innerHTML == "Mega Money") game_length = 5;
	
	for(;x<game_length;x++){
		let my_num = Math.floor((Math.random()*70)+1);
		let my_special = Math.floor((Math.random()*25)+1);
		
		balls.push(my_num);
		document.getElementById('mynums').innerHTML = "<div class='nums'>" + "<h3>" +c.innerHTML+ ": <span><i>" +balls+ "</i></span></h3></div> <div id='special-num'>" +my_special+ '</div>';
		
		if(c.innerHTML == "Pick 3") document.getElementById('special-num').style.display = 'none';
		if(c.innerHTML == "Pick 4") document.getElementById('special-num').style.display = 'none';
		if(c.innerHTML == "Fantasy 5") document.getElementById('special-num').style.display = 'none';
		if(c.innerHTML == "Lotto") document.getElementById('special-num').style.display = 'none';
	}
}

function changeButtons(){
	document.getElementById('buttons-container').innerHTML = "<button onclick='reloadPage();'>Reset</button>";
}

function reloadPage(){
	location.reload();
}



/*function chooseRadio(){
	if(radio_selected){
		alert(radio_selected.value);
		game_name.innerHTML = game_selected.value;
	}
	
	console.log(game_selected.value)
}*/