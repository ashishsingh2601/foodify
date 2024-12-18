import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layouts/layouts";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout>Home Page</Layout>}></Route>
            <Route path="/user-profile" element={<span>User</span>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
    )
}

export default AppRoutes;