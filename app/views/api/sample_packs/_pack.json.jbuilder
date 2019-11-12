json.set! @sample_pack.id do
    json.extract! sample_pack, :name, :description, :id
    json.photoUrl sample_pack.cover_art.service_url
    json.demoUrl sample_pack.demo.service_url
end