require 'rubygems'
require 'sinatra'

get "/" do
	send_file "about.html"
end

get "/idea1" do
	send_file "idea1.html"
end
get "/idea2" do
	send_file "WikiHonduras.html"
end
get "/idea3" do
	send_file "TabEditor.html"
end
