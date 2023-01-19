// Represents a chess game
class Game {}
// A chess piece
class Piece {
    protected position: Position // 3
    constructor(
    private readonly color: Color, // 4
    file: File,
    rank: Rank
    ) {
    this.position = new Position(file, rank)
    }
   }
   
// A set of coordinates for a piece
class Position {
    constructor(
    private file: File, // 2
    private rank: Rank
    ) {}
   }


class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

type Color = 'Black' | 'White'
type Files = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 // 1





