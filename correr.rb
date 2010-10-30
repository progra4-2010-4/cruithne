require 'rubygems'
require 'sinatra'
require 'dm-core'
require 'dm-migrations'
enable :sessions

class User
	include DataMapper::Resource
	property :id,Serial
	property :unico, String
	property :name, String, :required=>false
	property :password, String, :required=>false
	has n, :links
end

helpers do
	def create_user
		j = create_alphnumber
		begin
			u = User.first(:unico=>j)
			j = create_alphnumber
		end until u.nil?
		User.create :unico=>j	
		j
	end
	def create_alphnumber
		j = ""
		num = (1...9).to_a + ('a'..'z').to_a
		for i in 0..12	
			 j << num[rand(34)]
		end
		j	
	end
end



class Link
	include DataMapper::Resource
	property :id,Serial
	belongs_to :user
end


configure do
           DataMapper.setup(:default, "sqlite:///#{Dir.pwd}/db.sqlite3")
           DataMapper.auto_upgrade!
end

get "/" do
	erb :about
end

get "/idea1" do
	erb :idea1
end
get "/idea2" do
	erb :WikiHonduras
end
get "/idea3" do
	erb :TabEditor
end

get "/pagina1" do
	erb :where_index
end

get "/user/create" do
	@nuevo = User.first(:unico=>create_user)
	erb :new_user
end

post "/user/create/:id" do |id|
	u = User.first(:unico=>id)
	u.name = params["username"]
	u.password = params["password"]
	u.save
	redirect "/user/#{id}"
end

get "/user/:id" do |id|
	erb :user
end
