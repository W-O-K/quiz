var source =  [
        {
          question: "The world's largest desert is ?",
          choices: ["Thar", "Kalahari", "Sahara", "Sonoran"],
          answer: 2
        },
        
        {
          question: "Mount Everest is located in ?",
          choices: ["India", "Nepal", "Tibet", "China"],
          answer: 1
        },

        {
          question: "You visit probation for posting on which channel ?",
          choices: ["#Random", "#Game", "#Class", "#Help"],
          answer: 2
        },

        {
          question: "The title of Eminem's last album is ?",
          choices: ["Revival", "Kamikaze", "Recovery", "Music to Be Murdered By"],
          answer: 3
        },

        {
          question: "Covid-19 started in ?",
          choices: ["Rome", "United Kingdom", "Wuhan", "Beijing"],
          answer: 2
        }  
      ];
var i = 0;
var num = 1;
var questionNum = document.getElementById("questionNumber");
questionNum.innerHTML = "Question 1 of 5";
var btnCheck = document.getElementById("question");
var fill = source[i].question;
var change = document.getElementById("next");
var ansCheck = document.getElementById("correctAnswer");
var ans = 0;
//function to load content
function updateDiv(id, content){
  document.getElementById(id).innerHTML = content;
  checkAnswer();
}
//function to load options
function options(k){
  for(var j = 0; j < 4; j++){
    var fillOpt = source[k].choices[j]
  updateDiv(j,fillOpt);
  }
}
//counter for Next button
function counter(step){
  //to remove Next button when question is finished
  if((i+step) == source.length-1){
    change.remove();
    i+=step;
  }else if (source[i+step].question !== undefined){
    i+=step;
  }
  updateDiv("qSpace",source[i].question);
  options(i)
}

updateDiv("qSpace",fill);
options(i);

//function to check answer
function checkAnswer(){
btnCheck.addEventListener("click", function(e) {
  if(e.target && e.target.id == source[i].answer) {
    e.target.className = "btnCorrect";
    ans++;
    ansCheck.innerHTML = "You have " + (ans/5) + " correct answer(s)!";
  }else{
    e.target.className = "btnWrong";
    document.getElementById(source[i].answer).className = "btnCorrect";
    ansCheck.innerHTML = "You have " + (ans/5) + " correct answer(s)!";
  };
  document.getElementById("required").innerHTML = "";
},{once: true} );
}
//function to return button to default state
function buttonDefault(){
  for(let z = 0; z < 4; z++){
    document.getElementById(z).className = "btnNormal";  
  };
}
//next button
change.addEventListener("click", function(){
 if(document.getElementById(source[i].answer).className == "btnCorrect"){
 counter(+1);
 num++;
 questionNum.innerHTML = "Question " + num + " of 5";
 buttonDefault();
 }else{
  document.getElementById("required").innerHTML = "Choose an answer!!";
 }


}
  );