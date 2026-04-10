const API_BASE_URL = process.env.API_BASE_URL || 'https://reqres.in/api';

module.exports = {
  API_BASE_URL,
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  TIMEOUT: 30 * 1000,
};
