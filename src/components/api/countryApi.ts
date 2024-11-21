import axios from "axios";

const API_KEY = 'country-api'
const BASE_URL = "https://api.gettyimages.com/v3";

export const fetchTopDestinations = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/countries`, {
        headers: {
          "Api-Key": API_KEY,
        },
      });
      return response.data.countries;
      console.log(response)
    } catch (error) {
      console.error("Error fetching top destinations:", error);
      throw error;
    }
  };