import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        // get the square this pawn is on
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
        }



        if (this.player == Player.WHITE){
            if (ifEmpty(row + 1, col)){
                possibleMoves.push( new Square(location.row + 1, location.col));
                if (location.row == 1 && ifEmpty(row + 2, col)){
                    possibleMoves.push( new Square(location.row + 2, location.col));
                }
            }

        } else if (this.player == Player.BLACK) {
            if (ifEmpty(row - 1, col)) {
                possibleMoves.push(new Square(location.row - 1, location.col));
                if (location.row == 6 && ifEmpty(row -2, col)) {
                    possibleMoves.push(new Square(location.row - 2, location.col));
                }
            }
        }

        return possibleMoves;
    }
}

