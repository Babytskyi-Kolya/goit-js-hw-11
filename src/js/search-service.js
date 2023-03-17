import axios from 'axios';

const API_KEY = '18198238-415cec3f9ecdd7367e0980e97';
const URL = 'https://pixabay.com/api/';

export default class SearchApiService {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
    }
  
    async fetchImages() {
      try {
        return await axios.get(URL, {
          params: {
            key: API_KEY,
            q: this.searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',
            page: this.page,
            per_page: 40,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    resetPage() {
      this.page = 1;
    }
  
    get query() {
      return this.searchQuery;
    }
  
    set query(newQuery) {
      this.searchQuery = newQuery;
    }
  }