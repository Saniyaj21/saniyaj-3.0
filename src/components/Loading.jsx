import React from 'react';
import '../styles/loading.scss';
import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className="load-screen">
            <ReactLoading type={'bars'} color={'blue'} height={67} width={75} />
        </div>
    )
}

export default Loading