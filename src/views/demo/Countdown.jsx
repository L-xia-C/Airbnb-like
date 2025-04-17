import React, { useState, useEffect } from 'react';



const Countdown = ({ deadline }) => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = deadline.getTime() - now.getTime();

            if (difference <= 0) {
                return { hours: 0, minutes: 0, seconds: 0 };
            }

            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { hours, minutes, seconds };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // 初始计算一次
        setTimeLeft(calculateTimeLeft());

        return () => clearInterval(timer);
    }, [deadline]);

    return (
        <div>
            {timeLeft.hours}时{timeLeft.minutes}分{timeLeft.seconds}秒
        </div>
    );
};

export default Countdown;