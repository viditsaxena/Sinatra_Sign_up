require 'bundler'
Bundler.require()


require "./models/signup"

require "./controllers/application_controller"
require "./controllers/welcome_controller"
require "./controllers/api/api_controller"
require "./controllers//api/signups_controller"


map ('/api/signups') { run SignupsController }
map ('/') { run WelcomeController }
