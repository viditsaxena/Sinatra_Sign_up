require 'bundler'
Bundler.require()



require "./controllers/application_controller"
require "./controllers/welcome_controller"



map ('/') { run WelcomeController }
