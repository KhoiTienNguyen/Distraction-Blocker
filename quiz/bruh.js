// NOTE: this example uses the chess.js library:
// https://github.com/jhlywa/chess.js

document.getElementById("myButton").addEventListener("click", reset);

var board = null
var game = new Chess()
var stock_fish = null
var first_fish = null
var second_fish = null

function onDragStart (source, piece, position, orientation) {
// do not pick up pieces if the game is over
if (game.game_over()) return false

// only pick up pieces for White
if (piece.search(/^b/) !== -1) return false
}
function httpGet(theUrl)
{
    var str2 = "http://127.0.0.1:5000/?move=" + theUrl
    // let str2 = str.replaceAll(" ", "%")
    console.log(str2)
    var http = new XMLHttpRequest();
    // var url = 'get_data.php';
    // var params = 'orem=ipsum&name=binny';
    http.open('GET', str2, false);
    // http.timeout = 0;

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            stock_fish = http.responseText;
            console.log(stock_fish);
        }
    }
    http.send();
    return http.responseText;
}

function makeRandomMove () {
// var possibleMoves = game.moves()

// // game over
// if (possibleMoves.length === 0) return

// var randomIdx = Math.floor(Math.random() * possibleMoves.length)

var next_fish = {
    from: first_fish,
    to: second_fish,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
}
console.log(game.move(next_fish))
board.position(game.fen())
}

function onDrop (source, target) {
// see if the move is legal
var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
})

// illegal move
if (move === null) return 'snapback'

// make random legal move for black
window.setTimeout(makeRandomMove, 250)
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
board.position(game.fen())
stock_fish = httpGet(game.fen())
first_fish = stock_fish.substring(0,2)
console.log(first_fish)
second_fish = stock_fish.substring(2,4)
console.log(second_fish)
console.log(stock_fish)
}

function reset () {
    board = null
    game = new Chess()
    stock_fish = null
    first_fish = null
    second_fish = null
    var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
    }
    board = Chessboard('myBoard', config)
}
var config = {
draggable: true,
position: 'start',
onDragStart: onDragStart,
onDrop: onDrop,
onSnapEnd: onSnapEnd
}
board = Chessboard('myBoard', config)