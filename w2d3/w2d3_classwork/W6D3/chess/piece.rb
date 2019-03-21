class Piece 
  # attr_accessor :color, :board, :pos 
  attr_accessor :color, :pos, :symbol
  attr_reader :board
  
  def initialize(color, board, pos)
    @color = color 
    @board = board
    @pos = pos 
    @symbol = nil
    get_symbol
  end

  def get_symbol
    #put this in each subclass instead with symbol.colorize(@color) and replace with to_s method to print out colored symbol
    case self.class 
    when Pawn
      self.symbol = "♙"
    when Rook 
      self.symbol = "♖"
    when Knight 
      self.symbol = "♘"
    when Bishop
      self.symbol = "♗"
    when Queen 
      self.symbol = "♕"
    when King 
      self.symbol = "♔"
    end
  end

  def inspect 
    @type.inspect 
  end

  #should be inside module
  def moves 
    #possible array of positions to move to?
    if self.is_a?(RookBishopQueen)
      self.get_moves 
    end
  end
end

class NullPiece < Piece 
  include Singleton
end

