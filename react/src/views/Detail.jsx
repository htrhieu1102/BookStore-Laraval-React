import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import {Nav, Tab} from 'react-bootstrap'
import BackToTopButton from "../components/BackToTopButton";
import '../assets/css/style.css'
import axiosClient from "../axios-client";
import { convertDate } from "../untils/DateUtils";
export const Detail = () => {
	const { slug } = useParams();
	const [key, setKey] = useState('home');
	const [article, setArticle] = useState({});

	const apiDetail = async () => {
		await axiosClient.get(`/articles/detail/${slug}`)
		.then(({data})=> {
			setArticle(data)
			
		})
		.catch(error => {
			console.log(error);
			
		})
	}
	useEffect(()=> {
		apiDetail();
		console.log(article);
		
	},[])
	console.log(article);
	
	return (
		<div className="main">
			<div className="row container">
				<div className="col-8">
					<div className="header-content d-flex justify-content-between">
						<ul className="breadcrumb">
							{article.category?.parent?.name ? <li>{article.category?.parent?.name}</li> : ''}
							

							<li>{article.category?.name}</li>
						</ul>
						<span className="time-content">{convertDate(article.created_at)}</span>
					</div>
					<h2 className="title font-bold mb-4">{article.title}</h2>
					<p className="description font-bold fs-6">{article.description}</p>
					<img
						className="image img-fluid"
						src={article.image} alt="" />

					<p className="content">
						{article.detail}
					</p>
					<div className="comment">
						<div className="box-comment">
							<p className="header-comment">Bình luận</p>
							<textarea className="text-comment" name="" id="" placeholder="Nhập bình luận"></textarea>
							<div className="box-button text-end">
								<button className="button-send">Gửi bình luận</button>
							</div>
						</div>
						<div className="filter-comment">
							<Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
								<Nav variant="tabs">
									<Nav.Item>
										<Nav.Link eventKey="home">Mới nhất</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="profile">Quan tâm nhất</Nav.Link>
									</Nav.Item>
								</Nav>
								<Tab.Content>
									<Tab.Pane eventKey="home">										
										<p>This is the home tab content.</p>
									</Tab.Pane>
									<Tab.Pane eventKey="profile">
										<p>This is the profile tab content.</p>
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</div>
					</div>
				</div>
				<div className="col-4 mt-4">
					<h4 className="title-box-category">Liên quan</h4>
					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>
					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>

					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>
					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>
					<div className="item-news row border-bottom pb-4">
						<img src="https://i1-kinhdoanh.vnecdn.net/2024/10/11/starbuck-1728638546-1728638558-7783-1728639662.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=XvqODPB7ZDnKUaULCHmv3g"
							alt=""
							className="img-fluid col-6"
							width={300}
							height={180}
						/>
						<p className="description col-6 fw-bold">
							4 cách giảm phát thải của các ông lớn toàn cầu
						</p>
					</div>
				</div>
			</div>
			<BackToTopButton />
		</div>
	)

}