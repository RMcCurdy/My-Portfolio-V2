import { useNavigate, useLocation } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
    // History variable is used to update the path of the site
    const navigate = useNavigate();
    const location = useLocation();

    // Function that takes the path of the clicked item on the navbar to update the route
    const handleNavbarClick = (route) => {
        navigate(route);
    };

    return (
        <div
            style={{
                backgroundColor:
                    location.pathname === '/' ? 'var(--green)' : 'white',
            }}
            className='navbar-container'>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
        </div>
    );
};

export default Navbar;
