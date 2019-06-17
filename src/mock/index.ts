import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import users from './users'


var mock = new MockAdapter(axios);

mock.onGet('/users').reply(200, {
    users
});

