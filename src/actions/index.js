import { cleanSelectedFlightsAction, deleteSeletedFlightAction, setCountriesAction, setSelectedFlightAction } from "../constants/actions";
export const setCountries = payload => ({
    type: setCountriesAction,
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