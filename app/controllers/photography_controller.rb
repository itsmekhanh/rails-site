class PhotographyController < ApplicationController
  def index
    manager = FlickrManager.new
    photosets = manager.get_photosets("49585808@N08")
    @featured_set = photosets[0]
    @sets = photosets[1..-1]
  end

  def view
    manager = FlickrManager.new
    photos = manager.get_photos(params[:id])

    if !photos.empty?

    else
      redirect_to(index)
    end
  end
end
