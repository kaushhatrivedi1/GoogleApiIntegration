import axios from "axios";

export const apiUtil = async (
  method: "GET" | "POST" | "DELETE" | "PUT",
  url: string,
  req = {},
  httpOnly = false,
  type = "json"
) => {
  const config = {
    Authorization:
      "Bearer " + JSON.parse(localStorage.getItem("access_token") || "{}"),
    "content-type": `application/${type}`,
  };
  try {
    const res = await axios({
      method: method,
      url: "http://localhost:8080" + `${url}`,
      data: req,
      withCredentials: httpOnly,
      headers: config,
    });
    if (res?.status === 200 || res.status === 201) {
      return { status: true, responseData: res.data };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error?.response) {
        return { status: false, responseData: "No Server Response" };
      } else if (error.response?.status === 401) {
        return { status: false, responseData: error };
      } else if (error.request) {
        return { status: false, responseData: error.request };
      } else {
        return { status: false, responseData: error.message };
      }
    }
  }
};
