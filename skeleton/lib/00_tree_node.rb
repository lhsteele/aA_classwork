class PolyTreeNode
  attr_reader :value, :parent, :children
  def initialize(value)
    @value = value
    @parent = nil 
    @children = []
  end

  def parent 
    @parent 
  end

  def children 
    @children 
  end

  def value
    @value
  end

  # def inspect
  #   @parent.inspect
  #   @child.inspect
  # end

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
  #instance.parent = new_node 
  #if new_node is nil it will return 
  #if not, and it's current parent isn't nil, then it will delete itself
  #from it's current parent's list of children
  #now detached from current parent
  #set it's new parent to be the input new_node 
  #add itself to it's new parent's list of children

  #instance.add_child(child_node)
  #child.parent = instance
  def add_child(child_node)
    child_node.parent = self 
  end

  def remove_child(child_node) 
    child_node.parent = nil 
    if !self.children.include?(child_node)
      raise "this is not an existing child"
    end
  end
  #what's happening
  #when I call parent = on an instance, I'm trying to 
  #set it's parent value to be the node passed in
  #instance.parent = (node)
  #if instance.parent == nil, instance.parent = node
  #node.children will now include instance if not already there 

  #reassigning
  #instance.parent =

 
end