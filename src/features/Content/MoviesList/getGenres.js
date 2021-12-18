export function foundName(tagId, genres) {
    if (tagId) {
        const genre = genres.find(element => element.id === tagId);
        return (genre.name)
    }
};