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

  def get_set_info(photoset_id)
    set_data = flickr.photosets.getInfo :photoset_id => photoset_id
    return set_data
  end

  def get_photos(photoset_id, page=1, per_set=500, size="b")
    data = flickr.photosets.getPhotos :photoset_id => photoset_id, :page => page, :per_page => per_set
    photos = []
    if data.flickr_type == 'photoset'
      data['photo'].each do |photo|
        photos << {
            'id'=>photo['id'],
            'secret'=>photo['secret'],
            'server'=>photo['server'],
            'farm'=>photo['farm'],
            'title'=>photo['title'],
            'image_url'=>self.getImageUrl(photo, size)
        }
      end
      return photos
    else
      return nil
    end
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