export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
        // For Spring Boot back-end
        return {
            Authorization: "Basic " + user.accessToken,
            // "Access-Control-Allow-Origin": "http://localhost:3000/"
        };

        // for Node.js Express back-end
        // return { "x-access-token": user.accessToken };
    } else {
        return {};
    }
}