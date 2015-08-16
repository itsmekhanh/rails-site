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
    post = @client.posts(BLOG, :id=>id);

    if post['blog']
      return self.filterPost(post['posts'][0])
    else
      return nil
    end
  end

  def getPosts()
    blog = @client.posts(BLOG)
    return self.filterPosts(blog['posts'])
  end

  def filterPost(post)
    require 'rails/html/sanitizer'

    sanitizer = Rails::Html::FullSanitizer.new
    time = Time.at(post['timestamp'])

    data = {
        :id => post['id'],
        :type => post['type'],
        :format => post['format'],
        :timestamp => post['timestamp'],
        :date => time.strftime("%B %e, %Y"),
        :tags => post['tags'],
        :slug => post['slug']
    }

    case post['type']
      when "text"
        data[:body] = post['body']
        data[:title] = sanitizer.sanitize(post['title'])
      when "video"
        data[:body] = post['player'][2]['embed_code']
        data[:title] = sanitizer.sanitize(post['caption'])
        data[:thumbnail_url] = post['thumbnail_url']
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