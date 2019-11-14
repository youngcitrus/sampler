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
Sample.destroy_all;
SamplePack.destroy_all;

#Create and save Users
User.create({username: "youngcitrus", email:"yc@gmail.com", password: "123456"})
User.create({username: "Justin", email: "justinhaison@gmail.com", password:"password"})


#--------------------------------------------------------------------------------------------

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
pack2.files.attach(io: pack_demo2, filename: 'pack-demo-future-beats.mp3')
pack3.files.attach(io: pack_image3, filename: 'cover-art-sweater-weather.png')
pack3.files.attach(io: pack_demo3, filename: 'pack-demo-sweater-weather.mp3')


#--------------------------------------------------------------------------------------------
#Create and save Lofi HipHop Samples
lfh_sample1 = Sample.create({name: 'Bright Bell Arpeggio', pack_id: pack1.id, key: 'C', bpm: '110'})
lfh_sample2 = Sample.create({name: "Boombap 90's Drum Loop", pack_id: pack1.id, key: '-', bpm: '96'})
lfh_sample3 = Sample.create({name: "Calming Piano Chords", pack_id: pack1.id, key: 'C', bpm: '110'})
lfh_sample4 = Sample.create({name: "City Girl Drum Loop", pack_id: pack1.id, key: '-', bpm: '91'})
lfh_sample5 = Sample.create({name: "Favorite Drums", pack_id: pack1.id, key: '-', bpm: '147'})
lfh_sample6 = Sample.create({name: "FX Vinyl Crackle", pack_id: pack1.id, key: '-', bpm: '-'})
lfh_sample7 = Sample.create({name: "Groovy Guitar", pack_id: pack1.id, key: 'C', bpm: '-'})
lfh_sample8 = Sample.create({name: "Guitar Moody Chords", pack_id: pack1.id, key: 'Db', bpm: '147'})
lfh_sample9 = Sample.create({name: "Guitar Serenade", pack_id: pack1.id, key: '-', bpm: '91'})
lfh_sample10 = Sample.create({name: "Guitar Plucks", pack_id: pack1.id, key: '-', bpm: '85'})
lfh_sample11 = Sample.create({name: "Jazzy Drum Kit", pack_id: pack1.id, key: '-', bpm: '110'})
lfh_sample12 = Sample.create({name: "Late Swung Drums", pack_id: pack1.id, key: '-', bpm: '70'})
lfh_sample13 = Sample.create({name: "Lazy Drum Loop", pack_id: pack1.id, key: '-', bpm: '91'})
lfh_sample14 = Sample.create({name: "Lofi Music Loop", pack_id: pack1.id, key: '-', bpm: '85'})
lfh_sample15 = Sample.create({name: "Lofi Swing Beat", pack_id: pack1.id, key: '-', bpm: '147'})
lfh_sample16 = Sample.create({name: "Percussion Foley Loop", pack_id: pack1.id, key: '-', bpm: '110'})
lfh_sample17 = Sample.create({name: "Quick Crunchy Drums", pack_id: pack1.id, key: '-', bpm: '85'})
lfh_sample18 = Sample.create({name: "Rhodes Piano Chords", pack_id: pack1.id, key: '-', bpm: '91'})
lfh_sample19 = Sample.create({name: "Sad Piano Chops", pack_id: pack1.id, key: 'Db', bpm: '147'})
lfh_sample20 = Sample.create({name: "Top Percussion Loop", pack_id: pack1.id, key: '-', bpm: '86'})
lfh_sample21 = Sample.create({name: "Top Loop Swung", pack_id: pack1.id, key: '-', bpm: '91'})
lfh_sample22 = Sample.create({name: "Traiditional Hip Hop Beat", pack_id: pack1.id, key: '-', bpm: '90'})
lfh_sample23 = Sample.create({name: "Vocal Chops", pack_id: pack1.id, key: 'Db', bpm: '147'})

#Open Lofi HipHop Sample files from AWS
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
lfh_file21 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-top-loop-swing-91.mp3')
lfh_file22 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-traditional-hip-hop-beat-90.mp3')
lfh_file23 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/lofi-hip-hop-essentials/lfh-vocal-chops-db-major-147.mp3')


