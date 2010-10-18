require 'rubygems'
require 'sinatra'
require 'heroku'

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
