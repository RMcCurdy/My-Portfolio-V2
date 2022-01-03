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
                    <div className='project-text-container'>
                        <div className='project-title'>Bandwagon</div>
                        <div className='project-description'>
                            A web application that utilizes NBA Team's and
                            player data to give accurate predictions for the
                            outcome of games
                        </div>
                        <div
                            className='project-links'
                            onClick={() =>
                                window.open(
                                    'https://github.com/RMcCurdy/Bandwagon',
                                    '_blank',
                                )
                            }>
                            GitHub
                        </div>
                    </div>
                </div>
                <div className='project-item-container project-item-float'>
                    <img className='my-gh-logo' src={MyGHPreview} alt='mygh' />
                    <div className='project-text-container'>
                        <div className='project-title'>MyGH</div>
                        <div className='project-description'>
                            A web application that implements the GitHub REST
                            API to show detailed user information.
                        </div>
                        <div className='project-links-container'>
                            <div
                                className='project-links'
                                onClick={() =>
                                    window.open(
                                        'https://github.com/RMcCurdy/MyGH',
                                        '_blank',
                                    )
                                }>
                                GitHub
                            </div>
                            <div
                                className='project-links'
                                onClick={() =>
                                    window.open(
                                        'https://rmccurdy.github.io/MyGH/',
                                        '_blank',
                                    )
                                }>
                                Website
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects-row-container'>
                <div className='project-item-container project-item-float'>
                    <img
                        className='skip-the-books-logo'
                        src={SkipTheBooksPreview}
                        alt='skipthebooks'
                    />
                    <div className='project-text-container'>
                        <div className='project-title'>SkipTheBooks</div>
                        <div className='project-description'>
                            Submission for CalgaryHack2021. A web application
                            that provides students utilities for tracking their
                            school schedule and ordering takeout
                        </div>
                        <div className='project-links-container'>
                            <div
                                className='project-links'
                                onClick={() =>
                                    window.open(
                                        'https://github.com/RMcCurdy/CalgaryHacks2021',
                                        '_blank',
                                    )
                                }>
                                GitHub
                            </div>
                            <div
                                className='project-links'
                                onClick={() =>
                                    window.open(
                                        'https://duan-le.github.io/CalgaryHacks2021/',
                                        '_blank',
                                    )
                                }>
                                Website
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-item-container project-item-float'>
                    <img
                        className='wait-less-logo'
                        src={WaitLessPreview}
                        alt='waitless'
                    />
                    <div className='project-text-container'>
                        <div className='project-title'>WaitLess</div>
                        <div className='project-description'>
                            A mobile application concept to improve the virtual
                            academic advising experience for students by
                            refining a virtual line up system.
                        </div>
                        <div className='project-links-container'>
                            <div
                                className='project-links'
                                onClick={() =>
                                    window.open(
                                        'https://github.com/RMcCurdy/TeamS_Project',
                                        '_blank',
                                    )
                                }>
                                GitHub
                            </div>
                            <div
                                className='project-links'
                                onClick={() =>
                                    window.open(
                                        'https://edmunds13.github.io/#',
                                        '_blank',
                                    )
                                }>
                                Website
                            </div>
                        </div>
                    </div>
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
                            An AI that can perform a number of useful automated
                            tasks and bot commands on a Discord server.
                        </div>
                        <div
                            className='project-links'
                            onClick={() =>
                                window.open(
                                    'https://github.com/RMcCurdy/Discord-Bot',
                                    '_blank',
                                )
                            }>
                            GitHub
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
