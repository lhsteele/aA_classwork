require_relative "PolyTreeNode.rb"
require "byebug"

class KnightPathFinder 
  attr_reader :pos, :start_pos

  def initialize(pos)
    @pos = pos 
    @start_pos = PolyTreeNode.new(pos)
    @considered_positions = [@start_pos]
  end

  def inspect 
    {"root_node" => @root_node, "parent" => @parent}
  end

  def self.valid_moves(starting_pos)
    x, y = starting_pos 
    poss_moves = []
    possibilities = [[2, -1], [2, 1], [1, 2], [1, -2], [-2, 1], [-2, -1], [-1, -2], [-1, 2]]
    possibilities.each do |poss|
      pos_x, pos_y = poss 
      new_move = [(pos_x + x), (pos_y + y)]

      if new_move.first >= 0 && new_move.first <= 7 && new_move.last >= 0 && new_move.last <= 7
        if new_move.first >= x && new_move.last >= y
          poss_moves += [new_move] 
        end
      else 
        break 
      end
    end
    poss_moves
  end

  def new_move_positions(starting_node)
    starting_pos = starting_node.root_node
    poss_moves = KnightPathFinder.valid_moves(starting_pos).reject { |move| @considered_positions.include?(move) }
    #@considered_positions += poss_moves
    poss_moves 
  end
  
  def build_move_tree
    queue = [@start_pos]
    #queue = [start_pos.root_node]
    until queue.empty?
      current_node = queue.shift 
      
      poss_moves = new_move_positions(current_node)

      #I think I'm ending up with duplicates because of something in this loop
      #it seems to be adding on to the queue (line 56) before anything gets shifted off
      #not sure why as it shouldn't be generating new positions until line 49, which means
      #I should have exited the loop on lines 55-60
      poss_moves.each do |move|
        move_node = PolyTreeNode.new(move) 
        move_node.parent = current_node 
        queue << move_node
        p queue
        @considered_positions << move_node 
      end
    end
    @considered_positions 
  end

  def bfs(target_pos) #this is called on the root node 
    tar_x, tar_y = target_pos 
    build_move_tree
    arr = []
    #debugger 
    @considered_positions.each do |position|
      arr << position.root_node
    end
    p arr
    path = []
    until arr.empty?
     
      current_check = arr.shift 

      root_x, root_y = current_check

      if root_x == tar_x && root_y == tar_y
        path << current_check
        p path
        return #path 
      end
    end
    path.nil? ? nil : path 
  end

end

kpf = KnightPathFinder.new([0,1])
#kpf.build_move_tree
kpf.bfs([6, 7])


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

#[0, 1] 
#[2, 2]                        [1, 3]
#[4, 3] [3, 4]                 [2, 5]       
#[6, 4] [4, 6] [5, 5]          [3, 7]                        
#[7, 6] [6, 7]
              