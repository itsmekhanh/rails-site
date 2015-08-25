require 'flickraw'

class FlickrManager

  def initialize
    FlickRaw.api_key = ENV['FLICKR_KEY']
    FlickRaw.shared_secret = ENV['FLICKR_SECRET']
  end

  def get_photosets(user_id)
    photosets =  flickr.photosets.getList :user_id => user_id
  end
end