import { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
    const { users, loader } = useContext(AuthContext);

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
            <Navigate to='/auth/login'></Navigate>

        </div>
    );
};

export default PrivateRoutes;