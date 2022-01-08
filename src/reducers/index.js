import { setCountriesAction } from "../constants/actions";

const initialState = {
    countries: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case setCountriesAction:
            return {
                ...state,
                countries: action.payload
            };
        default:
            return state
    }
}
export default rootReducer;