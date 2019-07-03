import axios from 'axios'
import querystring from 'querystring'

export default {
    async login(email, password) {
        let response = await axios.post('/api/v1/user/login', querystring.stringify({
            email: email,
            password: password
          }));
        let data = await response.data;
        console.log(data);
    }
  }