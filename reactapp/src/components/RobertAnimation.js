import { useEffect, useState } from 'react';
import robert from '../images/robert.png';
import robert2 from '../images/robert2.png';
import robert3 from '../images/robert3.png';
import robert4 from '../images/robert4.png';

const RobertAnimation = () => {
    const imgArray = [robert, robert2, robert3, robert4];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === 3) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div>
            <img
                style={{ width: '440px' }}
                src={imgArray[index]}
                alt='walkingRobert'
            />
        </div>
    );
};

export default RobertAnimation;
