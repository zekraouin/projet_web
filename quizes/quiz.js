var compteur=1 ;
var answers=[] ;
function next(){
 var answered=false ;
 var  prev=document.getElementById("qst"+compteur) ;
  prev.style.display="none" ;
  var answer=document.getElementsByClassName("answer"+compteur);
  compteur++ ;
  for (var i = answer.length - 1; i >= 0; i--) {	
    if (answer[i].checked) {
    answers.push(i+1) ;
    answered=true ;
  }  
 }
 if(!answered){
  	 compteur-- ;
  	 prev=document.getElementById("qst"+compteur) ;
     prev.style.display="block" ;
  }
  else if(compteur<=5){
  	 var next_qst = document.getElementById("qst"+compteur);
     next_qst.style.display="block" ;
  }
}
function show_score(){
	next() ;
	var score=5 ;
	var button = document.getElementsByTagName("button");
	var questions=document.getElementsByClassName("question");
	for (var i = questions.length - 1; i >= 0; i--) {
		questions[i].style.display="block" ;
	}
    for (var i = 0; i <=4; i++) {
     var class_answer="container"+(i+1);
     var answer=document.getElementsByClassName(class_answer);
     x=right_answers[i] ;
     answer[x-1].style.color="#249624" ;
    }
	for (var i =0; i <=5; i++) {
        button[i].style.display="none";
        var class_answer="container"+(i+1);
        var answer=document.getElementsByClassName(class_answer);
		if (answers[i]!=right_answers[i]) {
			var indice=answers[i]-1;
			score -- ;
			answer[indice].style.color="red" ;
			
		}
	}

	for (var i = 0; i <score ; i++) {
		var Paint_the_star="Score"+(i+1) ;
		var star=document.getElementById(Paint_the_star) ;
		star.style.color ="orange" ;
	}
	var TotalScore=document.getElementById("TotalScore") ;
	TotalScore.innerHTML=(score/5)*100 +"%" ;

}




function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}