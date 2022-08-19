import axios from "axios";

export const GET_ALL_PRODUCT = "GET_ALL_PRODUCT";
export const GET_PRODUCT = "GET_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT"

export const getAllProduct = () => {
    return (dispatch) => {

        //loading
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'GET',
            url: 'https://secondhand-bej3.herokuapp.com/produk',
            timeout: 10000
        })
            .then((response) => {
                dispatch({
                    type: GET_ALL_PRODUCT,
                    payload: {
                        data: response.data,
                        loading: false,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_PRODUCT,
                    payload: {
                        data: false,
                        loading: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const getAllProductByCategory = (id) => {
    return (dispatch) => {

        //loading
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'GET',
            url: `https://secondhand-bej3.herokuapp.com/produk/category/${id}`,
            timeout: 10000
        })
            .then((response) => {
                dispatch({
                    type: GET_ALL_PRODUCT,
                    payload: {
                        data: response.data,
                        loading: false,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_PRODUCT,
                    payload: {
                        data: false,
                        loading: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const getDetailProduct = (id) => {
    return (dispatch) => {

        axios({
            method: 'GET',
            url: `https://secondhand-bej3.herokuapp.com/produk/${id}`,
            timeout: 10000
        })
            .then((response) => {
                dispatch({
                    type: GET_PRODUCT,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_PRODUCT,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const createProduct = (data) => {
    console.log("2. Masuk Actions");
    return (dispatch) => {

        //loading
        dispatch({
            type: CREATE_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        axios({
            method: 'POST',
            url: 'https://secondhand-bej3.herokuapp.com/produk',
            headers: { 'Content-Type': 'multipart/form-data' },
            timeout: 10000,
            data: data
        })
            .then((response) => {
                console.log("3. Berhasil dapat data : ", response.data);
                dispatch({
                    type: CREATE_PRODUCT,
                    payload: {
                        data: response.data,
                        loading: false,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                console.log("3. Error", error.message);
                dispatch({
                    type: CREATE_PRODUCT,
                    payload: {
                        data: false,
                        loading: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}