# Lofi Hip Hop Samples Attach
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
lfh_sample21.file.attach(io: lfh_file21, filename: 'lfh-top-loop-swing-91.mp3')
lfh_sample22.file.attach(io: lfh_file22, filename: 'lfh-traditional-hip-hop-beat-90.mp3')
lfh_sample23.file.attach(io: lfh_file23, filename: 'lfh-vocal-chops-db-major-147.mp3')


#--------------------------------------------------------------------------------------------
#Create and save Future Beats Samples
fb_sample1 = Sample.create({name: '808 Slides', pack_id: pack2.id, key: 'Dbm', bpm: '114'})
fb_sample2 = Sample.create({name: 'Baile Drum Rhythm', pack_id: pack2.id, key: '-', bpm: '105'})
fb_sample3 = Sample.create({name: 'Cinematic Strings', pack_id: pack2.id, key: 'Dbm', bpm: '114'})
fb_sample4 = Sample.create({name: 'Cute Flute Lead 1', pack_id: pack2.id, key: 'B', bpm: '105'})
fb_sample5 = Sample.create({name: 'Cute Flute Lead 2', pack_id: pack2.id, key: 'B', bpm: '105'})
fb_sample6 = Sample.create({name: 'Cute Flute Lead 3', pack_id: pack2.id, key: 'B', bpm: '105'})
fb_sample7 = Sample.create({name: 'Drum Build Loop', pack_id: pack2.id, key: '-', bpm: '110'})
fb_sample8 = Sample.create({name: 'Future R&B Chords', pack_id: pack2.id, key: 'Dbm', bpm: '114'})
fb_sample9 = Sample.create({name: 'Future Glassy Chords', pack_id: pack2.id, key: 'Ebm', bpm: '160'})
fb_sample10 = Sample.create({name: 'FX White Noise Sweep', pack_id: pack2.id, key: '-', bpm: '-'})
fb_sample11 = Sample.create({name: 'Groovy Synth Chords', pack_id: pack2.id, key: '-', bpm: '168'})
fb_sample12 = Sample.create({name: 'Happy Flute Riff', pack_id: pack2.id, key: '-', bpm: '168'})
fb_sample13 = Sample.create({name: 'House Beat Drums', pack_id: pack2.id, key: '-', bpm: '116'})
fb_sample14 = Sample.create({name: 'House Beat Groove', pack_id: pack2.id, key: '-', bpm: '114'})
fb_sample15 = Sample.create({name: 'Jazz Rhodes Miniluv', pack_id: pack2.id, key: '-', bpm: '130'})
fb_sample16 = Sample.create({name: 'Jazzy House Loop Full', pack_id: pack2.id, key: '-', bpm: '116'})
fb_sample17 = Sample.create({name: 'Kaytra Style Bassline', pack_id: pack2.id, key: 'Dbm', bpm: '114'})
fb_sample18 = Sample.create({name: 'Lotus Anime Flute', pack_id: pack2.id, key: '-', bpm: '160'})
fb_sample19 = Sample.create({name: 'Percussion Groove', pack_id: pack2.id, key: '-', bpm: '114'})
fb_sample20 = Sample.create({name: 'Percussion Groove 2', pack_id: pack2.id, key: '-', bpm: '160'})
fb_sample21 = Sample.create({name: 'Salsa Percussion Loop', pack_id: pack2.id, key: '-', bpm: '168'})
fb_sample22 = Sample.create({name: 'Shaker Shuffled Drums', pack_id: pack2.id, key: '-', bpm: '168'})
fb_sample23 = Sample.create({name: 'Soulful Rhodes', pack_id: pack2.id, key: 'Dbm', bpm: '114'})
fb_sample24 = Sample.create({name: 'Straight Hat Loop', pack_id: pack2.id, key: '-', bpm: '160'})
fb_sample25 = Sample.create({name: 'Vocal Chop Groove', pack_id: pack2.id, key: '-', bpm: '130'})
fb_sample26 = Sample.create({name: 'Vocal Jazz Ensemble', pack_id: pack2.id, key: 'B', bpm: '105'})

