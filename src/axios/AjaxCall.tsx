import axios from "axios";
import { OptionType } from "../CommonFiles/CommonTypes";

declare const window: any;

// eslint-disable-next-line import/prefer-default-export
export const ajaxCall = async (options: OptionType) => {
    const token = window.keycloakInstance?.token;

    const headers = {
        // Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "* ",
        "Access-Control-Allow-Methods": "*",
        ...options.headers
    };

    const method: string = options.method || "GET";
    const data = options.data || {};
    const contentType: string =
        options.contentType || "application/x-www-form-urlencoded; charset=UTF-8";
    const processData = !!options.processData;
    const responseType = options.responseType || "json";
    const url = `https://samplespringboot-production.up.railway.app/${options.url}`;

    const config = {
        type: method,
        dataType: "json",
        cache: false,
        headers,
        processData,
        contentType,
    };

    if (method === "POST") {
        return axios.post(url, data, {
            ...config,
            data,
        });
    }
    if (method === "PUT") {
        return axios.put(url, data, {
            ...config,
            data,
        });
    }
    if (method === "DELETE") {
        return axios.delete(url, { data, headers: config.headers });
    }

    return axios.get(url, {
        ...config,
        data,
        responseType,
    });
};
