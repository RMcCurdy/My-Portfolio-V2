import AppContext from './AppContext';
import { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const AppState = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [user, setUser] = useState('false');

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                isMobile,
            }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
