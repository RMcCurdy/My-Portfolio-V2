import GitHubLogo from '../images/myGH3.png';
import LinkedInLogo from '../images/LinkedInLogo.png';
import ResumeLogo from '../images/ResumeLogo.png';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-socials-container'>
                <img
                    onClick={() =>
                        window.open('https://github.com/RMcCurdy', '_blank')
                    }
                    className='contact-socials'
                    src={GitHubLogo}
                    alt='github'
                />
                <img
                    className='contact-socials'
                    src={LinkedInLogo}
                    alt='linkedin'
                />
                <img
                    className='contact-socials'
                    src={ResumeLogo}
                    alt='resume'
                />
            </div>
        </div>
    );
};

export default Contact;
