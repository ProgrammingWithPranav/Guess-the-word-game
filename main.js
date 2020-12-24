function saveUsername(){
    player1Name = document.getElementById("player1_name").value;
    player2Name = document.getElementById("player2_name").value;

    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

    window.location = 'game_page.html';
}