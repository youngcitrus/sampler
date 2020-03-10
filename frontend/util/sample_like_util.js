export const likeSample = (sampleLike) => {
    return $.ajax({
        method: 'POST',
        url: 'api/sample_likes',
        data: { sample_like: sampleLike }
    });
};

export const unlikeSample = (sampleLike) => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/sample_likes/',
        data: { sample_like: sampleLike }
    });
}