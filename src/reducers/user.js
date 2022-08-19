import { GET_USER } from "../actions/user";

const initialState = {

    getUserResult: false,
    getUserError: false,

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                getUserResult: action.payload.data,
                getUserError: action.payload.errorMessage,
            }
        default:
            return state;
    }
}

export default userReducer