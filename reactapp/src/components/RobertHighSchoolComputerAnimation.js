import { useEffect, useState } from 'react';
import robertComp1 from '../images/robertComp1.png';
import robertComp2 from '../images/robertComp2.png';
import robertComp3 from '../images/robertComp3.png';
import robertComp4 from '../images/robertComp4.png';
import robertComp5 from '../images/robertComp5.png';
import robertComp6 from '../images/robertComp6.png';
import robertComp7 from '../images/robertComp7.png';

const RobertHighSchoolComputerAnimation = () => {
    const imgArray = [
        robertComp1,
        robertComp2,
        robertComp3,
        robertComp4,
        robertComp5,
        robertComp6,
        robertComp7,
        robertComp7,
        robertComp7,
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === 8) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 200);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className='other-image-container'>
            <img
                className='robert-highschool-image'
                src={imgArray[index]}
                alt='walkingRobert'
            />
        </div>
    );
};

export default RobertHighSchoolComputerAnimation;
