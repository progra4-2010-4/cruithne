class Tab < ActiveRecord::Base
	belongs_to :user
	attr_accessible :title,:body,:privado
	validates_presence_of :body


	def self.getAll
	     x = []
	     Tab.all.each do |t|
		unless t.privado
			x << t
		end
	     end
	     t.paginate :per_page => 2,:page=>params[:page]
	end

end
