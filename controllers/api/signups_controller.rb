class SignupsController < ApiController



  def signupParams
    @signup_params = @signup_params || JSON.parse(request.body.read.to_s)
  end

  get '/' do
    content_type :json
    Signup.all.to_json
  end

  post '/' do
    content_type :json
    signup = Signup.create(params[:signup] || signupParams)
    # signup.to_json
    Signup.all.to_json
  end

  delete '/:id' do
    content_type :json
    Signup.destroy(params[:id])
    halt 202
  end
end
