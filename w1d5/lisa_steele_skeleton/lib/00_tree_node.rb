require "byebug"

class PolyTreeNode
  # attr_reader :value, :parent, :children
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

  def inspect
    @parent.inspect
    @child.inspect
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

  def add_child(child_node)
    child_node.parent = self 
  end

  def remove_child(child_node) 
    child_node.parent = nil 
    if !self.children.include?(child_node)
      raise "this is not an existing child"
    end
  end



  def dfs(target_value)
    return nil if self.nil?
    return self if self.value == target_value 

    self.children.each do |child|
      search_res = child.dfs(target_value)
      return search_res unless search_res.nil?
    end

    nil
  end

  def bfs(target_value)
    arr = [self]
    until arr.empty?
      check = arr.shift 
      return check if check.value == target_value
      arr.concat(check.children)
    end
    nil
  end
end

# n1 = PolyTreeNode.new("root1")
# n2 = PolyTreeNode.new("root2")
# n3 = PolyTreeNode.new("root3")
# p n3 

# n3.parent = n1 
# p n3 