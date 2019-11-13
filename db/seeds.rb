# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
#Delete database
User.destroy_all;
SamplePack.destroy_all;
Sample.destroy_all;

#Create and save Users
User.create({username: "youngcitrus", email:"yc@gmail.com", password: "123456"})
User.create({username: "Justin", email: "justinhaison@gmail.com", password:"password"})

#Create Sample Packs
pack1 = SamplePack.create({name: "Lofi Hip-Hop Essentials", description: "Crispy beats, boom-bap aesthetics, and jazzy chords - Lofi Hip-Hop Essentials features sounds and loops primed for mellow beats to study to. Packed with custom-made chord progressions and groovy rhythms, Lofi Hip-Hop Essentials brings unbridled inspiration for the hip-hop and beat scene."})
pack2 = SamplePack.create({name: "Future Beats & Baile Funk", description: "R&B inspired chords, catchy melodies, and punchy drum loops - Future Beats & Baile Beats curates a fresh sound that blends future-beats styled synths, jazzy riffs, and latin-inspired percussion that is sure to take your Soundcloud type beats to Spotify worthy."})
pack3 = SamplePack.create({name: "Sweater Weather", description:"Warm melodies, romantic instrumentation, and video-game style sound design come together to create a collection of samples perfect for sharing with that special someone. Inspired by future bass and anime soundscapes, this sample pack is the perfect combination of kawaii and catchy."})

#Open Sample Pack cover art and demos
pack_image1 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/cover-art/cover-art-lofi-hiphop.png')
pack_image2 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/cover-art/cover-art-future-beats.png')
pack_image3 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/cover-art/cover-art-sweater-weather.png')

pack_demo1 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/pack-demos/pack-demo-lofi-hiphop.mp3')
pack_demo2 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/pack-demos/pack-demo-future-beats.mp3')
pack_demo3 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/pack-demos/pack-demo-sweater-weather.mp3')

#Attach Sample Pack cover art and demos
pack1.files.attach(io: pack_image1, filename:'cover-art-lofi-hiphop.png')
pack1.files.attach(io: pack_demo1, filename:'pack-demo-lofi-hiphop.mp3')
pack2.files.attach(io: pack_image2, filename: 'cover-art-future-beats.png')
pack2.files.attach(io: pack_demo2, filename: 'pack-demo-future-beats.png')
pack3.files.attach(io: pack_image3, filename: 'cover-art-sweater-weather.png')
pack3.files.attach(io: pack_demo3, filename: 'pack-demo-sweater-weather.png')

#Create and save Samples
lfh_sample1 = Sample.create({name: 'Bright Bell Arpeggio', pack_id: 1, key: 'C', bpm: '110'})
lfh_sample2 = Sample.create({name: "Boombap 90's Drum Loop", pack_id: 1, key: '-', bpm: '96'})
lfh_sample3 = Sample.create({name: "Calming Piano Chords", pack_id: 1, key: 'C', bpm: '110'})
lfh_sample4 = Sample.create({name: "City Girl Drum Loop", pack_id: 1, key: '-', bpm: '91'})
lfh_sample5 = Sample.create({name: "Favorite Drums", pack_id: 1, key: '-', bpm: '147'})
lfh_sample6 = Sample.create({name: "FX Vinyl Crackle", pack_id: 1, key: '-', bpm: '-'})
lfh_sample7 = Sample.create({name: "Groovy Guitar", pack_id: 1, key: 'C', bpm: '-'})
lfh_sample8 = Sample.create({name: "Guitar Moody Chords", pack_id: 1, key: 'Db', bpm: '147'})
lfh_sample9 = Sample.create({name: "Guitar Serenade", pack_id: 1, key: '-', bpm: '91'})
lfh_sample10 = Sample.create({name: "Guitar Plucks", pack_id: 1, key: '-', bpm: '85'})
lfh_sample11 = Sample.create({name: "Jazzy Drum Kit", pack_id: 1, key: '-', bpm: '110'})
lfh_sample12 = Sample.create({name: "Late Swung Drums", pack_id: 1, key: '-', bpm: '70'})
lfh_sample13 = Sample.create({name: "Lazy Drum Loop", pack_id: 1, key: '-', bpm: '91'})
lfh_sample14 = Sample.create({name: "Lofi Music Loop", pack_id: 1, key: '-', bpm: '85'})
lfh_sample15 = Sample.create({name: "Lofi Swing Beat", pack_id: 1, key: '-', bpm: '147'})
lfh_sample16 = Sample.create({name: "Percussion Foley Loop", pack_id: 1, key: '-', bpm: '110'})
lfh_sample17 = Sample.create({name: "Quick Crunchy Drums", pack_id: 1, key: '-', bpm: '85'})
lfh_sample18 = Sample.create({name: "Rhodes Piano Chords", pack_id: 1, key: '-', bpm: '91'})
lfh_sample19 = Sample.create({name: "Sad Piano Chops", pack_id: 1, key: 'Db', bpm: '147'})
lfh_sample20 = Sample.create({name: "Top Percussion Loop", pack_id: 1, key: '-', bpm: '86'})

