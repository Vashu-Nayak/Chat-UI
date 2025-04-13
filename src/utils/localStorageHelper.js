
const getLocalStorageData = (key, defaultValue = []) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
};
  
const setLocalStorageData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
  
export { getLocalStorageData, setLocalStorageData };
  