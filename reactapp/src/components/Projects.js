import '../styles.css';
import BandwagonPreview from '../images/basketball.png';
import MyGHPreview from '../images/myGH2.png';
import DiscordPreview from '../images/discord.png';
import WaitLessPreview from '../images/WaitLess.png';
import SkipTheBooksPreview from '../images/SkipTheBooks.png';

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='projects-row-container'>
                <div className='project-item-container project-item-float'>
                    <img
                        className='bandwagon-logo'
                        src={BandwagonPreview}
                        alt='bandwagon'
                    />
                </div>
                <div className='project-item-container project-item-float'>
                    <img className='my-gh-logo' src={MyGHPreview} alt='mygh' />
                </div>
            </div>
            <div className='projects-row-container'>
                <div className='project-item-container project-item-float'>
                    <img
                        className='skip-the-books-logo'
                        src={SkipTheBooksPreview}
                        alt='skipthebooks'
                    />
                </div>
                <div className='project-item-container project-item-float'>
                    <img
                        className='wait-less-logo'
                        src={WaitLessPreview}
                        alt='waitless'
                    />
                </div>
            </div>
            <div className='projects-row-container'>
                <div className='project-item-container project-item-float'>
                    <img
                        className='discord-bot-logo'
                        src={DiscordPreview}
                        alt='discord'
                    />
                    <div className='project-text-container'>
                        <div className='project-title'>Discord Bot</div>
                        <div className='project-description'>
                            JavaScript project created with
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
