class BlogController < ApplicationController
  @tumblrManager

  def initialize()
    @tumblrManager = TumblrManager.new
  end

  def index
    @posts = @tumblrManager.getPosts
    @blah = Rails.root
  end
end
