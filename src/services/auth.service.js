import axios from "axios";

const API_URL = "https://secondhand-bej3.herokuapp.com/user/";

const register = (name, email, password) => {
    return axios.post(API_URL + "register", {
        name,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data) {
                localStorage.setItem("token", JSON.stringify(response.data.payload.token));
                localStorage.setItem("userid", JSON.stringify(response.data.payload.id))
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const exportedObject = {
    register,
    login,
    logout,
};

export default exportedObject