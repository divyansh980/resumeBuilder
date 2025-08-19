import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    "Content-Type": 'application/json',
    "Authorization": `Bearer ${API_KEY}`
  }
});

// Strapi requires { data: { ...fields } }
const CreateNewResume = (resumeData) => axiosClient.post('/user-resumes', {
  data: resumeData
});


const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);
export default {
  CreateNewResume,
  GetUserResumes
};
