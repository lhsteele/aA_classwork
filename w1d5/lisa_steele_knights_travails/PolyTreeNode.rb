#to be a child, of a parent, you have to be able to move from the parent to the child 
#values in the trees will be positions [0,0]
#root node will be the starting pos
class PolyTreeNode 
  attr_accessor :value, :parent, :children, :root_node
  #when you initialize a knight, will have to call PolyTreeNode.new(pos) and pass in the knight's starting position
  #this will be passed in as an argument when calling KnightPathFinder.new(pos)
  def initialize(pos)
    @root_node = pos 
    #@value = value 
    @parent = nil 
    @children = []
  end

  def parent=(node)
    if node.nil?
      @parent = nil 
      return 
    end

    if @parent != nil 
      siblings = @parent.children 
      siblings.delete(self)
    end
    @parent = node 

    node.children << self if !node.children.include?(self)
  end

  def add_child(child)
    child_node.parent = self 
  end

  def remove_child(child_node)
    child_node.parent = nil 
    if !self.children.include?(child_node)
      raise "this is not an existing child"
    end
  end

end