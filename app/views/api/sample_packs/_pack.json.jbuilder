json.set! @sample_pack.id do
    json.extract! sample_pack, :name, :description, :id
end