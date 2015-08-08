class BlogController < ApplicationController


  def index
    manager = TumblrManager.new
    @blog = manager.getPosts
  end
end
