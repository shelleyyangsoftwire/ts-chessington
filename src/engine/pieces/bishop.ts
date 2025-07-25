import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let location = board.findPiece(this);
        // return the square in front of it
        let possibleMoves = [];
        let player = this.player;
        var row = location.row;
        var col = location.col;

        function inBounds (x: number, y: number){
            if (x < 0 || x > 7 || y < 0 || y > 7){
                return false;
            } else {
                return true;
            }
        }
        function ifEmpty(x: number, y:number){

            var thisSquare = new Square(x, y);
            if (board.getPiece(thisSquare) == null){
                return true;
            }
            return false;
        }

        function ifEdible (x: number, y: number, me: number ){
            var thisSquare = new Square(x, y);
            var contents = board.getPiece(thisSquare);
            if (contents instanceof Piece && contents.player != me){
                if (contents instanceof King){
                    return false;
                }
                return true;
            }
            return false;
        }



        for (var i = 1; i < 8; i++){
            if (! inBounds(row + i, col + i)){
                break;
            }
            if (ifEmpty(row + i, col + i)){
                possibleMoves.push(new Square (row + i, col + i));
            } else {
                if (ifEdible(row + i, col + i, player)){
                    possibleMoves.push(new Square (row + i, col + i));
                }
                break;
            }
        }

        for (var i = 1; i < 8; i++){
            if (! inBounds(row + i, col - i)){
                break;
            }
            if (ifEmpty(row + i, col - i)){
                possibleMoves.push(new Square (row + i, col - i));
            } else {
                if (ifEdible(row + i, col - i, player)){
                    possibleMoves.push(new Square (row + i, col - i));
                }
                break;
            }
        }

        for (var i = 1; i < 8; i++){
            if (! inBounds(row - i, col + i)){
                break;
            }
            if (ifEmpty(row - i, col + i)){
                possibleMoves.push(new Square (row - i, col + i));
            } else {
                if (ifEdible(row - i, col + i, player)){
                    possibleMoves.push(new Square (row - i, col + i));
                }
                break;
            }
        }

        for (var i = 1; i < 8; i++){
            if (! inBounds(row - i, col - i)){
                break;
            }
            if (ifEmpty(row - i, col - i)){
                possibleMoves.push(new Square (row - i, col - i));
            } else {
                if (ifEdible(row - i, col - i, player)){
                    possibleMoves.push(new Square (row - i, col - i));
                }
                break;
            }
        }

        return possibleMoves;
    }
}
