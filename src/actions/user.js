import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (id) => {
    return (dispatch) => {

        axios({
            method: 'GET',
            url: `https://secondhand-bej3.herokuapp.com/user/${id}`,
        })
            .then((response) => {
                dispatch({
                    type: GET_USER,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_USER,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}