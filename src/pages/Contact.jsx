import React, { useEffect, useState } from "react";
import Loading from '../components/Loading';

const Contact = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? <Loading /> :
                <div className=''>
                    <h1>Contact</h1>
                </div >
            }
        </>
    )
}

export default Contact