
 var cours_part=5 ;
 var compteur=0 ;
 var progress_width=0 ;
var Next=document.getElementById("next") ; 
var prev=document.getElementById("previous") ;
//initialiser le tableau de progression 
var array=[] ;
for (var i = 0; i <cours_part; i++) {
  array[i]=true;
}
function check (x){
  if(array[x]&&x<=array.length){
    array[x]=false ;
    progress_width++ ;
    improve() ;
  }
}
function next(){
  check(compteur);
  //remove class active
  var test = document.getElementsByClassName("active");
  test[0].classList.remove("active");
  var text =document.getElementById("cours_part"+compteur) ;
  text.style.display='none' ;
  compteur++ ;
  //afficher le button previous 
    prev.style.display='inline-block'  ;
  if(compteur>=cours_part){
    compteur=cours_part ; 
    Next.style.display='none'  ;
  } 
  //add class active
  var chapter = document.getElementsByTagName("p")[compteur];
  chapter.classList.add("active");
 //-----------------------------
  text =document.getElementById("cours_part"+compteur) ;
  text.style.display='block' ;
}
function previous(){
  check(compteur);
  var test = document.getElementsByClassName("active");
  test[0].classList.remove("active");
  var text =document.getElementById("cours_part"+compteur) ;
  text.style.display='none' ;
  compteur-- ;
  //afficher le button next
    Next.style.display='inline-block'  ;
  if(compteur<=0){
    compteur=0 ;
    prev.style.display='none'  ;
  } 
    var chapter = document.getElementsByTagName("p")[compteur];
    chapter.classList.add("active");
 text =document.getElementById("cours_part"+compteur) ;
 text.style.display='block' ;
}
function show_part(x){
  check(x);
  var text =document.getElementById("cours_part"+compteur) ;
  text.style.display='none' ;
  //remove the active classe 
   var test = document.getElementsByClassName("active");
   test[0].classList.remove("active");
  //--------------------------
  compteur=x ;
  text =document.getElementById("cours_part"+compteur) ;
  text.style.display='block';
  //add the actibve classe to the new element
   var chapter = document.getElementsByTagName("p")[compteur];
   chapter.classList.add("active");
  if (0<compteur<cours_part) {
         prev.style.display='inline-block'  ;
         Next.style.display='inline-block'  ;
        }
  if(compteur==0){
     Next.style.display='inline-block'  ;
      prev.style.display='none'  ;
     }
  if (compteur==cours_part){
      prev.style.display='inline-block'  ;
      Next.style.display='none'  ;
     }

}








function improve() {
  var myprogress= document.getElementById("myProgress"); 
  var totalwidth=myprogress.offsetWidth ;
  var elem = document.getElementById("myBar");   
  var Actualwidth=elem.offsetWidth ;
  var widthToReach=(progress_width/cours_part)*totalwidth ;
  var id = setInterval(frame, 5);
  function frame() {
    if(Actualwidth >= widthToReach) {
      clearInterval(id);
    } else {
      Actualwidth++; 
      elem.style.width = Actualwidth + 'px'; 
      elem.innerHTML = (progress_width/cours_part)*100  + '%';
    }
  }
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
