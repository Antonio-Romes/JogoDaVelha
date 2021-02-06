let numberMoves = 0;
let isBlockMove = false;
$(document).ready(function() {
    $("#viewWinner").hide();
});

function getValueInput(elem){
    
    if(!isBlockMove){
        numberMoves++;
        let selectedPlayer = checkValueInput(elem); 
        let isWinner = checkWinner(elem.value);
        isBlockMove = isWinner;
        if(isWinner){ 
            viewWinningName(selectedPlayer);$ 
        }

        if(numberMoves == 9){
            viewWinningName("Deu Velha");$ 
        }
    }
}

const viewWinningName = (winner) => {
    $("#toboo").hide();
    $("#viewWinner").show();
    $("#nameWinner").text(winner);
}



function checkWinner(value){

    if((value == $("#input1").val() && value == $("#input2").val() && value == $("#input3").val()) ||
       (value == $("#input4").val() && value == $("#input5").val() && value == $("#input6").val()) ||
       (value == $("#input7").val() && value == $("#input8").val() && value == $("#input9").val()) ||
       (value == $("#input1").val() && value == $("#input4").val() && value == $("#input7").val()) ||
       (value == $("#input2").val() && value == $("#input5").val() && value == $("#input8").val()) ||
       (value == $("#input3").val() && value == $("#input6").val() && value == $("#input9").val()) ||
       (value == $("#input1").val() && value == $("#input5").val() && value == $("#input9").val()) ||
       (value == $("#input7").val() && value == $("#input5").val() && value == $("#input3").val())){
            return true;
    }
    return false;
}

function checkValueLines(value){
    if((value == $("#input1").val() && value == $("#input2").val() && value == $("#input3").val()) ||
       (value == $("#input4").val() && value == $("#input5").val() && value == $("#input6").val())||
       (value == $("#input7").val() && value == $("#input8").val() && value == $("#input9").val())){

    }
}

function checkValueInput(elem){

    if(elem.value == ""){
        let selectedPlayer = checkSelectedPlayer();
        if(elem.value == "" && selectedPlayer == "Player1"){
            elem.value = "X";
        }
        else{
            elem.value = "0";
        }  
        return selectedPlayer;
    }
}
 
function checkSelectedPlayer(){

    let selectedPlayer = $("#player1").hasClass("bg-primary") ? "Player1": "Player2";
    selectedNextPlayer(selectedPlayer);
    return selectedPlayer;
}

function selectedNextPlayer(namePlayer){
    if(namePlayer == "Player1"){
        $("#player1").removeClass("bg-primary");
        $("#player1").addClass("bg-white");
        $("#player2").removeClass("bg-white");
        $("#player2").addClass("bg-primary");
    }
    else{
        $("#player1").removeClass("bg-white");
        $("#player1").addClass("bg-primary");
        $("#player2").removeClass("bg-primary");
        $("#player2").addClass("bg-white");
    }
}

function clearInpts(){
    $("#input1").val("");
    $("#input2").val("");
    $("#input3").val("");
    $("#input4").val("");
    $("#input5").val("");
    $("#input6").val("");
    $("#input7").val("");
    $("#input8").val("");
    $("#input9").val("");
    $("#player1").removeClass("bg-white");
    $("#player1").addClass("bg-primary");
    $("#player2").removeClass("bg-primary");
    $("#player2").addClass("bg-white");
    $("#toboo").show();
    $("#viewWinner").hide();
    $("#nameWinner").text("");
    isBlockMove = false; 
    numberMoves = 0;
}