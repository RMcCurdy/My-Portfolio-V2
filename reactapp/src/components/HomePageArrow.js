import { useEffect, useState } from 'react';
import Arrow1 from '../images/Arrow1.png';
import Arrow2 from '../images/Arrow2.png';
import Arrow3 from '../images/Arrow3.png';
import Arrow4 from '../images/Arrow4.png';
import Arrow5 from '../images/Arrow5.png';

const HomePageArrow = () => {
    const imgArray = [
        Arrow1,
        Arrow2,
        Arrow3,
        Arrow4,
        Arrow5,
        Arrow4,
        Arrow3,
        Arrow2,
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === 7) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className='home-arrow-fade-in'>
            <img className='home-arrow' src={imgArray[index]} alt='arrow' />
        </div>
    );
};

export default HomePageArrow;
