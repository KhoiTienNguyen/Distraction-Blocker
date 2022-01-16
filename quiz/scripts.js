/* Place your JavaScript in this file */

const ansList = ["0","2","sin(x)+xcos(x)",'HackMcwics','loansharks','France','3']
function checkMcq(){
    var x = document.getElementsByName("q6");
    for (var i = 0, length = x.length; i < length; i++) {
        if (x[i].checked) {
           val = x[i].value; 
           break;
         }
    }
    
    if ( val == 3 ) {
      alert('CONGRATULATIONS! Your answer is correct! You have advanced to the next level.');
      window.location.href = "/quiz10.html"
    } else {
      alert('wrong answer, u dummy :/');
    } return false;
} 
function checkAnswers(num){
    // The following is what I changed.
    Student_answer = document.querySelector('[name="clave1"]').value;
    Teacher_answer = ansList[num];
    //alert(Teacher_answer)

    if (Student_answer === Teacher_answer) {
        window.location.href = "/quiz"+ String(num +1) +".html";
       alert("CONGRATULATIONS! Your answer is correct! You have advanced to the next level.");
       // window.location.href = "http://www.w3schools.com";
        //document.body.innerHTML += '<button onclick="window.location.href = \'https://gostudy.w3spaces.com/quiz2.html\';">Next Riddle</button>'
        //NOTE: here is where the button should be activated and click on it to advance to an hyperlink 
    } else {
        alert("Wrong answer, u dummy :/ ");
  
        //NOTE: here the button must be disabled
    }
    return false;
  

  }

function showImage(){
    document.getElementById("whiteflag").style.display ='block';
    document.getElementById("btnID").style.display = "none";
}