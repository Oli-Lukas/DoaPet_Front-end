import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
},);

export const IbgeApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/",
});