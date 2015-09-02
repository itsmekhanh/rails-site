class PhotographyController < ApplicationController
  def index
    manager = FlickrManager.new
    photosets = manager.get_photosets("49585808@N08")
    @featured_set = photosets[0]
    @sets = photosets[1..-1]
  end

  def view
    manager = FlickrManager.new
    @per_set = 8
    @photos = manager.get_photos(params[:id], 1, @per_set)

    if @photos.empty?
      redirect_to(index)
    end
  end
end
