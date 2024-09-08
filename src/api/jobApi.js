import axios from 'axios';

const BASE_URL = "https://bugbearback.onrender.com/api/jobs/search/";
const JOB_DETAILS_URL = "https://bugbearback.onrender.com/api/jobs/";

export const getJobs = async (searchQuery) => {
  try {
    const res = await axios.post(BASE_URL, {
      title: searchQuery,
    });
    return res.data.results;
  } catch (err) {
    console.error("Error during API request:", err);
    throw err; // Rethrow the error to handle it in the component
  }
};

// Function to fetch job details by ID
export const fetchJobDetails = async (id) => {
  try {
    const res = await axios.get(`${JOB_DETAILS_URL}${id}/`);
    return res.data;
  } catch (err) {
    console.error("Error during API request:", err);
    throw err; // Rethrow the error to handle it in the component
  }
};