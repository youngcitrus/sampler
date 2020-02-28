class Api::PackLikesController < ApplicationController
    def create
        @pack_like = PackLike.new(pack_like_params)
        if @pack_like.save
        else
            render json: @pack_like.errors.full_messages, status: 422
        end
    end

    private
    def pack_like_params
        params.require(:pack_like).permit(:user_id, :pack_id)
    end
end
