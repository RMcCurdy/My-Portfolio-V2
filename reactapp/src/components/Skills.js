import ReactLogo from '../images/ReactLogo.png';
import JSLogo from '../images/JSLogo.png';
import HTMLLogo from '../images/HTMLLogo.png';
import CSSLogo from '../images/CSSLogo.png';
import CSharpLogo from '../images/CSharpLogo.png';
import SQLLogo from '../images/SQLLogo.png';
import AdobeXDLogo from '../images/AdobeXDLogo.png';
import BalsamiqLogo from '../images/BalsamiqLogo.png';
import NodeJSLogo from '../images/NodeJSLogo.png';

const About = () => {
    return (
        <div className='skills-container'>
            <div
                style={{ margin: '1rem' }}
                className='skills-text-container-header'>
                <div
                    style={{ margin: '2rem' }}
                    className='skills-text-content-header'>
                    The main area of my expertise is in Front End development.
                </div>
            </div>
            <div
                style={{ marginBottom: '2rem' }}
                className='skills-text-container'>
                <div className='skills-text-content'>
                    The languages I'm most familiar with
                </div>
                <div className='skills-text-content'>
                    are JavaScript, HTML, and CSS while
                </div>
                <div className='skills-text-content'>
                    working under the React framework.
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '5rem' }}>
                <img
                    className='skills-language-logo logo-shadow'
                    src={ReactLogo}
                    alt='react'
                />
                <img
                    className='skills-language-logo'
                    src={JSLogo}
                    alt='javascript'
                />
                <img
                    className='skills-language-logo'
                    src={HTMLLogo}
                    alt='html'
                />
                <img className='skills-language-logo' src={CSSLogo} alt='css' />
            </div>
            <div
                style={{ marginBottom: '2rem' }}
                className='skills-text-container'>
                <div className='skills-text-content'>
                    I have experience with SQL, MySQL,
                </div>
                <div className='skills-text-content'>
                    C# and Node.js while working on group
                </div>
                <div className='skills-text-content'>
                    projects and my own projects.
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '5rem' }}>
                <img className='skills-language-logo' src={SQLLogo} alt='sql' />
                <img
                    className='skills-language-logo'
                    src={CSharpLogo}
                    alt='csharp'
                />
                <img
                    className='skills-language-logo'
                    src={NodeJSLogo}
                    alt='nodejs'
                />
            </div>
            <div
                style={{ marginBottom: '2rem' }}
                className='skills-text-container'>
                <div className='skills-text-content'>
                    In multiple university classes, I have
                </div>
                <div className='skills-text-content'>
                    used AdobeXD and Balsamiq to create
                </div>
                <div className='skills-text-content'>
                    wireframing prototypes.
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '5rem' }}>
                <img
                    className='skills-language-logo'
                    src={AdobeXDLogo}
                    alt='adobexd'
                />
                <img
                    className='skills-language-logo'
                    src={BalsamiqLogo}
                    alt='balsamiq'
                />
            </div>
        </div>
    );
};

export default About;
