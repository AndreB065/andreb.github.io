let player1 = getElementById('player1');	
let player2 = getElementById('player2');	

let endtime = getElementById('timer').innerHTML();

let ans1 = $('input[name=q1ans1]:checked').val();
let ans2 = $('input[name=q2ans2]:checked').val();
let ans3 = $('input[name=q3ans3]:checked').val();
let ans4 = $('input[name=q4ans4]:checked').val();
let ans5 = $('input[name=q5ans5]:checked').val();
let ans6 = $('input[name=q6ans6]:checked').val();
let ans7 = $('input[name=q7ans7]:checked').val();
let ans8 = $('input[name=q8ans8]:checked').val();
let ans9 = $('input[name=q9ans9]:checked').val();
let ans10 = $('input[name=q10ans10]:checked').val();
let ans11 = $('input[name=q11ans11]:checked').val();
let ans12 = $('input[name=q12ans12]:checked').val();
let ans13 = $('input[name=q13ans13]:checked').val();
let ans14 = $('input[name=q14ans14]:checked').val();
let ans15 = $('input[name=q15ans15]:checked').val();
let ans16 = $('input[name=q16ans16]:checked').val();
let ans17 = $('input[name=q17ans17]:checked').val();
let ans18 = $('input[name=q18ans18]:checked').val();
let ans19 = $('input[name=q19ans19]:checked').val();
let ans20 = $('input[name=q20ans20]:checked').val();

let totalCorrect = 0;

if (ans1 == "D") { totalCorrect++; }
if (ans2 == "B") { totalCorrect++; }
if (ans3 == "C") { totalCorrect++; }
if (ans4 == "A") { totalCorrect++; }
if (ans5 == "B") { totalCorrect++; }
if (ans6 == "B") { totalCorrect++; }
if (ans7 == "D") { totalCorrect++; }
if (ans8 == "A") { totalCorrect++; }
if (ans9 == "B") { totalCorrect++; }
if (ans10 == "B") { totalCorrect++; }
if (ans11 == "D") { totalCorrect++; }
if (ans12 == "B") { totalCorrect++; }
if (ans13 == "B") { totalCorrect++; }
if (ans14 == "A") { totalCorrect++; }
if (ans15 == "C") { totalCorrect++; }
if (ans16 == "B") { totalCorrect++; }
if (ans17 == "C") { totalCorrect++; }
if (ans18 == "A") { totalCorrect++; }
if (ans19 == "B") { totalCorrect++; }
if (ans20 == "B") { totalCorrect++; }

let wrong = 20 - totalCorrect;

/*let result = `<h2>Result:</h2>
    <div id='correct'>totalCorrect / 20 correct</div>
    <div id='incorrect'>wrong / 20 incorrect</div>
if(totalCorrect > 15 && totalCorrect < 20){
    <p>So close... but yet so far.</p>
}

if(totalCorrect == 20){
    <h2>Great Job!</h2>
    <h2>You got them all correct.</h2>
    <p>If no one else beat your time, you are the winner, 
    see Jacell for your prize.</p>
}
    <a href='leaderboard.php'><button>Standing</button></a>
    <a href='questions.php'><button>Try again!</button></a>`
*/
document.write("result");