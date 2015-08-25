class PhotographyController < ApplicationController
  def index
    manager = FlickrManager.new
    @photosets = manager.get_photosets("49585808@N08")
    puts "what"
  end

  def view
  end
end
