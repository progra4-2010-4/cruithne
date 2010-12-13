class Tab < ActiveRecord::Base
	belongs_to :user
	attr_accessible :title,:body,:privado
	validates_presence_of :body

end
