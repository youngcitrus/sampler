class Api::SampleLikesController < ApplicationController
    def create
        @sample_like = SampleLike.new(sample_like_params)
        if @sample_like.save
        else
            render json: @sample_like.errors.full_messages, status: 422
        end
    end

    def destroy
        user_id = params["sample_like"]["user_id"].to_i
        sample_id = params["sample_like"]["sample_id"].to_i
        @sample_like = SampleLike.find_by(user_id: user_id, sample_id: sample_id)

        if @sample_like.destroy
        else
            render json: @sample_like.errors.full_messages, status: 422
        end
    end

    private
    def sample_like_params
        params.require(:sample_like).permit(:user_id, :pack_id)
    end

end
