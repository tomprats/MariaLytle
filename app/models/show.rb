class Show < ApplicationRecord
  validates_presence_of :date, :venue

  default_scope{ order(:date) }
end
