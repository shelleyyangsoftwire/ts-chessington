import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        let player = this.player;

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



        // return the square in front of it
        let possibleMoves = [];
        for (var i = 1; i <=2; i++){
            for (var j = 1; j <=2; j++){
                if (i != j){

                    if (row + i < 8 && col + j < 8){
                        if (ifEdible(row + i, col + j, player) || ifEmpty(row + i, col + j)) {
                            possibleMoves.push(new Square(row + i, col + j));
                        }
                    }
                    if (row + i < 8 && col - j >= 0){
                        if (ifEdible(row + i, col - j, player) || ifEmpty(row + i, col - j)) {
                            possibleMoves.push(new Square(row + i, col - j));
                        }
                    }
                    if (row - i >= 0 && col + j < 8){
                        if (ifEdible(row - i, col + j, player) || ifEmpty(row - i, col + j)) {
                            possibleMoves.push(new Square(row - i, col + j));
                        }
                    }
                    if (row - i >= 0 && col - j >= 0){
                        if (ifEdible(row - i, col - j, player) || ifEmpty(row - i, col - j)) {
                            possibleMoves.push(new Square(row - i, col - j));
                        }
                    }
                }
            }
        }

        return possibleMoves;
    }
}
