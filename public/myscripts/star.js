var i = 0, A, B, C, aquestion, views;
var correct = 0;
var k = ["sith.png", "leiarotj.png", "lukefigther.png", "leiastarwars.png", "minions.png", "sandpeople.png", "solo.png", "stormtrooper.png", "thedroids.png", "lukerotj.png"]

var questions = [ 
["What year did Star Wars debut?", "1976", "1977", "1978", "B"],
["What month does Star Wars Episode 7 debut?", "December", "November", "January", "A"],
["In which movie, did Lucas have a cameo appearance?", "Star Wars", "Return of the Jedi", "Revenge of the Sith", "C"],
["Who was Qui Gon's apprentice?", "Obi Wan Kenobi", "Yoda", "Mace Windu", "A"],
["Who was Princess Leia's adoptive father?", "Owen Lars", "Bail Organa", "Obi Wan Kenobi", "B"],
["Who was Luke Skywalker's best friend on Tatooine?", "Biggs", "Han Solo", "Obi Wan Kenobi", "A"],
["What kind of fighter craft does Luke fly?", "X-wing", "Tie fighter", "Star Destroyer", "A"],
["Who says 'delusions of grandeur' in Return of the Jedi?", "Luke Skykwalker", "Han Solo", "Princess of Leia", "B"],
["Who lives on Endor?", "The Wookies", "The Sand People", "The Ewoks", "C"],
["Who destroys the Death Star in Return of the Jedi?", "Luke and Darth Vader", "Lando and Chewbacca", "R2-D2 and C-3P0", "B"]
];


function displayQ(){
	views = document.getElementById("view");

		if(i >= questions.length){
			view.innerHTML = "<h2>"+correct+" of "+questions.length+" correct!</h2>";
		
			i = 0;
			correct = 0;
			return false;
		}
	
		pic = k[i];
		aquestion = questions[i][0];
		A = questions[i][1];
		B = questions[i][2];
		C = questions[i][3];
		
		views.innerHTML = "<h3>"+aquestion+"</h3>";
		views.innerHTML += "<input type='radio' name='choices' value='A'> "+ A +"<br>";
		views.innerHTML += "<input type='radio' name='choices' value='B'> "+ B +"<br>";
		views.innerHTML += "<input type='radio' name='choices' value='C'> "+ C +"<br><br>";
		views.innerHTML += "<button onclick='results()'>Enter</button>" + "<br><br>";
		views.innerHTML += "<img src=images/" + pic + ">" + "<br><br>";
		
		
		}

function results(){
	choices = document.getElementsByName("choices");
	
	for(j=0; j<choices.length; j++){
		if(choices[j].checked){
			answer = choices[j].value;
		}
	}
	
	if(answer == questions[i][4]){
		correct++;
	}
	
	i++;
	displayQ();
}

window.addEventListener("load", displayQ, false);

