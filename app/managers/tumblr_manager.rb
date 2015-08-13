class TumblrManager
  BLOG="khanhtesting.tumblr.com"

  def initialize()
    Tumblr.configure do |config|
      config.consumer_key = ENV['TUMBLR_KEY']
      config.consumer_secret = ENV['TUMBLR_SECRET']
    end

    @client = Tumblr::Client.new
  end

  def getPost(id)

  end

  def getPosts()
    blog = @client.posts(BLOG)
    return self.filterPosts(blog['posts'])
  end

  def filterPost(post)
    require 'htmlentities'
    data = {
        :id => post['id'],
        :type => post['type'],
        :format => post['format'],
        :timestamp => post['timestamp'],
        :tags => post['tags']
    }

    case post['type']
      when "text"
        data[:body] = post['body']
      when "video"
        data[:body] = post['player'][2]['embed_code']
        data[:caption] = post['caption']
        data[:thumbnail_url] = post['thumbnail_url']
      when "photo"
        data[:body] = post['photos']['alt_sizes'][0]['url']
        data[:caption] = post['caption']
    end

    return data
  end

  def filterPosts(posts)
    data = []
    posts.each do |post|
      data << self.filterPost(post)
    end
    return data
  end
end