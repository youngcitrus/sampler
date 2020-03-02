json.set! @sample_pack.id do
    json.extract! sample_pack, :name, :description, :id, :liked_users
    json.liked(@sample_pack.liked_by_user?(current_user))
    json.fileUrls sample_pack.files.map{|file| url_for(file)}
end