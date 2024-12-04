import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Giả sử bạn đang dùng AuthContext

export function PrivateRoute({ children }) {
    const { setUser } = useAuth(); // Kiểm tra trạng thái đăng nhập từ AuthContext
    setUser(localStorage.getItem('user'));
    if (!localStorage.getItem('user')) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
