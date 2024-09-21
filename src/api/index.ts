import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://127.0.0.1:8000/api/user';

// Register new user API
export const registerUser = async (email: string, password: string, password2: string, user_type: string, tc: boolean) => {
    try {
        const res = await axios.post(`${API_URL}/register/`, {
            email,
            password,
            password2,
            user_type, // Pass user type (freelancer or organization)
            tc, // Terms and conditions agreement
        });

        const { access, refresh } = res.data.token; // Get tokens if returned upon registration
        const registeredUserType = res.data.user_type;

        // Save tokens and user_type in cookies
        Cookies.set('authToken', access, { expires: 1 / 24, path: '/', secure: process.env.NODE_ENV === 'production' });
        Cookies.set('refreshToken', refresh, { expires: 7, path: '/', secure: process.env.NODE_ENV === 'production' });
        Cookies.set('user_type', registeredUserType, { expires: 7, path: '/', secure: process.env.NODE_ENV === 'production' });

        return res.data;
    } catch (error) {
        console.error('Failed to register user', error);
        throw error;
    }
};

// Existing sign-in API
export const signinUser = async (email: string, password: string) => {
    try {
        const res = await axios.post(`${API_URL}/login/`, { email, password });
        const { access, refresh } = res.data.token;
        const user_type = res.data.user_type;

        // Save tokens and user_type in cookies
        Cookies.set('authToken', access, { expires: 1 / 24, path: '/', secure: process.env.NODE_ENV === 'production' });
        Cookies.set('refreshToken', refresh, { expires: 7, path: '/', secure: process.env.NODE_ENV === 'production' });
        Cookies.set('user_type', user_type, { expires: 7, path: '/', secure: process.env.NODE_ENV === 'production' });

        return res.data;
    } catch (error) {
        console.error('Failed to sign in', error);
        throw error;
    }
};

// Fetch user details API
export const fetchUserDetails = async () => {
    try {
        const token = Cookies.get('authToken');
        const userType = Cookies.get('user_type'); // Retrieve user_type from cookies

        if (!token) {
            throw new Error('No authentication token found');
        }

        const res = await axios.get(`${API_URL}/user-details/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        return { ...res.data, userType }; // Return user details along with user_type
    } catch (error) {
        console.error('Failed to fetch user details', error);
        throw error;
    }
};

// Optionally update the profile picture fetch API if required later
// export const fetchProfilePicture = async () => {
//     try {
//         const token = Cookies.get('authToken');
//         if (!token) {
//             throw new Error('No authentication token found');
//         }

//         const res = await axios.get(`${API_URL}/upload-profile-pic/`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         });

//         return res.data.profileImage; // Assuming backend returns the image URL in the 'profileImage' field
//     } catch (error) {
//         console.error('Failed to fetch profile picture', error);
//         throw error;
//     }
// };
