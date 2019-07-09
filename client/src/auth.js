import axios from 'axios'
import querystring from 'querystring'

export default {
    async login(email, password, next) {
        let response = await axios.post('/api/v1/user/login', querystring.stringify({
            email: email,
            password: password
          }));
        let data = await response.data;
        next(data);
    }, 
    async signup(email, password, next) {
      let response = await axios.post('/api/v1/user/signup', querystring.stringify({
          email: email,
          password: password
        }));
      let data = await response.data;
      next(data);
  }

  }
