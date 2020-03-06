@samples.each do |sample|
    json.set! sample.id do
        json.extract! sample, :name, :pack_id, :id, :key, :bpm
        json.liked(sample.liked_by_user?(current_user))
        json.fileUrl sample.file.service_url
    end
end