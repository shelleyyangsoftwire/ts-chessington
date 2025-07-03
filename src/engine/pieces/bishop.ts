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
        for (var i = 1; i < 8; i++){
            if (location.row + i < 8 && location.col +i < 8){
                possibleMoves.push(new Square (location.row + i, location.col + i));
            }
            if (location.row + i < 8 && location.col - i >= 0){
                possibleMoves.push(new Square (location.row + i, location.col - i));
            }
            if (location.row - i >= 0 && location.col +i < 8){
                possibleMoves.push(new Square (location.row - i, location.col + i));
            }
            if (location.row - i >= 0 && location.col - i >= 0){
                possibleMoves.push(new Square (location.row - i, location.col - i));
            }

        }
        return possibleMoves;
    }
}
