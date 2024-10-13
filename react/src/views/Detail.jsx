import React from "react";
import {useParams} from 'react-router-dom'
import BackToTopButton from "../components/BackToTopButton";
import '../assets/css/style.css'
export const Detail = () => {
	const {slug} = useParams();

	return (
		<div className="main">
			<div className="row container">
				<div className="col-8">
					<div className="header-content d-flex justify-content-between">
						<ul className="breadcrumb">
							<li>Kinh doanh</li>
							<li>Quốc tế</li>
						</ul>
						<span className="time-content">Chủ nhật, 13/10/2024, 08:31 (GMT+7)</span>
					</div>
				</div>
			</div>
			<BackToTopButton/>
		</div>
	)

}