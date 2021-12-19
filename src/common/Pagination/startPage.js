export const startPage = (urlPageNumber) => {
    return urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber;
};