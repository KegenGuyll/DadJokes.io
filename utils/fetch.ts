import axios, { AxiosRequestConfig } from 'axios';

const endpoint = 'http://dadjokes-beta.herokuapp.com';

const fetch = async (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');

  if (token === null) throw new Error('must be logged in to like post');

  config.headers = { authorization: `Bearer ${token}` };

  config.url = `${endpoint}${config.url}`;

  return await axios(config);
};

export default fetch;
