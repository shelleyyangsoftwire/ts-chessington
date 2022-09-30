import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let location = board.findPiece(this);
        // return the square in front of it
        let possibleMoves = [];
        var row = location.row;
        var col = location.col;
        function ifEmpty(x: number, y:number){
            if (x < 0 || x > 7 || y < 0 || y > 7){
                return false;
            }
            var thisSquare = new Square(x, y);
            if (board.getPiece(thisSquare) == null){
                return true;
            }
            return false;
        }



        for (var i = 1; i < 8; i++){
            if (ifEmpty(row + i, col + i)){
                possibleMoves.push(new Square (row + i, col + i));
            } else {
                break;
            }
        }

        for (var i = 1; i < 8; i++){
            if (ifEmpty(row + i, col - i)){
                possibleMoves.push(new Square (row + i, col - i));
            } else {
                break;
            }
        }

        for (var i = 1; i < 8; i++){
            if (ifEmpty(row - i, col + i)){
                possibleMoves.push(new Square (row - i, col + i));
            } else {
                break;
            }
        }

        for (var i = 1; i < 8; i++){
            if (ifEmpty(row - i, col - i)){
                possibleMoves.push(new Square (row - i, col - i));
            } else {
                break;
            }
        }

        return possibleMoves;
    }
}
