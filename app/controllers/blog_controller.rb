class BlogController < ApplicationController
  include BlogHelper

  def index
    manager = TumblrManager.new
    @posts = manager.getPosts
  end
end
