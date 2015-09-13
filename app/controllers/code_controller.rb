class CodeController < ApplicationController

  def index
    manager = TumblrManager.new
    @projects = manager.getPosts "projects", false
  end

end
