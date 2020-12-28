var player1Username = localStorage.getItem("player1Name");
var player2Username = localStorage.getItem("player2Name");

var player1Score = 0;
var player2Score = 0;

var question_turn;
var answer_turn;

function onLoad(){
    document.getElementById("player1Name").innerHTML = player1Username + ":";
    document.getElementById("player2Name").innerHTML = player2Username + ":";
    document.getElementById("player1score").innerHTML = player1Score;
    document.getElementById("player2score").innerHTML = player2Score;

    question_turn = player1Username;
    answer_turn = player2Username;

    document.getElementById("whoIsAsking").innerHTML = "Question Turn: " + question_turn;
    document.getElementById("whoIsGuessing").innerHTML = "Answer Turn: " + answer_turn;
}

function send(){
    input = document.getElementById("questionInput").value;
    if(input.length < 5){
        alert("Please type a word that is more than 5 letters long");
    }
    else{
        char1 = input.charAt(1);
        console.log(char1);

        charMid = input.charAt(Math.floor(input.length / 2));
        console.log(charMid);

        charEnd = input.charAt(input.length - 1);
        console.log(charEnd);

        repText1 = input.replace(char1, "_");
        repText2 = repText1.replace(charMid, "_");
        repText3 = repText2.replace(charEnd, "_");

        console.log(repText1);
        console.log(repText2);
        console.log(repText3);

        question = "<h4 id='word_display'>Q: "+repText3+"</h4>";
        answer = "<br>Answer: <input type='text' id='answer'/>";
        checkBtn = "<br><br> <button id='check'>Check</button> <br>";

        row = question + answer + checkBtn;

        document.getElementById("questionOutput").innerHTML = row;

        document.getElementById("questionInput").clear();
    }
}