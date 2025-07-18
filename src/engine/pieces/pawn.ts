import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

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


        function inBounds(x: number, y: number){
            if (x < 0 || x > 7 || y < 0 || y > 7){
                return false;
            }
            return true;
        }
        function ifEmpty(x: number, y:number){
            if (!inBounds(x, y)){
                return false;
            }
            var thisSquare = new Square(x, y);
            if (board.getPiece(thisSquare) == undefined){
                return true;
            }
            return false;
        }

        function ifEdible (x: number, y: number, me: number ){
            if (!inBounds(x, y)){
                return false;
            }
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



        if (this.player == Player.WHITE){
            if (ifEmpty(row + 1, col)){
                possibleMoves.push( new Square(location.row + 1, location.col));
                if (location.row == 1 && ifEmpty(row + 2, col)){
                    possibleMoves.push( new Square(location.row + 2, location.col));
                }
            }
            if (ifEdible(row + 1, col + 1, 0)){
                possibleMoves.push( new Square(row + 1, col + 1));
            }
            if (ifEdible(row + 1, col - 1, 0)){
                possibleMoves.push( new Square(row + 1, col - 1));
            }

        } else if (this.player == Player.BLACK) {
            if (ifEmpty(row - 1, col)) {
                possibleMoves.push(new Square(location.row - 1, location.col));
                if (location.row == 6 && ifEmpty(row -2, col)) {
                    possibleMoves.push(new Square(location.row - 2, location.col));
                }
            }
            if (ifEdible(row - 1, col + 1, 1)){
                possibleMoves.push( new Square(row - 1, col + 1));
            }
            if (ifEdible(row - 1, col - 1, 1)){
                possibleMoves.push( new Square(row - 1, col - 1));
            }
        }

        return possibleMoves;
    }
}

