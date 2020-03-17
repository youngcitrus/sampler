import * as SampleUtil from "../util/sample_util";

export const RECEIVE_ALL_PACKS = "RECEIVE_ALL_PACKS";
export const RECEIVE_PACK = "RECEIVE_PACK";
export const RECEIVE_SAMPLES = "RECEIVE_SAMPLES";
export const RECEIVE_LIKED_SAMPLES = "RECEIVE_LIKED_SAMPLES"

const receiveAllPacks = packs => ({
    type: RECEIVE_ALL_PACKS,
    packs
});

const receivePack = pack => ({
    type: RECEIVE_PACK,
    pack
});

const receiveSamples = samples => ({
    type: RECEIVE_SAMPLES,
    samples
});

const receiveLikedSamples = likedSamples => ({
    type: RECEIVE_LIKED_SAMPLES,
    likedSamples
});

export const requestAllPacks = () => dispatch => (
    SampleUtil.fetchAllSamplePacks()
        .then(packs => dispatch(receiveAllPacks(packs)))
);

export const requestPack = (packId) => dispatch => (
    SampleUtil.fetchSamplePack(packId)
        .then(pack => {
            dispatch(receivePack(pack));
        })
    
);

export const requestSamples = packId => dispatch => (
    SampleUtil.fetchSamples(packId)
        .then(samples => dispatch(receiveSamples(samples)))
)

export const requestLikedSamples = () => dispatch => (
    SampleUtil.fetchLikedSamples()
        .then(likedSamples => {
            dispatch(receiveLikedSamples(likedSamples));
        })
)

