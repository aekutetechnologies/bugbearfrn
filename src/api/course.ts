import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://127.0.0.1:8000/api'; // Adjust the base URL as needed

// Fetch all courses API
export const fetchCourses = async () => {
    try {
        const token = Cookies.get('authToken');

        if (!token) {
            throw new Error('No authentication token found');
        }

        const res = await axios.get(`${API_URL}/courses`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        return res.data; // Assuming backend returns the list of courses
    } catch (error) {
        console.error('Failed to fetch courses', error);
        throw error;
    }
};

// Fetch a specific course by ID
// export const fetchCourseById = async (courseId: string) => {
//     try {
//         const token = Cookies.get('authToken');

//         if (!token) {
//             throw new Error('No authentication token found');
//         }

//         const res = await axios.get(`${API_URL}/${courseId}/`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         });

//         return res.data; // Assuming backend returns course details
//     } catch (error) {
//         console.error(`Failed to fetch course with ID: ${courseId}`, error);
//         throw error;
//     }
// };

// Enroll in a course API
// export const enrollInCourse = async (courseId: string) => {
//     try {
//         const token = Cookies.get('authToken');

//         if (!token) {
//             throw new Error('No authentication token found');
//         }

//         const res = await axios.post(
//             `${API_URL}/${courseId}/enroll/`,
//             {},
//             {
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                 },
//             }
//         );

//         return res.data; // Assuming backend returns enrollment confirmation
//     } catch (error) {
//         console.error(`Failed to enroll in course with ID: ${courseId}`, error);
//         throw error;
//     }
// };
