function checkNames(){
	var name1 = document.getElementById('player1').value;
	var name2 = document.getElementById('player2').value;
	
	if(name1 == '' || name2 == ''){
		alert('Both names are needed to continue!');
		return false;
	}
}

function checkAnswers(){
	var inputs = document.getElementById("game-questions").elements;
    	var count  = 0;
    	for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].type == 'radio' && inputs[i].checked) count++;
    	}
	if(count < 20){
		alert('You must answer all 20 questions!');
		return false;
	}

}

/*			
function renderTime(){
	var currentTime = new Date();
	var diem = 'AM';
	var H = currentTime.getHours();
	var M = currentTime.getMinutes();
	var S =  currentTime.getSeconds();
	var MS = currentTime.getMilliseconds();
	
	if(H == 0){
		H = 12;
	}
	else if(H > 12){
		H = H - 12;
		diem = 'PM';
	}
	
	if(H < 10){
		H = '0' + H;
	}
	
	if(M < 10){
		M = '0' + M;
	}
	
	if(S < 10){
		S = '0' + S;
	}
	
	var myClock = document.getElementById('timer');
	myClock.innerHTML = H + ':' + M + ':' + S  + ' ' + diem;
	setTimeout(renderTime(), 1000);	
}
*/
