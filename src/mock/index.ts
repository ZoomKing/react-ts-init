import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import users from './users'
import homeData from './homeData'


var mock = new MockAdapter(axios);

mock.onGet('/users').reply(200, users );
mock.onGet('/h5/ads/query').reply(200,homeData);

