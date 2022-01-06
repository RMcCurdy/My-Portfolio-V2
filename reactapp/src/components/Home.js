import { useState, useEffect } from 'react';

import RobertAnimation from './RobertAnimation';
import HomePageMessage from './HomePageMessage';
import RobertHighSchoolComputerAnimation from './RobertHighSchoolComputerAnimation';
import RobertHighSchoolMessage from './RobertHighSchoolMessage';
import RobertHighSchoolGraduateMessage from './RobertHighSchoolGraduateMessage';
import RobertHighSchoolGraduateImage from './RobertHighSchoolGraduateImage';
import RobertUniversityImage from './RobertUniversityImage';
import RobertUniversityMessage from './RobertUniversityMessage';
import HomePageArrow from './HomePageArrow';

const Home = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [dyanmicClassName, setDynamicClassName] = useState(
        'home-arrow-fade-in-visible',
    );

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const listenToScroll = () => {
        let heightToHideFrom = 0;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible && // to limit setting state only the first time
                setIsVisible(false);
            setDynamicClassName('home-arrow-fade-in-invisible');
        } else {
            setIsVisible(true);
            setDynamicClassName('home-arrow-fade-in-visible');
        }
    };

    return (
        <>
            <div className='home-container'>
                <HomePageMessage />
                <RobertAnimation />
            </div>
            <div className='home-arrow-container'>
                <div className={dyanmicClassName}>
                    <HomePageArrow />
                </div>
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
