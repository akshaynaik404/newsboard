import axios from 'axios';

export default {
  getNewsItems() {
    return axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=14d7c1ccdc5042c9b70b41aebde1348a');
  },
};
