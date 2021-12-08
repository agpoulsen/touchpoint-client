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
        console.log( response.data.data.user._id )
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("userId", JSON.stringify(response.data.data.user._id) )
          localStorage.setItem("user", true);
        }
        return response.data
      });
  }

  logout() {
    localStorage.setItem("user", false);
    localStorage.removeItem("userId")
    localStorage.removeItem("token");
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

  getUserId() {
    return JSON.parse(localStorage.getItem("userId"))
  }
}

export default new AuthService();
