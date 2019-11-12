class Api::SamplesController < ApplicationController
    def index
        @samples = Sample.where(pack_id: params[:sample_pack_id])
    end
end
