$(function(){

  //Constructor
  function Player(name, mark){
    this.name = name;
    this.mark = mark;
    this.playerArray = [];
  }

  //GLOBAL SCOPE VARIABLE
  var boardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  var newPlayer = new Player("Player1", "X");
  var newPlayer2 = new Player("Player2", "O");
  var playerTurn = true;  //true: player1, false: player2
  var tempPlayer = new Player;
  var winningCondition = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];





  $(".boardsquare").click(function(){
    //Switch Player
    if(playerTurn){
      tempPlayer = newPlayer;
    }else{
      tempPlayer = newPlayer2;
    }

    //get unique number
    var i = (parseInt((this.id.replace(/[^0-9]*/g,""))));
    tempPlayer.playerArray.push(boardArray[i]);
    $(this).append("<h2>" + tempPlayer.mark + "</h2>");
    $(this).off();


    ////////This is not working, you need to fix BUG!!!
    for(var i=0; i<winningCondition.length; i++){
      console.log("---------------------------------------------------------------------");
      console.log(tempPlayer.playerArray.toString());
      console.log(winningCondition[i].sort().toString());
      console.log(tempPlayer.playerArray.sort().toString().includes(winningCondition[i].sort().toString()))

      if(tempPlayer.playerArray.sort().toString().includes(winningCondition[i].sort().toString())){
        alert(tempPlayer.name + " win!");
        break;
      }
    }
    playerTurn = !playerTurn
  });

});
