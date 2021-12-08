import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api/v1/users'

const api = {
  getAllUserTouchpoints(userId) {
    return axios.get(`${ API_URL }/${userId}/touchpoints`, authHeader() );
  },

  getSingleTouchpoint( userId, touchpointId ) {
    return axios.get(`${ API_URL }/${userId}/touchpoints/${touchpointId}`, authHeader());
  },

  async deleteTouchpoint( userId, touchpointId ) {
    const res = await axios.delete(`${API_URL}/${userId}/touchpoints/${touchpointId}`, authHeader());
    return res.data
  },

  async createTouchpoint( userId, payload) {
    const token = JSON.parse(localStorage.getItem('token'));

    const res = await axios({
                        method: 'post',
                        url: `${API_URL}/${userId}/touchpoints/`,
                        data: payload,
                        headers: {
                          'Authorization': `Bearer ${token}`,
                          'Accept' : 'application/json',
                          'Content-Type': 'application/json'
                        }
    });
  },

  async updateTouchpoint( userId, touchpointId, payload ) {
    const token = JSON.parse(localStorage.getItem('token'));

    const res = await axios({
                        method: 'patch',
                        url: `${API_URL}/${userId}/touchpoints/${touchpointId}`,
                        data: payload,
                        headers: {
                          'Authorization': `Bearer ${token}`,
                          'Accept' : 'application/json',
                          'Content-Type': 'application/json'
                        }
    });
  }

};

export default api;
