class SiteController < ApplicationController
  def home
    manager = TumblrManager.new
    @projects = manager.getPosts("projects", true, 3)
  end

  def contact
  end
end
