$(function(){


  function Player(name, mark){
    this.name = name;
    this.mark = mark;
    this.playerArray = [];
  }


  //GLOBAL SCOPE VARIABLE
  var boardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var newPlayer = new Player("Player1", "X");
  var newPlayer2 = new Player("Player2", "O");

  // var p1 = [];
  // var p1Mark = "X"
  // var p2 = [];
  // var p2Mark = "O"

  var winningCondition = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];

  $(".boardsquare").click(function(){
    var i = $(this).children().innerText;
    alert(i);
    newPlayer.playerArray.push(boardArray[i]);
    boardArray[i] = newPlayer.mark;
    console.log(boardArray[i]);
    console.log(boardArray);
    console.log(newPlayer.playerArray);
  });

  // $("#box1").one("click", function(){
  //   newPlayer.playerArray.push(boardArray[1]);
  //   boardArray[1] = newPlayer.mark;
  //
  //
  // });
  // $("#box2").click(function(){
  //   newPlayer.playerArray.push(boardArray[2]);
  //   boardArray[2] = newPlayer.mark;
  //
  //
  // });
  // $("#box3").click(function(){
  //   newPlayer.playerArray.push(boardArray[3]);
  //   boardArray[3] = newPlayer.mark;
  //
  //
  // });
  // $("#box4").click(function(){
  //   newPlayer.playerArray.push(boardArray[4]);
  //   boardArray[4] = newPlayer.mark;
  //
  //
  // });
  // $("#box5").click(function(){
  //   newPlayer.playerArray.push(boardArray[5]);
  //   boardArray[5] = newPlayer.mark;
  //
  //
  // });
  // $("#box6").click(function(){
  //   newPlayer.playerArray.push(boardArray[6]);
  //   boardArray[6] = newPlayer.mark;
  //
  //
  // });
  // $("#box7").click(function(){
  //   newPlayer.playerArray.push(boardArray[7]);
  //   boardArray[7] = newPlayer.mark;
  // });
  // $("#box8").click(function(){
  //   newPlayer.playerArray.push(boardArray[8]);
  //   boardArray[8] = newPlayer.mark;
  // });
});
