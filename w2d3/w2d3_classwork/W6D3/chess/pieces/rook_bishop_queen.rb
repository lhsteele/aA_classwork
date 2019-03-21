#require slideable.rb and piece.rb!!
class Rook < Piece 
  include Slideable 

  def move_dirs
    #just gets the constant array from the slideable module for the 
    horizontal_dirs
  end

end

class Bishop < Piece 
  include Slideable
  
  def move_dirs

  end
end


class Queen < Piece
  include Slideable
  
  def move_dirs
    
  end
end