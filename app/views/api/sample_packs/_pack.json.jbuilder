json.set! @sample_pack.id do
    json.extract! sample_pack, :name, :description, :id
    json.fileUrls sample_pack.files.map{|file| url_for(file)}
end