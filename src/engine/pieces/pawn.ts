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
        if (this.player == Player.WHITE){
            possibleMoves.push( new Square(location.row + 1, location.col));
            if (location.row == 1){
                possibleMoves.push( new Square(location.row + 2, location.col));
            }
        } else if (this.player == Player.BLACK) {
            possibleMoves.push( new Square(location.row - 1, location.col));
            if (location.row == 6){
                possibleMoves.push( new Square(location.row - 2, location.col));
            }
        }

        return possibleMoves;
    }
}

