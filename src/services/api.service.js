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

  createTouchpoint() {}

};

export default api;
