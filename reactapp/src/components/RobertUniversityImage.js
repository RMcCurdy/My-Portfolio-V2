import { useEffect, useState } from 'react';
import robertUni1 from '../images/robertUni1.png';
import robertUni2 from '../images/robertUni2.png';
import robertUni3 from '../images/robertUni3.png';
import robertUni4 from '../images/robertUni4.png';

const RobertUniversityImage = () => {
    const imgArray = [
        robertUni1,
        robertUni2,
        robertUni3,
        robertUni4,
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === 3) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 200);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className='other-image-container'>
            <img className='robert-university-image' src={imgArray[index]} alt='universityRobert' />
        </div>
    );
};

export default RobertUniversityImage;
