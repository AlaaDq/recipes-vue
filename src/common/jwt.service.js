import Vue from "vue"
const ID_TOKEN_KEY = "id_token";

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const  setHeader = () => {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${getToken()}`;
};

export default { getToken, saveToken, destroyToken, setHeader };