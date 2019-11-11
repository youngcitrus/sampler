@sample_packs.each do |sample_pack|
    json.set! sample_pack.id do
        json.extract! sample_pack, :name, :description
    end
end
