class TabsController < ApplicationController
  def show
	@tab = Tab.find(params[:id])
  end

  def index
	@tabs = Tab.all.paginate :per_page => 1,:page=>params[:page]
  end

  def new
	@tab = Tab.new
  end

  def my
	@tabs = current_user.tabs.all.paginate :per_page => 1,:page=>params[:page]
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
	    flash[:errors] = "Please fill all required fields"
	    redirect_to new_tab_path
	end
  end

  def update
	@tab = Tab.find params[:id]
	if @tab.update_attributes params[:tab]
	   redirect_to tab_path @tab
	else
	   render :edit
	end
  end
 
  def search

  end

 def destroy
	@tab = Tab.find params[:id]
	@tab.destroy
	flash[:notice] = "removed"
        redirect_to tabs_path 
 end
end
