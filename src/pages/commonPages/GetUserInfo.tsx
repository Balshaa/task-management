import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    role: string;
    jobTitle: string;
    isAdmin: boolean;
  
  }

interface GetUserInfoProps {
  children: (userInfo: User | null) => React.ReactNode;
}

const GetUserInfo: React.FC<GetUserInfoProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          'https://task-management-opll.onrender.com/api/auth/get-user-info',
          config
        );
        setUserInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUserInfo();
  }, []);

  console.log(userInfo);

  return <>{children(userInfo)}</>;
};

export default GetUserInfo;