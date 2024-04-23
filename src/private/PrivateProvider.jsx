import { Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
const PrivateProvider = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <div className="min-h-screen bg-bodyColor py-10 px-5 flex items-center justify-center gap-5">
                <h1 className='text-3xl font-bold text-primeColor'>Loading</h1>
                <span className="loading loading-bars loading-lg text-primeColor"></span>
            </div>
        )
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to={'/'} replace></Navigate>
};

export default PrivateProvider;