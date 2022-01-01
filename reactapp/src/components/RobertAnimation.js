import { useEffect, useState } from 'react';
import robert from '../images/robert.png';
import robert2 from '../images/robert2.png';
import robert3 from '../images/robert3.png';
import robert4 from '../images/robert4.png';
import robert5 from '../images/robert5.png';
import robert6 from '../images/robert6.png';

const RobertAnimation = () => {
    const imgArray = [robert, robert2, robert3, robert4, robert5, robert6];

    const [index, setIndex] = useState(0);
    const [animationCount, setAnimationCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === 5) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
            setAnimationCount(animationCount + 1);
        }, 75);
        return () => clearInterval(interval);
    }, [index, animationCount]);

    return (
        <div className='robert-container-animation'>
            <img
                className='robert-image'
                src={animationCount >= 25 ? robert : imgArray[index]}
                alt='walkingRobert'
            />
        </div>
    );
};

export default RobertAnimation;
