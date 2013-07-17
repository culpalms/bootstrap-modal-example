class Job < ActiveRecord::Base
  attr_accessible :comment, :tag, :title
end