#Open Future Beats Sample files from AWS
fb_file1 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-808-db-minor-full-114.mp3')
fb_file2 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-baile-beat-full-105.mp3')
fb_file3 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-cinematic-strings-db-minor-114.mp3')
fb_file4 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-cute-flute-lead-1-b-major-105.mp3')
fb_file5 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-cute-flute-lead-2-b-major-105.mp3')
fb_file6 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-cute-flute-lead-3-b-major-105.mp3')
fb_file7 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-drum-build-110.mp3')
fb_file8 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-future-chords-db-minor-114.mp3')
fb_file9 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-future-glass-chords-eb-minor-160.mp3')
fb_file10 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-fx-white-noise-sweep.mp3')
fb_file11 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-groovy-synth-chords-168.mp3')
fb_file12 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-happy-flute-168.mp3')
fb_file13 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-house-groove-116.mp3')
fb_file14 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-house-groove-full-114.mp3')
fb_file15 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-jazz-rhodes-miniluv-130.mp3')
fb_file16 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-jazzy-house-loop-full-116.mp3')
fb_file17 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-kaytra-bass-db-minor-114.mp3')
fb_file18 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-lotus-flute-anime-160.mp3')
fb_file19 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-perc-groove-114.mp3')
fb_file20 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-perc-groove-160.mp3')
fb_file21 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-salsa-perc-groove-168.mp3')
fb_file22 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-shaker-shuffle-drums-168.mp3')
fb_file23 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-soulful-rhodes-db-minor-114.mp3')
fb_file24 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-straight-hats-160.mp3')
fb_file25 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-vocal-chop-groove-130.mp3')
fb_file26 = open('https://sampler-dev.s3-us-west-1.amazonaws.com/seeds/samples/future-beats-baile/fb-vocal-ensemble-b-major-105.mp3')

# Future Beats Samples Attach
fb_sample1.file.attach(io: fb_file1, filename:'fb-808-db-minor-full-114.mp3')
fb_sample2.file.attach(io: fb_file2, filename:'fb-baile-beat-full-105.mp3')
fb_sample3.file.attach(io: fb_file3, filename:'fb-cinematic-strings-db-minor-114.mp3')
fb_sample4.file.attach(io: fb_file4, filename:'fb-cute-flute-lead-1-b-major-105.mp3')
fb_sample5.file.attach(io: fb_file5, filename:'fb-cute-flute-lead-2-b-major-105.mp3')
fb_sample6.file.attach(io: fb_file6, filename:'fb-cute-flute-lead-3-b-major-105.mp3')
fb_sample7.file.attach(io: fb_file7, filename:'fb-drum-build-110.mp3')
fb_sample8.file.attach(io: fb_file8, filename:'fb-future-chords-db-minor-114.mp3')
fb_sample9.file.attach(io: fb_file9, filename:'fb-future-glass-chords-eb-minor-160.mp3')
fb_sample10.file.attach(io: fb_file10, filename:'fb-fx-white-noise-sweep.mp3')
fb_sample11.file.attach(io: fb_file11, filename:'fb-groovy-synth-chords-168.mp3')
fb_sample12.file.attach(io: fb_file12, filename:'fb-happy-flute-168.mp3')
fb_sample13.file.attach(io: fb_file13, filename:'fb-house-groove-116.mp3')
fb_sample14.file.attach(io: fb_file14, filename:'fb-house-groove-full-114.mp3')
fb_sample15.file.attach(io: fb_file15, filename:'fb-jazz-rhodes-miniluv-130.mp3')
fb_sample16.file.attach(io: fb_file16, filename:'fb-jazzy-house-loop-full-116.mp3')
fb_sample17.file.attach(io: fb_file17, filename:'fb-kaytra-bass-db-minor-114.mp3')
fb_sample18.file.attach(io: fb_file18, filename:'fb-lotus-flute-anime-160.mp3')
fb_sample19.file.attach(io: fb_file19, filename:'fb-perc-groove-114.mp3')
fb_sample20.file.attach(io: fb_file20, filename:'fb-perc-groove-160.mp3')
fb_sample21.file.attach(io: fb_file21, filename:'fb-salsa-perc-groove-168.mp3')
fb_sample22.file.attach(io: fb_file22, filename:'fb-shaker-shuffle-drums-168.mp3')
fb_sample23.file.attach(io: fb_file23, filename:'fb-soulful-rhodes-db-minor-114.mp3')
fb_sample24.file.attach(io: fb_file24, filename:'fb-straight-hats-160.mp3')
fb_sample25.file.attach(io: fb_file25, filename:'fb-vocal-chop-groove-130.mp3')
fb_sample26.file.attach(io: fb_file26, filename:'fb-vocal-ensemble-b-major-105.mp3')
