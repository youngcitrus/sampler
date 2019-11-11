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