# #Open Sample files from AWS
lfh_file1 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-arp-bell-c-major-110.mp3')
lfh_file2 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-boom-bap-drums-96.mp3')
lfh_file3 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-calm-piano-c-major-110.mp3')
lfh_file4 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-city-girl-drums-91.mp3')
lfh_file5 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-favorite-drum-kit-147.mp3')
lfh_file6 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-fx-vinyl-crackle.mp3')
lfh_file7 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-guitar-108.mp3')
lfh_file8 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-guitar-chords-db-major-147.mp3')
lfh_file9 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-guitar-loop-sweet-sultry.mp3')
lfh_file10 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-guitar-plucks-85.mp3')
lfh_file11 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-jazzy-drum-kit-110.mp3')
lfh_file12 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-late-swung-drums.mp3')
lfh_file13 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-lazy-drum-loop-91.mp3')
lfh_file14 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-lofi-music-loop-full-85.mp3')
lfh_file15 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-lofi-swing-beat-147.mp3')
lfh_file16 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-perc-loop-110.mp3')
lfh_file17 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-quick-crunchy-drums-85.mp3')
lfh_file18 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-rhodes-chords-91.mp3')
lfh_file19 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-sad-piano-chops-db-major-147.mp3')
lfh_file20 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-top-loop-86.mp3')


lfh_sample1.file.attach(io: lfh_file1, filename:'lfh-arp-bell-c-major-110.mp3')
lfh_sample2.file.attach(io: lfh_file2, filename:'lfh-boom-bap-drums-96.mp3')
lfh_sample3.file.attach(io: lfh_file3, filename:'lfh-calm-piano-c-major-110.mp3')
lfh_sample4.file.attach(io: lfh_file4, filename:'lfh-city-girl-drums-91.mp3')
lfh_sample5.file.attach(io: lfh_file5, filename:'lfh-favorite-drum-kit-147.mp3')
lfh_sample6.file.attach(io: lfh_file6, filename:'lfh-fx-vinyl-crackle.mp3')
lfh_sample7.file.attach(io: lfh_file7, filename:'lfh-guitar-108.mp3')
lfh_sample8.file.attach(io: lfh_file8, filename:'lfh-guitar-chords-db-major-147.mp3')
lfh_sample9.file.attach(io: lfh_file9, filename:'lfh-guitar-loop-sweet-sultry.mp3')
lfh_sample10.file.attach(io: lfh_file10, filename:'lfh-guitar-plucks-85.mp3')
lfh_sample11.file.attach(io: lfh_file11, filename:'lfh-jazzy-drum-kit-110.mp3')
lfh_sample12.file.attach(io: lfh_file12, filename:'lfh-late-swung-drums.mp3')
lfh_sample13.file.attach(io: lfh_file13, filename:'lfh-lazy-drum-loop-91.mp3')
lfh_sample14.file.attach(io: lfh_file14, filename:'lfh-lofi-music-loop-full-85.mp3')
lfh_sample15.file.attach(io: lfh_file15, filename:'lfh-lofi-swing-beat-147.mp3')
lfh_sample16.file.attach(io: lfh_file16, filename:'lfh-perc-loop-110.mp3')
lfh_sample17.file.attach(io: lfh_file17, filename:'lfh-quick-crunchy-drums-85.mp3')
lfh_sample18.file.attach(io: lfh_file18, filename:'lfh-rhodes-chords-91.mp3')
lfh_sample19.file.attach(io: lfh_file19, filename:'lfh-sad-piano-chops-db-major-147.mp3')
lfh_sample20.file.attach(io: lfh_file20, filename:'lfh-top-loop-86.mp3')







