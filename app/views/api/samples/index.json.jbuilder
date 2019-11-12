@samples.each do |sample|
    json.set! sample.id do
        json.extract! sample, :name, :pack_id, :id
        json.fileUrl sample.file.service_url
    end
end