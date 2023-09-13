import React from "react";
import "../styles/loading.scss";
import ReactLoading from "react-loading";

const Loading = () => {
	return (


		<div className="container-loading">
			<div className="text-box">
				<div className="hi util"></div>
				<div className="name util"></div>
				<div className="writer util"></div>

				<div className="btn-group">
					<div className="btn-loading util"></div>
					<div className="btn-loading util"></div>
				</div>
			</div>
			<div className="image-box">
				<div className="img util"></div>
			</div>
		</div>



		// <div className='loading-container'>
		// 	<div class='circle'></div>
		// </div>

		// <div className="load-screen">
		//     <ReactLoading type={'bars'} color={'blue'} height={67} width={75} />
		// </div>
	);
};

export default Loading;
