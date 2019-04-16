require "colorize"
require_relative "board.rb"
require_relative "cursor.rb"
require "byebug"

#bottom left = black  [7, 0]
#top right = black    [0, 7]
#top left = white     [0, 0]
#bottom right = white [7, 7]

# puts "This is light blue with red background".colorize(:color => :light_blue, :background => :red)

class Display
  attr_reader :board, :cursor

  def initialize
    @board = Board.new
    @cursor = Cursor.new( [0,0], @board )
  end
  
  def render 
    self.board.rows.each.with_index do |row, idx_x|
      row.each.with_index do |space, idx_y|
        square_color = board_pattern(idx_x, idx_y)

        if space.nil? 
          print "    ".colorize(:background => square_color)
        else  
          if self.cursor.cursor_pos == [idx_x, idx_y] && self.cursor.selected
            print "#{space.inspect}\s".colorize(:color => :red, :background => square_color)
          elsif self.cursor.cursor_pos == [idx_x, idx_y]
            print "#{space.inspect}\s".colorize(:color => :blue, :background => square_color)
          else
            print "#{space.inspect}\s".colorize(:background => square_color)
          end
        end
        
      end
      puts "\n"
    end
  end

  def board_pattern(x, y)
    if x.even? && y.odd?
      :black
    elsif x.odd? && y.even?
      :black
    else
      :white
    end
  end 

  def get_move
    while true 
      self.render
      self.cursor.get_input 
      system "clear"
    end
  end
end

p Display.new.get_move