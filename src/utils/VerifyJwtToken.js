import { jwtDecode } from "jwt-decode";

export const decodedToken = (token) => {
    if(token) {
        return jwtDecode(token);
    }
};