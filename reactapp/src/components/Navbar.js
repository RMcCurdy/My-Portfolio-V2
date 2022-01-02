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
                        : location.pathname === '/skills'
                        ? 'var(--blue)'
                        : location.pathname === '/contact'
                        ? 'var(--purple)'
                        : location.pathname === '/projects'
                        ? 'var(--orange)'
                        : 'white',
            }}
            className='navbar-container'>
            <div
                style={{
                    borderBottom:
                        location.pathname === '/'
                            ? '3px solid black'
                            : '2px solid black',
                    paddingBottom: location.pathname === '/' ? '1px' : '0',
                    fontFamily: location.pathname === '/' ? 'Rubik' : 'Rubik-S',
                }}
                className='navbar-titles'
                onClick={() => handleNavbarClick('')}>
                Home
            </div>
            <div
                style={{
                    borderBottom:
                        location.pathname === '/skills'
                            ? '3px solid black'
                            : '2px solid black',
                    paddingBottom:
                        location.pathname === '/skills' ? '1px' : '0',
                    fontFamily:
                        location.pathname === '/skills' ? 'Rubik' : 'Rubik-S',
                }}
                className='navbar-titles'
                onClick={() => handleNavbarClick('skills')}>
                Skills
            </div>
            <div
                style={{
                    borderBottom:
                        location.pathname === '/projects'
                            ? '3px solid black'
                            : '2px solid black',
                    paddingBottom:
                        location.pathname === '/projects' ? '1px' : '0',
                    fontFamily:
                        location.pathname === '/projects' ? 'Rubik' : 'Rubik-S',
                }}
                className='navbar-titles'
                onClick={() => handleNavbarClick('projects')}>
                Projects
            </div>
            <div
                style={{
                    borderBottom:
                        location.pathname === '/contact'
                            ? '3px solid black'
                            : '2px solid black',
                    paddingBottom:
                        location.pathname === '/contact' ? '1px' : '0',
                    fontFamily:
                        location.pathname === '/contact' ? 'Rubik' : 'Rubik-S',
                }}
                className='navbar-titles'
                onClick={() => handleNavbarClick('contact')}>
                Contact
            </div>
        </div>
    );
};

export default Navbar;
