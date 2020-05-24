import Cookies from 'js-cookie';

const asyncCookieHelper = {
  async set(key, value) {
    await null;
    return Cookies.set(key, value);
  },
  async get(key) {
    await null;
    return Cookies.get(key);
  },
};

export default asyncCookieHelper;
