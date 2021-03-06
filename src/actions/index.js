import { 
    cleanSelectedFlightsAction, deleteSeletedFlightAction, 
    setCountriesAction, setFlightsAction, setSelectedFlightAction, setUserDataAction, UpdateSelectedFlightAction 
} from "../constants/actions";
export const setCountries = payload => ({
    type: setCountriesAction,
    payload
});

export const setFlights = payload => ({
    type: setFlightsAction,
    payload
});

export const setSelectedFlight = payload => ({
    type: setSelectedFlightAction,
    payload
});

export const deleteSeletedFlight = payload => ({
    type: deleteSeletedFlightAction,
    payload
});

export const cleanSelectedFlights = () => ({
    type: cleanSelectedFlightsAction
});

export const updateSelectedFlight = payload => ({
    type: UpdateSelectedFlightAction,
    payload
});

export const setUserData = payload => ({
    type: setUserDataAction,
    payload
});