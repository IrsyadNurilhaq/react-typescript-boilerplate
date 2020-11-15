const set = (key: string, valueObj: any) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, JSON.stringify(valueObj));
      resolve(valueObj);
    } catch (e) {
      reject(e);
    }
  });
};

const get = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key)!);
  } catch (error) {
    return null;
  }
};
const remove = (key: string) => {
  localStorage.removeItem(key);
  return localStorage.getItem(key) === null;
};

export default {
  set,
  get,
  remove,
};
