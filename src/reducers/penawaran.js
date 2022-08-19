import { CREATE_TAWAR } from "../actions/penawaran";

const initialState = {

    getTawarResult: false,
    getTawarError: false,

}

const tawarReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TAWAR:
            return {
                ...state,
                getTawarResult: action.payload.data,
                getTawarError: action.payload.errorMessage,
            }
        default:
            return state;
    }
}

export default tawarReducer