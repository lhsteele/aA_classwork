require_relative "PolyTreeNode.rb"
require "byebug"

class KnightPathFinder 
  attr_reader :pos, :start_pos

  def initialize(pos)
    @pos = pos 
    @considered_positions = [pos]
    @start_pos = PolyTreeNode.new(pos)
    #self.build_move_tree
  end

  def self.valid_moves(pos)
    x, y = pos 
    poss_moves = []
    possibilities = [[2, -1], [2, 1], [1, 2], [1, -2], [-2, 1], [-2, -1], [-1, -2], [-1, 2]]
    possibilities.each do |poss|
      new_move = [(poss[0] + x), (poss[1] + y)]
      #line 21 is wordy and I think I can use spaceship operator here?
      #will refactor if time
      if new_move.first >= 0 && new_move.first <= 7 && new_move.last >= 0 && new_move.last <= 7
        poss_moves << new_move
      end
    end
    poss_moves
  end

  def new_move_positions(pos)
    poss_moves = KnightPathFinder.valid_moves(pos).reject { |move| @considered_positions.include?(move) }
    @considered_positions += poss_moves
    @considered_positions
  end

  def build_move_tree(target_pos)
    #use new_move_positions, which takes in a starting position
    #Use BFS and a queue to process in FIFO order
    #start with a root which will be the starting positions, @pos
    #iterate through the @considered positions array ??
    tar_x, tar_y = target_pos 
    root = self.pos 
    arr = @considered_positions
    path = []
    until arr.empty?
      #the thing I'm going to be checking is if the next position in the arr == target pos.
      #if it doesn't, then I will call new_move_positions on the current position and add to the end of the arr
      current_check = arr.shift 
      #path << current_check
      return current_check if current_check[0] == tar_x && current_check[1] == tar_y 
      arr.concat(new_move_positions(current_check))
      #path
    end
    nil 
  end

end

kpf = KnightPathFinder.new([0,0])
# KnightPathFinder.valid_moves([0, 1])
kpf.new_move_positions([0,0])
p kpf.build_move_tree([3, 4])

# a knight moves 2 sq horizontally, then 1 vertically
#or
# 2 sq vertically, then 1 horizontally

#if you start at [7, 1]
#possible next steps are: 
# [0, 1] => [2, 0][2, 2][1, 3]
#possible scenarios are:
#[x + 2, y - 1][x + 2, y + 1][x + 1, y + 2][x + 1, y - 2]
#[x - 2, y + 1][x - 2, y - 1][x - 1, y - 2][x - 1, y + 2]

#   0 1 2 3 4 5 6 7
# 0 x K x x x x K x
# 1 x x x x x x x x
# 2 x x x x x x x x
# 3 x x x x x x x x
# 4 x x x x x x x x
# 5 x x x x x x x x
# 6 x x x x x x x x
# 7 x K x x x x K x