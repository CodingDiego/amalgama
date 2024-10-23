import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('https://api.org/books').reply(200, [
    {
        id: 1,
        title: 'Book 1',
        author: {
            id: 1,
            name: 'Author 1'
        }
    },
    {
        id: 2,
        title: 'Book 2',
        author: {
            id: 2,
            name: 'Author 2'
        }
    }
]
  

);

export default axios;
