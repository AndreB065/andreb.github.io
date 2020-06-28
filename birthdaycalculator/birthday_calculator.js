/*function removeArrow(){
	document.getElementById('arrow-container').style.display = 'none';
}setTimeout(removeArrow,7000);
*/

function calculateNextBirthday(){
//Get birth month and day.
	var birthMonthIn = document.getElementById("birth-month").value;
	var birthDayIn = document.getElementById("birth-day").value;
	
	if(birthMonthIn.length == 0 || birthDayIn.length == 0){
		alert('Please enter a valid birth month and day');
		return;
	}
	
	var birthMonth = parseInt(birthMonthIn);
	var birthDay = parseInt(birthDayIn);
	
	if(isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12){
		alert('Invalid month!');
		document.getElementById("birth-month").focus();
		return;
	}
	
	if(isNaN(birthDay) || birthDay < 1 || birthDay > 31){
		alert('Invalid day!');
		document.getElementById("birth-day").focus();
		return;
	}
	
//Get next birthdate	
	var today = new Date();
	var todayMonth = today.getMonth() + 1;
	var todayDay = today.getDate();
	var todaysYear = today.getFullYear();
	var birthYear = 0;
	
//This accounts for leap years
	if(birthMonth == 2 && birthDay == 29 && todaysYear%4 != 0){
		alert('Sorry, this is not a leap year! \n\nYour birthday will really be the next leap year.');
		dayInstead = confirm('Would you like to set the date you entered to 2/28 instead?');
		
		if(dayInstead == true){
			alert('Great!  I\'ll take care of that for you.');
		}else{
			alert('Sorry about that.  Hope to see you again soon.\n');
			return;
		}
		
		var tillLeapYear = 0;
		var leapYear = todaysYear;
		
		while(tillLeapYear < leapYear%4){
			tillLeapYear++;
			leapYear++;
		}
			
		alert('Don\'t worry! \n\nOnly '+tillLeapYear+ ' years till your actual birthday.\n\nIt\'ll be here before you know it!');
	
	//Set day of birth to 28	
		birthDay = 28;			
	}
	else if(birthMonth == 2 && birthDay > 29){
		alert('Invalid day!');
		return;
	}

//This determines if the birthday is now, or still to come 
	if((birthMonth < todayMonth) || ((birthMonth == todayMonth) && (birthDay < todayDay))){
		birthYear = todaysYear + 1;
		document.getElementById('your-day').style.display = 'none';
	}
	else if(birthMonth == todayMonth && birthDay == todayDay){
		document.getElementById("calculationOutput").innerHTML = '<p>Your birthday is today.</p><p>HAPPY BIRTHDAY!!!</p>';
		document.getElementById("calculationOutput").style.fontWeight = 'bold';
		document.getElementById("body").style.backgroundImage = "url('assets/snoopy.gif')";
		document.getElementById('your-day').style.display = 'block';
		return;
	}
	else
	{
		birthYear = todaysYear;
		document.getElementById('your-day').style.display = 'none';
	}

	var nextBirthDate = new Date(birthYear, birthMonth - 1, birthDay);
	var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
	var birthWeekday =  dayNames[nextBirthDate.getDay()];

//Get the number of days till next birthday
	var nextBirthdayInMilliseconds = nextBirthDate.getTime();
	var todaysMilliseconds = today.getTime();
	var timeDifferenceInMilliseconds = nextBirthdayInMilliseconds-todaysMilliseconds;
	var timeDifferenceInSeconds=timeDifferenceInMilliseconds/1000;
	var secondsPerDay = 24*60*60;
	var daysDifference=Math.ceil(timeDifferenceInSeconds/secondsPerDay);
	
	document.getElementById("calculationOutput").innerHTML ='<p>Your next birthday is on: '+birthWeekday+ ', ' +birthMonth+ '/' +birthDay+ '/' + 
	birthYear+ ',</p><p> which is: '+daysDifference+' days away.</p>';
	
	document.body.style.backgroundImage = "url('assets/happy-birthday-card.jpeg')";
}


var backgrounds = ['happy-birthday-background.png', 'birthday-cake.jpg', 'birthday-confetti.jpg', 'Blue_Birthday_Background.jpg', 
	'birthday-backgrounds-3.jpeg', 'happy-birthday-htbridge.jpg', 'happy-birthday-in-balloons.jpg', 'HBballoons.jpg', 
	'Happy-birthday-color-green.jpg', 'b_day162.png', 'b_day175.png', 'ermahgerd.jpg', 'surprise-happy-birthday-gifts-5.jpg'];

var nextpic = 0;
		
function changeBackground(){
	
	var backgroundimage = 'url(assets/' +backgrounds[nextpic]+ ')';

	if(nextpic < backgrounds.length){
		document.body.style.backgroundImage = backgroundimage;
		nextpic++;
	}
	else{
		nextpic = 0;
		document.body.style.backgroundImage = 'url(assets/cupcake.jpg)';
	}
}

var backgrounds2 = ['snoopy.gif', 'TwJwMlN.gif', 'bobs.gif', 'balloons.gif', 'tumblr.gif'];

function changeBackgroundGif(){
	
	var backgroundgif = 'url(assets/' +backgrounds2[nextpic]+ ')';

	if(nextpic < backgrounds2.length){
		document.body.style.backgroundImage = backgroundgif;
		nextpic++;
	}
	else{
		nextpic = 0;
		document.body.style.backgroundImage = 'url(assets/same-birthdays.jpg)';
	}
}