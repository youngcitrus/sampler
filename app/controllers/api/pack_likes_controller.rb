class Api::PackLikesController < ApplicationController
    private
    def user_params
        params.require(:pack_like).permit(:user_id, :pack_id)
    end
end
