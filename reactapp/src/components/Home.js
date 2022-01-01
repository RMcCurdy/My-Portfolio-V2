import RobertAnimation from './RobertAnimation';
import HomePageMessage from './HomePageMessage';
import RobertHighSchoolComputerAnimation from './RobertHighSchoolComputerAnimation';
import RobertHighSchoolMessage from './RobertHighSchoolMessage';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <HomePageMessage />
                <RobertAnimation />
            </div>
            <div className='home-container'>
                <RobertHighSchoolComputerAnimation />
                <RobertHighSchoolMessage />
            </div>
        </>
    );
};

export default Home;
