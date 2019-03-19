require_relative "PolyTreeNode.rb"
require "byebug"

#questions:
#I'm not sure where the root_node attribute has come from?
#The solutions list it under attr_accessor, but is it right, where I've put it in initialize?

#the error that I'm getting - my build_move_tree isn't being created properly?
#"undefined method 'bfs' for [0, 0]:Array"
# printing poss_moves on line 66 shows I'm not 

#I didn't understand the instructions that the instance was to be initialized in build_move_tree
# going forward, how can I work to understand these types of instructions better?

class KnightPathFinder 
  attr_reader :pos, :start_pos
  attr_accessor :root_node

  #I had created a @pos and @start_pos, which were doing the same thing but 
  # I wasn't using @pos (which was storing the position passed in)
  def initialize(start_pos)
    #@pos = pos 
    @start_pos = start_pos
    @considered_positions = [@start_pos]
    @root_node 

    #build_move_tree should be called here 
    build_move_tree
  end


  #here, like in the solution, I am generating only positions (not instances)
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
      end
    end
    poss_moves
  end

  def new_move_positions(starting_pos)
    KnightPathFinder.valid_moves(starting_pos).reject { |move| @considered_positions.include?(move) }
  end
  
  def build_move_tree
    #they didn't instantiate a new instance of this class until here.
    self.root_node = PolyTreeNode.new(start_pos)
    queue = [root_node]
 
    until queue.empty?

      current_node = queue.shift 
      current_value = current_node.root_node
   
      poss_moves = new_move_positions(current_value)
      print poss_moves
      poss_moves.each do |move|
        move_node = PolyTreeNode.new(move) 
        move_node.parent = current_node 
        queue << move_node
      end
    end
  end


  #had the build_move_tree in here which is wrong
  #arr should be set with self inside , not an empty array
  def bfs(target_pos) #this is called on the root node 
    tar_x, tar_y = target_pos 

    arr = [self]

    until arr.empty?
      current_check = arr.shift 
      return current_check if current_check.root_node == target_pos
      arr.concat(current_check.children)
    end
    nil
  end

  def find_path(end_pos)
    p @start_pos
    end_node = @start_pos.bfs(end_pos)

    trace_path_back(end_node)
  end

  def trace_path_back(end_node)
    path = []
    current_node = end_node 
    until current_node.nil?
      path.unshift(end_node.parent)
      current_node = current_node.parent 
    end
    p nodes 
  end


end

kpf = KnightPathFinder.new([0,0])
#kpf.find_path([6, 7])


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
              