class Api::SamplePacksController < ApplicationController
    def index
        @sample_packs = SamplePack.all
        debugger
    end

    def show
        @sample_pack = SamplePack.find(params[:id])
    end
end
