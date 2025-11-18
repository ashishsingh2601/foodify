import { Spinner } from "@/components/ui/spinner";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const {isAuthenticated, isLoading} = useAuth0();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spinner className="size-8" />
            </div>
        );
    }

    if (isAuthenticated) {
        return <Outlet />;
    }

    return <Navigate to="/" replace />;
}

export default ProtectedRoute;
