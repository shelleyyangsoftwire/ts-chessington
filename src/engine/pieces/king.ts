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
        // return the square in front of it
        let possibleMoves: Square[] = [];
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

        function pushIfValid (x: number, y: number, me: number){
            if (inBounds(x, y)){
                if (ifEmpty(x, y) || ifEdible(x, y, player)){
                    possibleMoves.push(new Square(x, y));

                }
            }

        }
        // 1 just do not want to keep changing it

        //diagonal moves
       if (location.row + 1 < 8 && location.col +1 < 8){
            pushIfValid(location.row + 1, location.col + 1, player);
       }


        if (location.row + 1 < 8 && location.col - 1 >= 0){
            pushIfValid(location.row + 1, location.col - 1, player);
        }
        if (location.row - 1 >= 0 && location.col +1 < 8){
            pushIfValid(location.row - 1, location.col + 1, player);
        }
        if (location.row - 1 >= 0 && location.col - 1 >= 0){
            pushIfValid(location.row - 1, location.col - 1, player);
        }



        if (location.row + 1 < 8) {
            pushIfValid(location.row + 1, location.col, player);
        }
        if (location.row - 1 >= 0 ) {
            pushIfValid(location.row - 1, location.col, player);
        }
        if (location.col + 1 < 8) {
            pushIfValid(location.row, location.col + 1, player);
        }
        if (location.col - 1 >= 0 ) {
            pushIfValid(location.row, location.col - 1, player);
        }

        return possibleMoves;
    }
}
