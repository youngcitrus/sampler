export const fetchAllSamplePacks = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/sample_packs'
    });
};

export const fetchSamplePack = packId => {
    return $.ajax({
        method: 'GET',
        url: `api/sample_packs/${packId}`
    });
}

export const fetchSamples = packId => {
    return $.ajax({
        method: 'GET',
        url: `api/sample_packs/${packId}/samples`
    })
}

export const fetchLikedSamples = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/liked_samples'
    })
}