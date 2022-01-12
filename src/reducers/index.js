import { cleanSelectedFlightsAction, deleteSeletedFlightAction, setCountriesAction, setSelectedFlightAction, setUserDataAction, UpdateSelectedFlightAction } from "../constants/actions";

const initialState = {
    countries: [],
    selectedFlights:[],
    userData: undefined
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
        case UpdateSelectedFlightAction:
            return{
                ...state,
                selectedFlights: [...state.selectedFlights.map(item => {
                    if(item.id !== action.payload.id)
                        return item;
                    return{
                        ...item,
                        ...action.payload
                    }
                })]
            }
        case setUserDataAction:
            return{
                ...state,
                userData: action.payload
            }
        default:
            return state
    }
}
export default rootReducer;