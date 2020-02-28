export const likePack = (packLike) => {
    return $.ajax({
        method: 'POST',
        url: 'api/pack_likes',
        data: { pack_like: packLike }
    });
};