import axios from 'axios';

export default class ProductService {
    getProducts() {
        return axios.get('data.json').then(res => res.data.data);
    }

}