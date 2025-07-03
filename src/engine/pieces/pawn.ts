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
        var possibleMoves = [];
        var thisMove = {};
        if (this.player == Player.WHITE){
            thisMove = new Square(location.row + 1, location.col);
        } else if (this.player == Player.BLACK) {
            thisMove = new Square(location.row - 1, location.col);
        }
        possibleMoves.push(thisMove);
        return possibleMoves;
    }
}

