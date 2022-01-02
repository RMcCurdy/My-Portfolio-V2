import RobertAnimation from './RobertAnimation';
import HomePageMessage from './HomePageMessage';
import RobertHighSchoolComputerAnimation from './RobertHighSchoolComputerAnimation';
import RobertHighSchoolMessage from './RobertHighSchoolMessage';
import RobertHighSchoolGraduateMessage from './RobertHighSchoolGraduateMessage';
import RobertHighSchoolGraduateImage from './RobertHighSchoolGraduateImage';
import RobertUniversityImage from './RobertUniversityImage';
import RobertUniversityMessage from './RobertUniversityMessage';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <HomePageMessage />
                <RobertAnimation />
            </div>
            <div className='other-home-containers'>
                <RobertHighSchoolComputerAnimation />
                <RobertHighSchoolMessage />
            </div>
            <div className='other-home-containers column-reverse'>
                <RobertHighSchoolGraduateMessage />
                <RobertHighSchoolGraduateImage />
            </div>
            <div className='bottom-home-containers'>
                <RobertUniversityImage />
                <RobertUniversityMessage />
            </div>
        </>
    );
};

export default Home;
