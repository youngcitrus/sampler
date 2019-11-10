# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  name            :string           not null
#

class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :username, :email, :session_token, uniqueness: true

    attr_reader :password

    before_validation :ensure_session_token

    #associations go here

    has_one_attached :profile_photo

    def self.find_by_credentials(input, password)
        user = User.find_by(username: input);
        user ||= User.find_by(email: input);
        if user && user.is_password?(password)
          user
        else
          nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

end
