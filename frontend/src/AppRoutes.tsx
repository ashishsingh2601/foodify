import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layouts/layouts";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="/user-profile" element={<span>User</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes; 