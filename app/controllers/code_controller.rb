class CodeController < ApplicationController

  def index
    require 'nokogiri'

    manager = TumblrManager.new
    @projects = manager.getPosts "projects", false
    @projects.each_with_index do |project, index|
      html = Nokogiri::HTML(project[:body])
      p = html.css("p.text").first
      @projects[index][:body] = p.to_html
    end
  end

  def view
    require 'nokogiri'
    manager = TumblrManager.new
    if(params[:id])
      @project = manager.getPost(params[:id])
    else
      redirect_to(index)
    end
  end

end
