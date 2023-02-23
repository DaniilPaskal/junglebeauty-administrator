import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({component:Component, ...rest}) => {
    const user = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return (user
                            ? <Component {...props} />
                            : <Navigate to='/login' />)
            }} />
    )
}

export default PrivateRoute;