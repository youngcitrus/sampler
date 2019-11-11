json.set! @sample_pack.id do
    json.extract! sample_pack, :name, :description
    @sample_pack.samples.each do |sample|
        json.samples do
            json.set! sample.id do 
                json.extract! sample, :name, :pack_id, :file
            end
        end
    end
end