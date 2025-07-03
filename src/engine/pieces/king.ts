import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let location = board.findPiece(this);
        let possibleMoves = [];
        let i = 1;
        //diagonal moves
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

        if (location.row + i < 8) {
            possibleMoves.push(new Square(location.row + i, location.col));
        }
        if (location.row - i >= 0 ) {
            possibleMoves.push(new Square(location.row - i, location.col));
        }
        if (location.col + i < 8) {
            possibleMoves.push(new Square(location.row, location.col + i));
        }
        if (location.col - i >= 0 ) {
            possibleMoves.push(new Square(location.row, location.col - i));
        }



       // if (location.row + 1 < 8 && location.col +1 < 8){
         //   possibleMoves.push(new Square (location.row + i, location.col + i));
        //}


        return possibleMoves;
    }
}
