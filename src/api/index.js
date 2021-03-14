import axios from 'axios';

export default {
  getNewsItems() {
    return axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ZL4OZZ5nk99JTJAbKYwA89ONuaNFiOzd');
  },
};
