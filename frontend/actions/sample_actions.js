import * as SampleUtil from "../util/sample_util";

export const RECEIVE_ALL_PACKS = "RECEIVE_ALL_PACKS";
export const RECEIVE_PACK = "RECEIVE_PACK";

const receiveAllPacks = packs => ({
    type: RECEIVE_ALL_PACKS,
    packs
})

const receivePack = pack => ({
    type: RECEIVE_PACK,
    pack
})

export const requestAllPacks = () => dispatch => (
    SampleUtil.fetchAllSamplePacks()
        .then(packs => dispatch(receiveAllPacks(packs)))
);

export const requestPack = (packId) => dispatch => (
    SampleUtil.fetchSamplePack(packId)
        .then(pack => dispatch(receivePack(pack)))
);
