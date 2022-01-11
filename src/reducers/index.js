import { cleanSelectedFlightsAction, deleteSeletedFlightAction, setCountriesAction, setSelectedFlightAction } from "../constants/actions";

const initialState = {
    countries: [],
    selectedFlights:[]
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case setCountriesAction:
            return {
                ...state,
                countries: action.payload
            };
        case setSelectedFlightAction:
            return{
                ...state,
                selectedFlights: [...state.selectedFlights, action.payload]
            }
        case deleteSeletedFlightAction:
            return{
                ...state,
                selectedFlights: state.selectedFlights.filter(item => item.id !== action.payload)
            }
        case cleanSelectedFlightsAction:
            return{
                ...state,
                selectedFlights: []
            }
        default:
            return state
    }
}
export default rootReducer;