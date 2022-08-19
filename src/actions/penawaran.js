import axios from "axios";

export const CREATE_TAWAR = "CREATE_TAWAR";

export const createTawar = () => {
    return (dispatch) => {

        axios({
            method: 'POST',
            url: `https://secondhand-bej3.herokuapp.com/penawaran`,
        })
            .then((response) => {
                dispatch({
                    type: CREATE_TAWAR,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                dispatch({
                    type: CREATE_TAWAR,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}