class User < ApplicationRecord
  has_secure_password validations: false

  validates_presence_of :email, :first_name, :last_name
  validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP

  before_validation :clean_attributes

  default_scope{ order(:created_at) }

  def self.tom
    find_by(email: "tprats108@gmail.com")
  end

  def tom?
    email == "tprats108@gmail.com"
  end

  private

  def clean_attributes
    self.email = email.strip.downcase if email.present?
  end
end
