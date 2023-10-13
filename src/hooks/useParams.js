import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useParams = () => {
    // const history = useHistory();
    const navigate = useNavigate();
    const location = useLocation();

    // Creates a URLSearchParams object given any existing query string that is on the url
    const params = new URLSearchParams(location.search);

    // Function that gets called by any component that wants to update the URL parameters
    const setParams = (name, value) => {
        // Sets new parameters onto our URLSearchParams object
        params.set(name, value);

        // Pushes new parameters onto the current URL using URLSearchParams object toString method
        navigate.push({
            pathname: location.pathname,
            search: params.toString(),
        });
    };

    // Return the URLSearchParams object so components can read current URL parameters and the setParams function so components can modify URL parameters.
    return [params, setParams];
};
