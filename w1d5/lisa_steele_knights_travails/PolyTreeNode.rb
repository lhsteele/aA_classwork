#to be a child, of a parent, you have to be able to move from the parent to the child 
#values in the trees will be positions [0,0]
#root node will be the starting pos
class PolyTreeNode 
  attr_reader :value, :parent, :children 
  #when you initialize a knight, will have to call PolyTreeNode.new(pos) and pass in the knight's starting position
  #this will be passed in as an argument when calling KnightPathFinder.new(pos)
  def initialize(pos)
    @root_node = pos 
    # @value = value 
    # @parent = parent
    # @children = children 
  end










end