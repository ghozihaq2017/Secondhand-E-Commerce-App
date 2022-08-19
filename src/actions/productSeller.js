import axios from 'axios';

export const GET_ALL_PRODUCT_SELLER = 'GET_ALL_PRODUCT_SELLER';

export const getAllProductSeller = () => {
  console.log('2. Masuk Actions');
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_ALL_PRODUCT_SELLER,
      payload: {
        data: false,
        loading: true,
        errorMessage: false,
      },
    });

    axios({
      method: 'GET',
      url: 'https://secondhand-bej3.herokuapp.com/user',
      timeout: 10000,
    })
      .then((response) => {
        console.log('3. Berhasil dapat data : ', response.data);
        dispatch({
          type: GET_ALL_PRODUCT_SELLER,
          payload: {
            data: response.data,
            loading: false,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log('3. Error', error.message);
        dispatch({
          type: GET_ALL_PRODUCT_SELLER,
          payload: {
            data: false,
            loading: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
