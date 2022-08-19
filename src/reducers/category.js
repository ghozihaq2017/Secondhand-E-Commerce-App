import { GET_CATEGORY } from "../actions/category";

const initialState = {
    getCategoryResult: false,
    getCategoryError: false,
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                getCategoryResult: action.payload.data,
                getCategoryError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default categoryReducer