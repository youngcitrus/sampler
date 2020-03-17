class Api::LikedSamplesController < ApplicationController
    def index
        @liked_samples = current_user.liked_samples
    end
end
