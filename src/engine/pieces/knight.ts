import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let location = board.findPiece(this);
        let row = location.row;
        let col = location.col;
        // return the square in front of it
        let possibleMoves = [];
        for (var i = 1; i <=2; i++){
            for (var j = 1; j <=2; j++){
                if (i != j){
                    let thisSet = [];
                    if (row + i < 8 && col + j < 8){
                        possibleMoves.push(new Square (row + i, col + j));
                    }
                    if (row + i < 8 && col - j >= 0){
                        possibleMoves.push(new Square (row + i, col - j));
                    }
                    if (row - i >= 0 && col + j < 8){
                        possibleMoves.push(new Square (row - i, col + j));
                    }
                    if (row - i >= 0 && col - j >= 0){
                        possibleMoves.push(new Square (row - i, col - j));
                    }
                }
            }
        }

        return possibleMoves;
    }
}
