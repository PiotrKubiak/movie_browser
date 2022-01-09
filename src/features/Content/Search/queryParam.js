import { useHistory, useLocation } from "react-router";

export const useQueryParameter = (params) => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(params);
};

export const useReplaceQueryParamiter = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);

    const replace = ({ key, value }) => {
        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`)
    }
    return replace;
};

