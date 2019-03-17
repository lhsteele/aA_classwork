class GraphNode 
  #creating a node should give us access to it's value and neighboring nodes 
  attr_accessor :value, :neighbors
  
  def initialize(value)
    @value = value 
    @neighbors = []
  end

  def []=(value)
    @neighbors << value 
  end

  def inspect
    @value.inspect
  end

  def bfs(starting_node, target_value)
    visited = []

    return self if self.value = target_value
    queue = [starting_node]

    until queue.empty?
      check = queue.shift 
      if !visited.include?(check)
        return check if check.value == target_value
        visited << check 
        queue.concat(check.neighbors)
      end
    end
    nil 
  end
  
end

a = GraphNode.new("a")
b = GraphNode.new("b")
c = GraphNode.new("c")
d = GraphNode.new("d")
e = GraphNode.new("e")
f = GraphNode.new("f")
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p a.bfs(self, "f")
