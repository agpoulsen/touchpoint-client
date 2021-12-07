import axios from 'axios';

const API_URL = "http://localhost:3000/api/v1/";

class AuthService {
  login( email, password) {
    return axios
              .post(API_URL + 'users/login', {
                email,
                password
              })
              .then(response => {
                if (response.data.accessToken) {
                  localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data
              });
  }

  logout() {
    localStorage.removeItem("user");
  }

  signUp(name, email, password, passwordConfirm) {
    return axios.post(API_URL + 'users/signup', {
      name,
      email,
      password,
      passwordConfirm
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
