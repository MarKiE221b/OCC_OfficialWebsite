import { makeRequest } from "../axios";

export const uploadNews = async (formData) => {
  try {
    const response = await makeRequest.post("/uploadNews", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading news:", error);
    throw error;
  }
};

export const getNews = async () => {
  try {
    const response = await makeRequest.get("/getAllNews");
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
