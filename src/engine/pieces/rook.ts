import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let location = board.findPiece(this);
        // return the square in front of it
        let possibleMoves = [];
        for (var i = 0; i < 8; i ++){
            if (i != location.col){
                possibleMoves.push(new Square(location.row, i));
            }
            if (i != location.row) {
                possibleMoves.push(new Square(i, location.col));
            }
        };
        return possibleMoves;
    }
}
