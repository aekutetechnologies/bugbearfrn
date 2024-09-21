"use client"; // Add this line at the very top

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import { signinUser, fetchUserDetails } from '../api'; // Adjust path as necessary
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';


interface User {
    id: number;
    first_name: string;
    last_name: string;
    dob: string;
    country: string;
    city: string;
    address: string;
    phone: string;
    profile_pic_url: string;
    about_me: string;
    position: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signin: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const loadUser = async () => {
            try {
                const userDetails = await fetchUserDetails();
                setUser(userDetails);
            } catch (error) {
                console.error('Failed to fetch user details', error);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, []);

    const signin = async (email: string, password: string) => {
        try {
            await signinUser(email, password);
            const userDetails = await fetchUserDetails();
            setUser(userDetails);
        } catch (error) {
            console.error('Failed to sign in', error);
            throw error;
        }
    };

    const logout = () => {
        Cookies.remove('authtoken'); // Remove auth token from cookies
        Cookies.remove('refreshtoken');
        Cookies.remove('user_type'); // Remove user_type from cookies
        setUser(null);
        router.push('/')
        toast.success("Logout Successfully")
    };

    return (
        <AuthContext.Provider value={{ user, loading, signin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Export useAuth hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
