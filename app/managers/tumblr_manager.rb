class TumblrManager
  BLOG="khanhluc2.tumblr.com"

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

  def getPosts(tag=nil, include_images=true)
    blog = @client.posts(BLOG, :tag=>tag)
    return self.filterPosts(blog['posts'], include_images)
  end

  def filterPost(post, include_images=true)
    require 'rails/html/sanitizer'
    require 'nokogiri'

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

        html = Nokogiri::HTML(post['body'])
        img = html.css("img").first
        data[:main_image] = img['src']

        if !include_images
          html.search(".//img").remove
          data[:body] = html.to_html
        end

      when "video"
        data[:body] = post['player'][2]['embed_code']
        data[:title] = sanitizer.sanitize(post['caption'])
        data[:thumbnail_url] = post['thumbnail_url']
        data[:main_image] = post['thumbnail_url']
    end

    return data
  end

  def filterPosts(posts, include_images = true)
    data = []
    posts.each do |post|
      data << self.filterPost(post, include_images)
    end
    return data
  end
end