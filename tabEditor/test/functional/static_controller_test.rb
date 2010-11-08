require 'test_helper'

class StaticControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_select "a[href=/users/sign_in]", :text=>"Login"
    assert_select "a[href=/users/sign_up]", :text=>"Registrarse"
    assert_select "a[href=/crear]", :text=>"Crear Tablatura"
  end

end
