import jwt from "jsonwebtoken";
import config from "../config";

export function isAuthenticated(token) {
    // We check if app runs with backend mode
    if (!config.isBackend && token) return true;
    if (!token) return;
    const date = new Date().getTime() / 1000;
    const data = jwt.decode(token);
    return date < data.exp;
}

export const AuthMixin = {
    methods: {
        isAuthenticated
    }
};