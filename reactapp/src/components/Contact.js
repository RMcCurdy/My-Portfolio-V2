import GitHubLogo from '../images/myGH3.png';
import LinkedInLogo from '../images/LinkedInLogo.png';
import ResumeLogo from '../images/ResumeLogo.png';

const Contact = () => {
    // function sendEmail(address) {
    //     window.location.href = 'mailto:' + address;
    // }

    return (
        <div className='contact-container'>
            <div className='contact-socials-email-header'>
                You can get in contact with me by sending an email to:
            </div>
            <div
                // onClick={() => sendEmail('rwmccurdy@hotmail.com')}
                className='contact-socials-email'>
                rwmccurdy@hotmail.com
            </div>
            <div className='contact-socials-header'>
                Feel free to view my GitHub, LinkedIn, or Resume below.
            </div>
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
                    onClick={() =>
                        window.open(
                            'https://www.linkedin.com/in/robert-mccurdy/',
                            '_blank',
                        )
                    }
                    className='contact-socials'
                    src={LinkedInLogo}
                    alt='linkedin'
                />
                <img
                    onClick={() =>
                        window.open(
                            'https://drive.google.com/file/d/1CaDL7z_ibbJcyZ6gRmV6OVGgWmW7kU-r/view?usp=sharing',
                            '_blank',
                        )
                    }
                    className='contact-socials'
                    src={ResumeLogo}
                    alt='resume'
                />
            </div>
        </div>
    );
};

export default Contact;
