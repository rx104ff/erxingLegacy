import axios from 'axios';

const API_URL = 'http://erxingdogguides.com:8080/api';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService {
    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            {header: { authorization: this.createAuthToken(username, password)}});
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/auth/signin`, {
            "usernameOrEmail": username,
            "password": password
        });
    }

    createAuthToken(username, password) {
        return 'Basic' + window.btoa(username + ":" + password);
    }

    createJwtToken(token) {
        return 'Bearer ' + token;
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        return (user === null)? false : true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        return (user === null)? '' : user;
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token;
                }
                return config;
            }
        )
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createAuthToken(username, password));
    }

    registerSuccessfulLoginJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }
}

export default new AuthenticationService();