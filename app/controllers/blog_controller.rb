class BlogController < ApplicationController

  def index
    manager = TumblrManager.new
    @posts = manager.getPosts "blog"
  end

  def post
    if params[:id]
      manager = TumblrManager.new
      @post = manager.getPost(params[:id])
    else
      redirect_to(index)
    end
  end

end
