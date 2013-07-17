class JobsController < ApplicationController

  def index
    @jobs = Job.all
  end

  def new
    @job = Job.new
  end

  def create
    @job = Job.new(params[:job])

    respond_to do |format|
      if @job.save
        format.js { flash.now[:notice] = 'Thank you for submitting your comment'}
      else
        format.js { flash[:error] = @job.errors.full_messages.join("<br/>") }
      end
    end
  end

end
