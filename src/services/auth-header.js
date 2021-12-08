export default function authHeader() {
  const token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    // for Node.js Express back-end
    return { headers: {
      'Authorization': `Bearer ${token}`,
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    } };
  } else {
    return {};
  }
}
