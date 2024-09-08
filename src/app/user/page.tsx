import React from "react";

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onClose }) => {
  // if (!user) {
  //     return null; // Or render a fallback UI if user is not defined
  //   }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h3 className="text-xl font-bold text-gray-700 mb-4">User Details</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <span className="font-semibold">Name:</span>
            <span className="ml-2">{user.name}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Email:</span>
            <span className="ml-2">{user.email}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Phone:</span>
            <span className="ml-2">{user.phone}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Location:</span>
            <span className="ml-2">{user.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
