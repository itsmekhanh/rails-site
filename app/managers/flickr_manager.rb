require 'flickraw'

class FlickrManager

  def initialize
    FlickRaw.api_key = ENV['FLICKR_KEY']
    FlickRaw.shared_secret = ENV['FLICKR_SECRET']
  end

  def get_photosets(user_id)
    photosets =  flickr.photosets.getList :user_id => user_id
    sets = []

    photosets.each do |set|
      sets << {
                :id=>set['id'],
                :photos=>set['photos'],
                :videos=>set['videos'],
                :title=>set['title'],
                :description=>set['description'],
                :cover_image=>getImageUrl(set)
      }
    end
    return sets
  end

  def getImageUrl(data, size="b")
    id = data["id"]
    farm = data["farm"]
    secret = data["secret"]
    server = data["server"]

    if data.flickr_type == 'photoset'
      id = data["primary"]
    end

    return "https://farm#{farm}.staticflickr.com/#{server}/#{id}_#{secret}_#{size}.jpg"
  end
end