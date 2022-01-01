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
                    location.pathname === '/'
                        ? 'var(--green)'
                        : location.pathname === '/about'
                        ? 'var(--purple)'
                        : location.pathname === '/contact'
                        ? 'var(--blue)'
                        : location.pathname === '/projects'
                        ? 'var(--orange)'
                        : 'white',
            }}
            className='navbar-container'>
            <div
                className='navbar-titles'
                onClick={() => handleNavbarClick('')}>
                Home
            </div>
            <div
                className='navbar-titles'
                onClick={() => handleNavbarClick('about')}>
                About
            </div>
            <div
                className='navbar-titles'
                onClick={() => handleNavbarClick('projects')}>
                Projects
            </div>
            <div
                className='navbar-titles'
                onClick={() => handleNavbarClick('contact')}>
                Contact
            </div>
        </div>
    );
};

export default Navbar;
