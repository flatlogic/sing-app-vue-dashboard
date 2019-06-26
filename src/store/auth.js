import config from "../config";
import axios from "axios";
import jwt from "jsonwebtoken";
import router from '../Routes';

export default {
    namespaced: true,
    state: {
        isFetching: false,
        errorMessage: ''
    },
    mutations: {
        LOGIN_FAILURE(state, payload) {
            state.isFetching = false;
            state.errorMessage = payload;
        },
        LOGIN_SUCCESS(state) {
            state.isFetching = false;
            state.errorMessage = '';
        },
        LOGIN_REQUEST(state) {
            state.isFetching = true;
        },
    },
    actions: {
        loginUser({dispatch}, creds) {
            dispatch('requestLogin');
            if (creds.social) {
                window.location.href = config.baseURLApi + "/user/signin/" + creds.social + (process.env.NODE_ENV === "production" ? "?app=sing-app-vue" : "");
            }
            else if (creds.email.length > 0 && creds.password.length > 0) {
                axios.post("/user/signin/local", creds).then(res => {
                    const token = res.data.token;
                    dispatch('receiveToken', token);
                }).catch(err => {
                    dispatch('loginError', err.response.data);
                })

            } else {
                dispatch('loginError', 'Something was wrong. Try again');
            }
        },
        receiveToken({dispatch}, token) {
            let user = jwt.decode(token).user;
            delete user.id;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            dispatch('receiveLogin');
        },
        logoutUser() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            axios.defaults.headers.common['Authorization'] = "";
            router.push('/login');
        },
        loginError({commit}, payload) {
            commit('LOGIN_FAILURE', payload);
        },
        receiveLogin({commit}) {
            commit('LOGIN_SUCCESS');
            router.push('/app/main/analytics');
        },
        requestLogin({commit}) {
            commit('LOGIN_REQUEST');
        }
    },
};
