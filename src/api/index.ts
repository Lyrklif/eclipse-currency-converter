import axios from "axios";
import type { AxiosInstance, AxiosPromise } from "axios";
import type { ResRatesInterface, ResExchangesInterface } from "./types";

export interface ApiInterface {
  exchanges: () => AxiosPromise<ResExchangesInterface>;
  rates: () => AxiosPromise<ResRatesInterface>;
}

const instance: AxiosInstance = axios.create({
  baseURL: "https://www.cbr-xml-daily.ru/",
});

const apiClient: ApiInterface = {
  exchanges() {
    return instance.get("daily_json.js");
  },
  rates() {
    return instance.get("latest.js");
  },
};

export default apiClient;
