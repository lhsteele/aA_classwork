module Slideable 
  HORIZONTAL_DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  DIAGONAL_DIRS = [[1, 1], [1, -1], [-1, -1], [-1, 1]]

  def horizontal_dirs 
    HORIZONTAL_DIRS
  end

  def diagonal_dirs 
    DIAGONAL_DIRS
  end

  #moves is an array that is going to return the answer from grow_unblocked_moves array method
  #pass in each array constant into the a block, 
  #move_dirs.each do |dx, dy| 
  #   moves += grow_unblocked_moves(dx, dy)
  # end 
  def moves 
    # if self.is_a?(Rook)
    #   move_dirs(horizontal_dirs)
    # elsif self.is_a?(Queen)
    #   move_dirs(horizontal_dirs, diagonal_dirs)
    # elsif self.is_a?(Bishop)
    #   move_dirs(diagonal_dirs)
    # end
  end

  





  def move_dirs
    if self.type == "rook"
      horiz_vert
    elsif self.type == "bishop"
      diagonal
    else 
      horiz_vert + diagonal
    end
  end
  
  def horiz_vert
    start_x, start_y = self.pos
    possible_squares = []

    7.times { |x| possible_squares << [x, start_y]}
    7.times { |y| possible_squares << [start_x, y]}

    possible_squares.reject { |square| square == self.pos }.uniq 
  end

  def diagonal 
    start_x, start_y = self.pos
    possible_squares = []
    
    7.times do |x| 
      possible_squares << [start_x + x, start_y + x]
      possible_squares << [start_x - x, start_y - x]
      possible_squares << [start_x + x, start_y - x]
      possible_squares << [start_x - x, start_y + x]
    end

    possible_squares.select { |square| square[0] >= 0 && square[0] <= 7 && square[1] >= 0 && square[1] <= 7}.reject { |square| square == self.pos }.uniq 
  end

end

