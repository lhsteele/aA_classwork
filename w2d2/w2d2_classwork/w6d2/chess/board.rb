require_relative "piece.rb"
require_relative "errors.rb"

class Board
  attr_reader :rows 

  STARTING_POSITIONS = [ [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7],
                         [1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7],
                         [6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7],
                         [7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7] ]

  def initialize 
    @rows = Array.new(8) { Array.new(8, nil) }
    @sentinel = NullPiece.new()
    STARTING_POSITIONS.each do |pos|
      self[pos] = Piece.new
    end
  end

  def [](pos)
    @rows[pos[0]][pos[1]]
  end

  def []=(pos, val)
    @rows[pos[0]][pos[1]] = val 
  end 

  def add_piece(piece, pos)
    #raise position not empty? 
    @rows[pos] = piece 
  end

  def move_piece(start_pos, end_pos)
    # begin 
      if self[start_pos].nil?
        raise NoPieceError.new("There is no piece in this position")
      elsif !valid_pos?(end_pos)
        raise InvalidMoveError.new("That is not a valid move")
      end
    # rescue NoPieceError || InvalidMoveError => error 
    #     puts error.message
    #     retry 
    # end
    self[start_pos], self[end_pos] = nil, self[start_pos]
  end

  def valid_pos?(end_pos)
    end_pos.all? { |i| i < 8 && i >= 0 } 
  end

end