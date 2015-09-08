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
    @photos = manager.get_photos(params[:id], 1, @per_set*2)
    @url = photography_get_url(params[:id])
    @thumbnails = manager.get_photos(params[:id], 1, 500, "m")

    if @photos.empty?
      redirect_to(index)
    end
  end

  def get
    if request.xhr?
      manager = FlickrManager.new
      @per_set = 8

      begin
        @photos = manager.get_photos(params[:id], params[:page], @per_set)
      rescue
        @photos = []
      end
      render json: @photos
    else
      redirect_to(index)
    end
  end
end
