// src/features/api/axiosBaseQuery.js
import axios from "axios";

/**
 * Axios base query function for RTK Query (no auth needed).
 * @param {Object} options - Axios options like baseUrl and default headers.
 */

const lan = localStorage.getItem("lan");

const axiosBaseQuery =
  ({ baseUrl, defaultHeaders = {} } = {}) =>
  async ({ url, method = "GET", data, params, headers = {} }) => {
    try {
      const isFormData = data instanceof FormData;

      const finalHeaders = {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...defaultHeaders,
        ...headers,
      };

      // Add lan=... properly based on whether URL already has ?
      const separator = url.includes("?") ? "&" : "?";
      const fullUrl = `${baseUrl}${url}${separator}lan=${lan || "en"}`;

      const response = await axios({
        url: fullUrl,
        method,
        headers: finalHeaders,
        data: ["POST", "PUT", "PATCH"].includes(method.toUpperCase())
          ? data
          : undefined,
        params: ["GET", "DELETE"].includes(method.toUpperCase())
          ? params
          : undefined,
      });

      return { data: response.data };
    } catch (error) {
      return {
        error: {
          status: error.response?.status || 500,
          data:
            error.response?.data ||
            error.message ||
            "An unknown error occurred",
        },
      };
    }
  };

export default axiosBaseQuery;
