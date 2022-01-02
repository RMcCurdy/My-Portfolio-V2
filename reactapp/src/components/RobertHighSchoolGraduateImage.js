// import { useEffect, useState } from 'react';
import RobertGraduateImage from '../images/robertGraduate2.png';

const RobertHighSchoolGraduateImage = () => {
    // const imgArray = [
    //     robertComp1,
    //     robertComp2,
    //     robertComp3,
    //     robertComp4,
    //     robertComp5,
    //     robertComp6,
    //     robertComp7,
    //     robertComp7,
    //     robertComp7,
    // ];

    // const [index, setIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (index === 8) {
    //             setIndex(0);
    //         } else {
    //             setIndex(index + 1);
    //         }
    //     }, 200);
    //     return () => clearInterval(interval);
    // }, [index]);

    return (
        <div className='other-image-container'>
            <img
                className='robert-graduate-image'
                src={RobertGraduateImage}
                alt='graduateRobert'
            />
        </div>
    );
};

export default RobertHighSchoolGraduateImage;
