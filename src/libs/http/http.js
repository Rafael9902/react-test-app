const baseUrl = import.meta.env.VITE_REACT_APP_API_URL; 

const get = (endpoint) => {
  return fetch(`${baseUrl}/${endpoint}`)
};

export default { get };
