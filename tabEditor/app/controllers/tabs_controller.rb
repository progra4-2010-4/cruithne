class TabsController < ApplicationController
  def show
	@tab = Tab.find(params[:id])
  end

  def index
	@tabs = Tab.all
  end

  def new
	@tab = Tab.new
  end

  def my

  end

  def edit
	 @tab = Tab.find(params[:id])
  end
  def create
	 @tab = Tab.new(params[:tab])
         @tab.user_id = current_user.id if user_signed_in?	
	if @tab.save
	    redirect_to tab_path @tab
	else
	    render [ :action => "new"]
	end
  end

  def update
	@tab = Snippet.find params[:id]
	if @tab.update_attributes params[:snippet]
	   redirect_to tab_path @tab
	else
	   render :edit
	end
  end
end
