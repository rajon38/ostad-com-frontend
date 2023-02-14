import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {

    const[count, setCount] = useState(3);
    //hooks
    const navigate = useNavigate();

    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);

        //redirect one count is equal to 0
        count === 0 && navigate("/login");
        //cleanUp
        return () => clearInterval(interval);
    }, [count])
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            Redirecting you in {count} seconds.
        </div>
    );
};

export default Loading;