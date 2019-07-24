//import required dependicies
import axios from 'axios'
import querystring from 'querystring'
import cookies from 'js-cookie'
import { isset } from './utils/isset'

export default {
  async login(email, password, next) {
    let response = await axios.post('/api/v1/user/login', querystring.stringify({
      email: email,
      password: password
    }));
    let data = await response.data;
    //if the api returns with a success true message then continue with the script else return an error
    if (data["success"]) {
      //set the main user cookie
      cookies.set('user-m', data["data"]["token"], { expires: 1 });
      //return that everything was successful
      next(data["success"]);
    } else {
      next(data["success"]);
    }
  },
  getToken() {
    let token = cookies.get('user-m');
    if (isset(() => token)) {
      return true;
    } else {
      return false;
    }
  },

  async create(email, password, next) {
    let response = await axios.post('/api/v1/user/create', querystring.stringify({
      email: email,
      password: password
    }));
    let data = await response.data;
    //if the api returns with a success true message then continue with the script else return an error
    if (data["success"]) {
      //set the main user cookie
      cookies.set('user-m', data["data"]["token"], { expires: 1 });
      //return that everything was successful
      next(data["success"]);
    } else {
      next(data["success"]);
    }
  }

}
