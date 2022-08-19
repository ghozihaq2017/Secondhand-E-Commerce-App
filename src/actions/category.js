import axios from "axios";

export const GET_CATEGORY = "GET_CATEGORY";

export const getCategory = () => {
    return (dispatch) => {

        axios({
            method: 'GET',
            url: 'https://secondhand-bej3.herokuapp.com/category',
        })
            .then((response) => {
                dispatch({
                    type: GET_CATEGORY,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_CATEGORY,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}