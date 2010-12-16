class Tab < ActiveRecord::Base
	belongs_to :user
	attr_accessible :title,:body,:privado
	validates_presence_of :body
	validates_presence_of :title
	before_validation :privatizar
	
	def privatizar
		if self.privado.nil?
			self.privado = false
		end
	end
	def self.custom_search(id,user_id,search,page)
		unless search.nil?
			     paginate :per_page => 1, :page => page,
			     :conditions => ['title like ?', "%#{search}%"],
			     :order => 'created_at DESC'
		end
		
		if search.blank? and not user_id.nil?
		     User.find(user_id).tabs.not_private().paginate :per_page => 1, :page => page,
			     :conditions => ['user_id like ?', "%#{user_id}%"],
			     :order => 'created_at DESC'
		else
		     not_private().paginate :per_page => 1, :page => page,
			     :order => 'created_at DESC'
		end
	end

	def self.not_private()
		tabs = all
		x = []
		tabs.each do |t|
		    unless t.privado
			x << t
		    end
		end
		x
	end
end
