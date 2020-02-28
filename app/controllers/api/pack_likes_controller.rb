class Api::PackLikesController < ApplicationController
    def create
        @pack_like = PackLike.new(pack_like_params)
        if @pack_like.save
        else
            render json: @pack_like.errors.full_messages, status: 422
        end
    end

    def destroy
        user_id = params["pack_like"]["user_id"].to_i
        pack_id = params["pack_like"]["pack_id"].to_i
        # @pack_like = PackLike.where("user_id = :user_id and pack_id = :pack_id", {user_id: user_id, pack_id: pack_id})[0]
        # .where returns an array like object ^ 
        @pack_like = PackLike.find_by(user_id: user_id, pack_id: pack_id)
        
        if @pack_like.destroy
        else
            render json: @pack_like.errors.full_messages, status: 422
        end
    end

    private
    def pack_like_params
        params.require(:pack_like).permit(:user_id, :pack_id)
    end
end
