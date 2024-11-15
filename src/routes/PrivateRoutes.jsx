import { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
    const { users, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <div className='min-h-screen flex items-center justify-center'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (users && users?.email) {
        return children
    }

    return (
        <div>
            <Navigate state={location.pathname} to='/auth/login'></Navigate>

        </div>
    );
};

export default PrivateRoutes;