import { GET_ALL_PRODUCT, GET_PRODUCT, CREATE_PRODUCT } from "../actions/product";

const initialState = {
    getAllDataProductResult: false,
    getAllDataProductLoading: false,
    getAllDataProductError: false,

    getDataProductResult: false,
    getDataProductError: false,

    addDataProductResult: false,
    addDataProductLoading: false,
    addDataProductError: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                getAllDataProductResult: action.payload.data,
                getAllDataProductLoading: action.payload.loading,
                getAllDataProductError: action.payload.errorMessage
            }
        case GET_PRODUCT:
            return {
                ...state,
                getDataProductResult: action.payload.data,
                getDataProductError: action.payload.errorMessage,
            }
        case CREATE_PRODUCT:
            console.log("4. Masuk reducer : ", action)
            return {
                ...state,
                addDataProductResult: action.payload.data,
                addDataProductLoading: action.payload.loading,
                addDataProductError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default productReducer