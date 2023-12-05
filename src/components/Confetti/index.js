import ReactConfetti from 'react-confetti';
import { useState, useEffect } from 'react';

const Confetti = () => {
    const [windowDimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const detectSize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        };
    }, [windowDimension]);

    return (
        <ReactConfetti
            width={windowDimension.width}
            height={windowDimension.height}
            tweenDuration={1000}
            gravity={0.09}
        />
    );
};

export default Confetti;
