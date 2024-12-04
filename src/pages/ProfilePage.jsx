import { useEffect, useState } from "react";
import axios from 'axios';

export function ProfilePage() {
    const Token = (localStorage.getItem('jwt_token'));
    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${Token}`,
                    },
                });
                console.log(response.data);
            } catch (error) {
                console.error(error.response.data.message);
            }
        };

        getProfile();
    }, []);
    const users = {
        name: "Nguyễn Văn A",  // Thay tên người dùng ở đây
        joinDate: "2022-01-01",  // Ngày tham gia
        avatarUrl: "https://www.w3schools.com/w3images/avatar2.png",  // Avatar mặc định
    };
    return (
        <div className="flex items-center p-8 space-x-6">
            {/* Avatar */}
            <img
                src={users.avatarUrl}
                alt="Avatar"
                className="w-32 h-32 rounded-full object-cover" // Tăng kích thước avatar
            />
            {/* Thông tin người dùng */}
            <div>
                <h2 className="text-3xl font-bold text-gray-900">{users.name}</h2> {/* Tăng kích thước tên */}
                <p className="text-lg text-gray-500">Ngày tham gia: {users.joinDate}</p> {/* Tăng kích thước ngày tham gia */}
            </div>
        </div>
    );
}
