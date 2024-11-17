import axios from "axios";
import { OptionType } from "../CommonFiles/CommonTypes";

declare const window: any;

declare const process: any;

// eslint-disable-next-line import/prefer-default-export
export const ajaxCall = async (options: OptionType) => {
  const token = window.keycloakInstance?.token;
  const apiUrl =
    process.env?.REACT_APP_API_URL ??
    "https://light-astrid-abdur1-20b132f1.koyeb.app/backendservice/";

  const headers = {
    // Authorization: `Bearer ${token}`,
    // "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "* ",
    "Access-Control-Allow-Methods": "*",
    ...options.headers,
  };

  const method: string = options.method || "GET";
  const data = options.data || {};
  const contentType: string =
    options.contentType || "application/x-www-form-urlencoded; charset=UTF-8";
  const processData = !!options.processData;
  const responseType = options.responseType || "json";
  const url = options.wholeUrl ?? `${apiUrl}${options.url}`;

  const config = {
    type: method,
    dataType: "json",
    cache: false,
    headers,
    processData,
    contentType,
  };

  if (method === "POST") {
    return await axios.post(url, data, {
      ...config,
      data,
    });
  }
  if (method === "PUT") {
    return await axios.put(url, data, {
      ...config,
      data,
    });
  }
  if (method === "DELETE") {
    return await axios.delete(url, { data, headers: config.headers });
  }

  return await axios.get(url, {
    ...config,
    data,
    responseType,
  });
};
