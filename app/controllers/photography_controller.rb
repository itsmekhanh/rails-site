class PhotographyController < ApplicationController
  def index
    manager = FlickrManager.new
    photosets = manager.get_photosets("49585808@N08")
    @featured_set = photosets[0]
    @sets = photosets[1..-1]
  end

  def view
  end
end
