import { GET_ALL_PRODUCT_SELLER } from '../actions/productSeller';

const initialState = {
  getAllDataProductSellerResult: false,
  getAllDataProductSellerLoading: false,
  getAllDataProductSellerError: false,
};

const productSellerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_SELLER:
      return {
        ...state,
        getAllDataProductSellerResult: action.payload.data,
        getAllDataProductSellerLoading: action.payload.loading,
        getAllDataProductSellerError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default productSellerReducer;
