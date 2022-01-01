import RobertAnimation from './RobertAnimation';
import HomePageMessage from './HomePageMessage';
import RobertHighSchoolComputerAnimation from './RobertHighSchoolComputerAnimation';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <HomePageMessage />
                <RobertAnimation />
            </div>
            <div className='home-container'>
                <RobertHighSchoolComputerAnimation />
            </div>
        </>
    );
};

export default Home;
