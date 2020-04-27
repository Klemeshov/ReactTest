import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(id) {
        if (!id) {
            id = "";
        }
        return instance.get(`/profile/` + id).then(response => response.data);
    },
    putStatus(status) {
        return instance.put(`/profile/status`, {status}).then(response => response.data);
    }
};

export const authAPI = {
    me() {
        return instance.get(`/auth/me`).then(response => response.data)
    },
    login(userAuthData) {
        return instance.post('/auth/login', userAuthData).then(response => response.data)
    },
    logout(){
        return instance.delete('/auth/login').then(response => response.data)
    }
};
