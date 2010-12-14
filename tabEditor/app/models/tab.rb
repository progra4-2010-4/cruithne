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
	def self.custom_search(tabs,id,user_id,search,page)
		if user_id.nil?
	          tabs.paginate :per_page => 1, :page => page,
		     :conditions => ['title like ?', "%#{search}%"],
		     :order => 'created_at DESC'
		elsif search.blank?
			tabs.paginate :per_page => 1, :page => page,
			     :conditions => ['user_id like ?', "%#{user_id}%"],
			     :order => 'created_at DESC'
		else
			tabs.paginate :per_page => 1, :page => page,
			     :order => 'created_at DESC'
		end
	end

	def self.not_private(tabs)
		x = []
		tabs.each do |t|
		    unless t.privado
			x << t
		    end
		end
		x
	end
end
