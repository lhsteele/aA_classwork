class Employee 
  attr_reader :name, :title, :salary, :boss

  def initialize(name, title, salary, boss)
    @name = name
    @title = title 
    @salary = salary 
    @boss = boss
    add_to_boss
  end

  def bonus(multiplier)
    self.salary * multiplier 
  end

  def add_to_boss
    unless self.boss.nil?
        self.boss.subordinates << self
    end
  end

end

class Manager < Employee 
  attr_reader :subordinates

  def initialize(name, title, salary, boss=nil)
    super 
    @subordinates = []
  end

  def subordinates_salaries 
    total_salary = 0
    self.subordinates.each { |sub| total_salary += sub.salary }
    total_salary
  end

  def bonus(multiplier)
    total_salary = 0
    
    self.subordinates.each do |subordinate|
      if subordinate.is_a?(Manager)
        total_salary += subordinate.subordinates_salaries
      end
      total_salary += subordinate.salary 
    end
    
    total_salary * multiplier
  end

end

ned = Manager.new("Ned", "Founder", 1000000)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
shawna = Employee.new("Shawna", "TA", 12000, darren)
david = Employee.new("David", "TA", 10000, darren)