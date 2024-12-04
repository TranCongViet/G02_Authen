import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { Header } from '../components/Header';
//import { Footer } from '../components/Footer';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';
import { HomePage } from '../pages/HomePage';
import { ProfilePage } from '../pages/ProfilePage';
import { PrivateRoute } from '../components/PrivateRouter';

export function User() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/profile" element={
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                } />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}