class TumblrManager
  BLOG="khanhluc.tumblr.com"

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
    @client.posts(BLOG)
  end
end