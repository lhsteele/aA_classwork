require "colorize"
require_relative "board.rb"
require_relative "cursor.rb"

class Display
  attr_reader :board, :cursor

  def initialize
    @board = Board.new
    @cursor = Cursor.new( [0,0], @board )
  end
  
  def render 
    self.board.rows.each.with_index do |row, idx_x|
      row.each.with_index do |space, idx_y|
        if self.cursor.cursor_pos == [idx_x, idx_y]
          puts "#{space.blue}\s"
        end
        puts "#{space}\s"
      end
      puts "\n"
    end
  end


end

p Display.new.render